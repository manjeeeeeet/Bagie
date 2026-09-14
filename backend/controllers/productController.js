const Product = require("../models/Product");

/* =========================
   Get All Products
   Search / Filter / Sort
========================= */

const getProducts = async (req, res) => {
  try {
    const {
      search,
      category,
      sort,
      featured,
      trending,
      bestSeller,
      page = 1,
      limit = 12,
    } = req.query;

    const filter = {
      isActive: true,
    };

    /* Search */

    if (search) {
      filter.$or = [
        {
          name: {
            $regex: search,
            $options: "i",
          },
        },
        {
          brand: {
            $regex: search,
            $options: "i",
          },
        },
        {
          category: {
            $regex: search,
            $options: "i",
          },
        },
      ];
    }

    /* Category */

    if (category && category !== "All") {
      filter.category = category;
    }

    /* Featured */

    if (featured === "true") {
      filter.isFeatured = true;
    }

    /* Trending */

    if (trending === "true") {
      filter.isTrending = true;
    }

    /* Best Seller */

    if (bestSeller === "true") {
      filter.isBestSeller = true;
    }

    /* Pagination */

    const currentPage = Math.max(Number(page), 1);
    const productsPerPage = Math.min(Number(limit), 50);

    const skip = (currentPage - 1) * productsPerPage;

    /* Sorting */

    let sortOption = {
      createdAt: -1,
    };

    if (sort === "price-low") {
      sortOption = {
        price: 1,
      };
    }

    if (sort === "price-high") {
      sortOption = {
        price: -1,
      };
    }

    if (sort === "rating") {
      sortOption = {
        rating: -1,
      };
    }

    if (sort === "oldest") {
      sortOption = {
        createdAt: 1,
      };
    }

    const [products, totalProducts] = await Promise.all([
      Product.find(filter)
        .sort(sortOption)
        .skip(skip)
        .limit(productsPerPage),

      Product.countDocuments(filter),
    ]);

    res.status(200).json({
      success: true,
      count: products.length,
      totalProducts,
      currentPage,
      totalPages: Math.ceil(totalProducts / productsPerPage),
      products,
    });
  } catch (error) {
    console.error("Get products error:", error);

    res.status(500).json({
      success: false,
      message: "Unable to fetch products",
    });
  }
};

/* =========================
   Get Single Product
========================= */

const getProductById = async (req, res) => {
  try {
    const product = await Product.findOne({
      _id: req.params.id,
      isActive: true,
    });

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    res.status(200).json({
      success: true,
      product,
    });
  } catch (error) {
    console.error("Get product error:", error);

    res.status(500).json({
      success: false,
      message: "Unable to fetch product",
    });
  }
};

/* =========================
   Create Product
   Admin
========================= */

const createProduct = async (req, res) => {
  try {
    const {
      name,
      brand,
      category,
      price,
      discountPrice,
      description,
      images,
      colors,
      variants,
      stock,
      isFeatured,
      isTrending,
      isBestSeller,
      isActive,
    } = req.body;

    if (!name || !category || price === undefined || !description) {
      return res.status(400).json({
        success: false,
        message: "Please provide all required product fields",
      });
    }

    if (!images || !Array.isArray(images) || images.length === 0) {
      return res.status(400).json({
        success: false,
        message: "At least one product image is required",
      });
    }

    const product = await Product.create({
      name,
      brand: brand || "Bagie",
      category,
      price,
      discountPrice,
      description,
      images,
      colors: colors || [],
      variants: variants || [],
      stock: stock || 0,
      isFeatured: Boolean(isFeatured),
      isTrending: Boolean(isTrending),
      isBestSeller: Boolean(isBestSeller),
      isActive: isActive !== undefined ? Boolean(isActive) : true,
    });

    res.status(201).json({
      success: true,
      message: "Product created successfully",
      product,
    });
  } catch (error) {
    console.error("Create product error:", error);

    res.status(500).json({
      success: false,
      message: "Unable to create product",
      error: error.message,
    });
  }
};

/* =========================
   Update Product
   Admin
========================= */

const updateProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    const allowedFields = [
      "name",
      "brand",
      "category",
      "price",
      "discountPrice",
      "description",
      "images",
      "colors",
      "variants",
      "stock",
      "isFeatured",
      "isTrending",
      "isBestSeller",
      "isActive",
    ];

    allowedFields.forEach((field) => {
      if (req.body[field] !== undefined) {
        product[field] = req.body[field];
      }
    });

    await product.save();

    res.status(200).json({
      success: true,
      message: "Product updated successfully",
      product,
    });
  } catch (error) {
    console.error("Update product error:", error);

    res.status(500).json({
      success: false,
      message: "Unable to update product",
      error: error.message,
    });
  }
};

/* =========================
   Delete Product
   Admin
========================= */

const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    /*
      Soft delete:
      Product remains in database but disappears
      from the customer-facing store.
    */

    product.isActive = false;

    await product.save();

    res.status(200).json({
      success: true,
      message: "Product removed from store",
    });
  } catch (error) {
    console.error("Delete product error:", error);

    res.status(500).json({
      success: false,
      message: "Unable to delete product",
    });
  }
};

module.exports = {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};