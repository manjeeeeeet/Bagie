import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <main className="flex min-h-[70vh] items-center justify-center px-5 text-center">
      <div>
        <p className="font-modern text-xs uppercase tracking-[0.25em] text-neutral-500">
          404
        </p>

        <h1 className="mt-3 font-display text-6xl">
          Page not found.
        </h1>

        <Link
          to="/"
          className="mt-7 inline-block rounded-full bg-neutral-950 px-7 py-3 font-modern text-xs uppercase tracking-widest text-white"
        >
          Back home
        </Link>
      </div>
    </main>
  );
};

export default NotFound;