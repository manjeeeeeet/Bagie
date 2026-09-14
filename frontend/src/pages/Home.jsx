const Home = () => {
  return (
    <main className="min-h-screen">
      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-32">
        <p className="font-modern text-xs uppercase tracking-[0.3em] text-neutral-500">
          Everyday essentials
        </p>

        <h1 className="mt-5 max-w-4xl font-display text-6xl leading-[0.9] tracking-tight md:text-8xl">
          Carry your everyday beautifully.
        </h1>

        <p className="mt-7 max-w-lg text-sm leading-7 text-neutral-500">
          Minimal bags made for work, weekends and everything
          in between.
        </p>

        <a
          href="/shop"
          className="mt-9 inline-flex rounded-full bg-neutral-950 px-7 py-3.5 font-modern text-xs uppercase tracking-widest text-white transition hover:scale-105"
        >
          Shop now
        </a>
      </section>
    </main>
  );
};

export default Home;