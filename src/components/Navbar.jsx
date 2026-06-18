import clsx from "clsx";
import { useEffect, useState } from "react";

const navItems = [
  { label: "Start", href: "#home" },
  { label: "Work", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "About", href: "#about" },
];

const mobileNavItems = [
  ...navItems,
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
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-2 md:px-5">
      <nav className="portfolio-masthead relative mx-auto grid h-16 max-w-[86rem] grid-cols-[1fr_auto_1fr] items-center px-5 md:px-8">
        <div className="hidden items-center gap-12 lg:flex">
          {navItems.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="portfolio-masthead-link"
            >
              {label}
            </a>
          ))}
        </div>

        <span aria-hidden="true" />

        <div className="ml-auto flex items-center justify-end gap-3">
          <a href="#contact" className="portfolio-masthead-link hidden lg:inline-flex">
            Contact
          </a>
          <button
            type="button"
            onClick={() => setIsOpen((value) => !value)}
            className="portfolio-menu-button flex size-10 flex-col items-center justify-center gap-1.5 lg:hidden"
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
          "portfolio-mobile-menu mx-auto max-w-[86rem] px-6 transition-all lg:hidden",
          isOpen
            ? "max-h-96 py-4 opacity-100"
            : "max-h-0 overflow-hidden py-0 opacity-0",
        )}
      >
        {mobileNavItems.map(({ label, href }) => (
          <a
            key={label}
            href={href}
            onClick={() => setIsOpen(false)}
            className="portfolio-mobile-link block py-4"
          >
            {label}
          </a>
        ))}
      </div>
    </header>
  );
};

export default Navbar;
