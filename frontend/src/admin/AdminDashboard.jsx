const AdminDashboard = () => {
  return (
    <main className="mx-auto min-h-screen max-w-7xl px-5 py-16 md:px-8">
      <p className="font-modern text-xs uppercase tracking-[0.25em] text-neutral-500">
        Bagie Admin
      </p>

      <h1 className="mt-3 font-display text-6xl">
        Dashboard
      </h1>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[
          ["Products", "—"],
          ["Orders", "—"],
          ["Users", "—"],
          ["Revenue", "—"],
        ].map(([label, value]) => (
          <div
            key={label}
            className="rounded-2xl border border-neutral-200 bg-white/40 p-6"
          >
            <p className="font-modern text-xs uppercase tracking-wider text-neutral-500">
              {label}
            </p>

            <p className="mt-4 font-display text-4xl">
              {value}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
};

export default AdminDashboard;