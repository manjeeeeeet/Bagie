import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { useAuth } from "../context/AuthContext";

const Login = () => {
  const navigate = useNavigate();

  const { login } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      setLoading(true);

      const data = await login(email, password);

      toast.success("Welcome back!");

      if (data.user?.isAdmin) {
        navigate("/admin");
      } else {
        navigate("/");
      }
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Unable to login"
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
            Welcome back
          </p>

          <h1 className="mt-3 font-display text-5xl">
            Login
          </h1>
        </div>

        <form
          onSubmit={handleSubmit}
          className="mt-10 space-y-5"
        >
          <div>
            <label className="mb-2 block text-sm">
              Email
            </label>

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
              className="w-full rounded-xl border border-neutral-300 bg-transparent px-4 py-3.5 outline-none transition focus:border-neutral-900"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-full bg-neutral-950 py-3.5 font-modern text-xs uppercase tracking-widest text-white transition hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-50"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <p className="mt-7 text-center text-sm text-neutral-500">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="text-neutral-950 underline underline-offset-4"
          >
            Create one
          </Link>
        </p>
      </div>
    </main>
  );
};

export default Login;