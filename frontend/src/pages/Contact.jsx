const Contact = () => {
  return (
    <main className="mx-auto min-h-screen max-w-4xl px-5 py-20 md:px-8">
      <p className="font-modern text-xs uppercase tracking-[0.25em] text-neutral-500">
        Get in touch
      </p>

      <h1 className="mt-4 font-display text-6xl">
        Contact Bagie.
      </h1>

      <a
        href="mailto:hello@bagie.com"
        className="mt-8 inline-block text-sm underline underline-offset-4"
      >
        hello@bagie.com
      </a>
    </main>
  );
};

export default Contact;