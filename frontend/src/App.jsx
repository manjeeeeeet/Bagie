import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import ProtectedRoute from "./components/common/ProtectedRoute";
import AdminRoute from "./components/common/AdminRoute";

import Home from "./pages/Home";
import Shop from "./pages/Shop";
import ProductDetails from "./pages/ProductDetails";
import Wishlist from "./pages/Wishlist";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Account from "./pages/Account";
import Orders from "./pages/Orders";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

import AdminDashboard from "./admin/AdminDashboard";
import AdminProducts from "./admin/AdminProducts";
import AddProduct from "./admin/AddProduct";
import EditProduct from "./admin/EditProduct";
import AdminOrders from "./admin/AdminOrders";
import AdminUsers from "./admin/AdminUsers";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#f7f6f2] text-neutral-900">

        <Navbar />

        <Routes>

          {/* =====================
              Public Routes
          ===================== */}

          <Route path="/" element={<Home />} />

          <Route path="/shop" element={<Shop />} />

          <Route
            path="/product/:id"
            element={<ProductDetails />}
          />

          <Route
            path="/wishlist"
            element={<Wishlist />}
          />

          <Route path="/cart" element={<Cart />} />

          <Route
            path="/login"
            element={<Login />}
          />

          <Route
            path="/register"
            element={<Register />}
          />

          <Route
            path="/about"
            element={<About />}
          />

          <Route
            path="/contact"
            element={<Contact />}
          />

          {/* =====================
              Protected Routes
          ===================== */}

          <Route element={<ProtectedRoute />}>

            <Route
              path="/checkout"
              element={<Checkout />}
            />

            <Route
              path="/account"
              element={<Account />}
            />

            <Route
              path="/orders"
              element={<Orders />}
            />

          </Route>

          {/* =====================
              Admin Routes
          ===================== */}

          <Route element={<AdminRoute />}>

            <Route
              path="/admin"
              element={<AdminDashboard />}
            />

            <Route
              path="/admin/products"
              element={<AdminProducts />}
            />

            <Route
              path="/admin/products/add"
              element={<AddProduct />}
            />

            <Route
              path="/admin/products/:id/edit"
              element={<EditProduct />}
            />

            <Route
              path="/admin/orders"
              element={<AdminOrders />}
            />

            <Route
              path="/admin/users"
              element={<AdminUsers />}
            />

          </Route>

          {/* =====================
              404
          ===================== */}

          <Route
            path="*"
            element={<NotFound />}
          />

        </Routes>

        <Footer />

        <ToastContainer
          position="bottom-right"
          autoClose={3000}
          hideProgressBar
          newestOnTop
          closeOnClick
          pauseOnHover
        />

      </div>
    </BrowserRouter>
  );
}

export default App;