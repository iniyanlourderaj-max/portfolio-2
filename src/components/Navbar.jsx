import clsx from "clsx";
import { useEffect, useState } from "react";

const navItems = [
  { label: "Work", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  return (
    <header className="fixed inset-x-3 top-3 z-50 md:inset-x-5">
      <nav className="relative mx-auto flex h-16 max-w-[86rem] items-center justify-between rounded-full border border-white/15 bg-[#0b1020]/90 px-4 shadow-[0_2px_0_rgba(255,255,255,0.18)] backdrop-blur-xl md:px-7">
        <a
          href="#home"
          className="flex min-w-0 items-center gap-3 font-general text-sm font-semibold tracking-[0.04em] text-slate-200 sm:text-base"
        >
          <span className="flex size-9 shrink-0 items-center justify-center overflow-hidden rounded-full bg-white">
            <img
              src="/img/1.png"
              alt=""
              className="size-full scale-[1.65] object-cover object-center"
            />
          </span>
          <span className="truncate">Iniyan Lourderaj</span>
        </a>

        <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-10 lg:flex">
          {navItems.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="font-general text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500 transition-colors hover:text-cyan-300"
            >
              {label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a href="#contact" className="cyan-button hidden !px-6 !py-2.5 lg:inline-flex">
            Hire me
          </a>
          <button
            type="button"
            onClick={() => setIsOpen((value) => !value)}
            className="flex size-10 flex-col items-center justify-center gap-1.5 rounded-full border border-white/15 text-white lg:hidden"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            <span
              className={clsx(
                "h-px w-5 bg-current transition-transform",
                isOpen && "translate-y-[3.5px] rotate-45",
              )}
            />
            <span
              className={clsx(
                "h-px w-5 bg-current transition-transform",
                isOpen && "-translate-y-[3.5px] -rotate-45",
              )}
            />
          </button>
        </div>
      </nav>

      <div
        id="mobile-menu"
        className={clsx(
          "mx-auto mt-2 max-w-[86rem] rounded-3xl border border-white/10 bg-[#0b1020]/95 px-6 shadow-xl backdrop-blur-xl transition-all lg:hidden",
          isOpen
            ? "max-h-80 py-4 opacity-100"
            : "max-h-0 overflow-hidden py-0 opacity-0",
        )}
      >
        {navItems.map(({ label, href }) => (
          <a
            key={label}
            href={href}
            onClick={() => setIsOpen(false)}
            className="block border-b border-white/10 py-4 font-general text-xs uppercase tracking-[0.2em] text-slate-300"
          >
            {label}
          </a>
        ))}
        <a
          href="#contact"
          onClick={() => setIsOpen(false)}
          className="cyan-button mt-4 w-full"
        >
          Hire me
        </a>
      </div>
    </header>
  );
};

export default Navbar;
