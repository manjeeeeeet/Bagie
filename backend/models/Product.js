const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Product name is required"],
      trim: true,
      maxlength: 120,
    },

    brand: {
      type: String,
      required: true,
      trim: true,
      default: "Bagie",
    },

    category: {
      type: String,
      required: [true, "Category is required"],
      enum: [
        "Handbags",
        "Tote Bags",
        "Sling Bags",
        "Backpacks",
        "Wallets",
      ],
    },

    price: {
      type: Number,
      required: [true, "Price is required"],
      min: 0,
    },

    discountPrice: {
      type: Number,
      min: 0,
      default: null,
    },

    description: {
      type: String,
      required: [true, "Description is required"],
      maxlength: 2000,
    },

    images: {
      type: [String],
      required: true,
      validate: {
        validator: (images) => images.length > 0,
        message: "At least one product image is required",
      },
    },

    colors: {
      type: [String],
      default: [],
    },

    variants: {
      type: [String],
      default: [],
    },

    stock: {
      type: Number,
      required: true,
      min: 0,
      default: 0,
    },

    rating: {
      type: Number,
      min: 0,
      max: 5,
      default: 0,
    },

    numReviews: {
      type: Number,
      min: 0,
      default: 0,
    },

    isFeatured: {
      type: Boolean,
      default: false,
    },

    isTrending: {
      type: Boolean,
      default: false,
    },

    isBestSeller: {
      type: Boolean,
      default: false,
    },

    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Product", productSchema);