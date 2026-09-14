import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { useAuth } from "../context/AuthContext";

const Register = () => {
  const navigate = useNavigate();

  const { register } = useAuth();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      setLoading(true);

      await register(
        form.name,
        form.email,
        form.password
      );

      toast.success("Account created!");

      navigate("/");
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Unable to create account"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex min-h-[calc(100vh-72px)] items-center justify-center px-5 py-16">
      <div className="w-full max-w-md">

        <div className="text-center">
          <p className="font-modern text-xs uppercase tracking-[0.25em] text-neutral-500">
            Join Bagie
          </p>

          <h1 className="mt-3 font-display text-5xl">
            Create account
          </h1>
        </div>

        <form
          onSubmit={handleSubmit}
          className="mt-10 space-y-5"
        >
          <div>
            <label className="mb-2 block text-sm">
              Name
            </label>

            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your name"
              required
              className="w-full rounded-xl border border-neutral-300 bg-transparent px-4 py-3.5 outline-none transition focus:border-neutral-900"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm">
              Email
            </label>

            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="you@example.com"
              required
              className="w-full rounded-xl border border-neutral-300 bg-transparent px-4 py-3.5 outline-none transition focus:border-neutral-900"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm">
              Password
            </label>

            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Minimum 6 characters"
              minLength={6}
              required
              className="w-full rounded-xl border border-neutral-300 bg-transparent px-4 py-3.5 outline-none transition focus:border-neutral-900"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-full bg-neutral-950 py-3.5 font-modern text-xs uppercase tracking-widest text-white transition hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-50"
          >
            {loading ? "Creating..." : "Create account"}
          </button>
        </form>

        <p className="mt-7 text-center text-sm text-neutral-500">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-neutral-950 underline underline-offset-4"
          >
            Login
          </Link>
        </p>
      </div>
    </main>
  );
};

export default Register;