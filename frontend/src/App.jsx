function App() {
  return (
    <div className="min-h-screen bg-[#f7f6f2] text-neutral-900">
      <main className="flex min-h-screen items-center justify-center px-6">
        <div className="text-center">
          <p className="mb-3 font-modern text-xs uppercase tracking-[0.3em] text-neutral-500">
            Everyday essentials
          </p>

          <h1 className="font-display text-6xl font-medium tracking-tight md:text-8xl">
            Bagie
          </h1>

          <p className="mx-auto mt-5 max-w-md text-sm leading-6 text-neutral-500">
            Minimal bags made for everyday moments.
          </p>

          <button className="mt-8 rounded-full bg-neutral-900 px-7 py-3 font-modern text-xs uppercase tracking-wider text-white transition-transform duration-300 hover:scale-105">
            Shop now
          </button>
        </div>
      </main>
    </div>
  );
}

export default App;