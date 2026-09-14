import { FiInstagram, FiMail, FiGithub } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="border-t border-neutral-200 bg-[#f7f6f2]">
      <div className="mx-auto max-w-7xl px-5 py-14 md:px-8">

        <div className="grid gap-10 md:grid-cols-4">

          <div className="md:col-span-2">
            <h2 className="font-display text-4xl">
              bagie<span className="text-neutral-400">.</span>
            </h2>

            <p className="mt-4 max-w-sm text-sm leading-6 text-neutral-500">
              Everyday bags designed with simplicity,
              function and a little bit of personality.
            </p>
          </div>

          <div>
            <p className="font-modern text-xs uppercase tracking-widest">
              Explore
            </p>

            <div className="mt-4 flex flex-col gap-3 text-sm text-neutral-500">
              <a href="/shop">Shop</a>
              <a href="/about">About</a>
              <a href="/contact">Contact</a>
              <a href="/faq">FAQ</a>
            </div>
          </div>

          <div>
            <p className="font-modern text-xs uppercase tracking-widest">
              Connect
            </p>

            <div className="mt-4 flex gap-3">
              <a
                href="#"
                className="rounded-full border border-neutral-300 p-3 transition hover:bg-neutral-900 hover:text-white"
                aria-label="Instagram"
              >
                <FiInstagram size={17} />
              </a>

              <a
                href="mailto:hello@bagie.com"
                className="rounded-full border border-neutral-300 p-3 transition hover:bg-neutral-900 hover:text-white"
                aria-label="Email"
              >
                <FiMail size={17} />
              </a>

              <a
                href="#"
                className="rounded-full border border-neutral-300 p-3 transition hover:bg-neutral-900 hover:text-white"
                aria-label="GitHub"
              >
                <FiGithub size={17} />
              </a>
            </div>
          </div>

        </div>

        <div className="mt-14 flex flex-col justify-between gap-4 border-t border-neutral-200 pt-6 text-xs text-neutral-400 md:flex-row">
          <p>© {new Date().getFullYear()} Bagie. All rights reserved.</p>

          <p className="font-modern tracking-wider">
            made for everyday.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;