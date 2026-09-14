import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import {
  FiHeart,
  FiMenu,
  FiSearch,
  FiShoppingBag,
  FiUser,
  FiX,
} from "react-icons/fi";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  const navClass = ({ isActive }) =>
    `transition-colors ${
      isActive
        ? "text-neutral-950"
        : "text-neutral-500 hover:text-neutral-950"
    }`;

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-neutral-200/70 bg-[#f7f6f2]/95 backdrop-blur-md">
        <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 md:px-8">

          {/* Logo */}

          <Link
            to="/"
            className="font-display text-2xl font-semibold tracking-tight"
          >
            bagie<span className="text-neutral-400">.</span>
          </Link>

          {/* Desktop Navigation */}

          <nav className="hidden items-center gap-8 md:flex">
            <NavLink to="/" className={navClass}>
              Home
            </NavLink>

            <NavLink to="/shop" className={navClass}>
              Shop
            </NavLink>

            <NavLink to="/about" className={navClass}>
              About
            </NavLink>

            <NavLink to="/contact" className={navClass}>
              Contact
            </NavLink>
          </nav>

          {/* Actions */}

          <div className="flex items-center gap-2">

            <Link
              to="/shop"
              className="hidden rounded-full p-2.5 transition hover:bg-neutral-200 md:block"
              aria-label="Search"
            >
              <FiSearch size={18} />
            </Link>

            <Link
              to="/wishlist"
              className="rounded-full p-2.5 transition hover:bg-neutral-200"
              aria-label="Wishlist"
            >
              <FiHeart size={18} />
            </Link>

            <Link
              to="/cart"
              className="rounded-full p-2.5 transition hover:bg-neutral-200"
              aria-label="Cart"
            >
              <FiShoppingBag size={18} />
            </Link>

            <Link
              to="/account"
              className="hidden rounded-full p-2.5 transition hover:bg-neutral-200 md:block"
              aria-label="Account"
            >
              <FiUser size={18} />
            </Link>

            <button
              onClick={() => setMobileMenu(true)}
              className="rounded-full p-2.5 transition hover:bg-neutral-200 md:hidden"
              aria-label="Open menu"
            >
              <FiMenu size={20} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}

      {mobileMenu && (
        <div className="fixed inset-0 z-[100] bg-[#f7f6f2] md:hidden">

          <div className="flex items-center justify-between border-b border-neutral-200 px-5 py-5">

            <Link
              to="/"
              onClick={() => setMobileMenu(false)}
              className="font-display text-2xl font-semibold"
            >
              bagie<span className="text-neutral-400">.</span>
            </Link>

            <button
              onClick={() => setMobileMenu(false)}
              className="rounded-full p-2 hover:bg-neutral-200"
            >
              <FiX size={22} />
            </button>
          </div>

          <nav className="flex flex-col px-6 pt-10">

            {[
              ["Home", "/"],
              ["Shop", "/shop"],
              ["Wishlist", "/wishlist"],
              ["Cart", "/cart"],
              ["About", "/about"],
              ["Contact", "/contact"],
              ["Account", "/account"],
            ].map(([label, path]) => (
              <Link
                key={path}
                to={path}
                onClick={() => setMobileMenu(false)}
                className="border-b border-neutral-200 py-5 font-modern text-lg"
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </>
  );
};

export default Navbar;