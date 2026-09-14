const PagePlaceholder = ({ title, description }) => {
  return (
    <section className="flex min-h-[70vh] items-center justify-center px-6">
      <div className="text-center">
        <p className="mb-3 font-modern text-xs uppercase tracking-[0.3em] text-neutral-400">
          Bagie
        </p>

        <h1 className="font-display text-5xl tracking-tight">
          {title}
        </h1>

        {description && (
          <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-neutral-500">
            {description}
          </p>
        )}
      </div>
    </section>
  );
};

export default PagePlaceholder;