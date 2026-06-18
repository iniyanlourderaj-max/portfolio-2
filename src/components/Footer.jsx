const links = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/iniyanlourderaj/" },
  { label: "Discord", href: "https://discord.com/users/1442087375609139326" },
  { label: "Email", href: "mailto:iniyanlourderaj@gmail.com" },
];

const Footer = () => {
  return (
    <footer className="border-t-2 border-neutral-800 bg-neutral-950 py-7">
      <div className="section-shell flex flex-col gap-5 font-general text-[11px] font-bold uppercase tracking-[0.12em] text-neutral-400 sm:flex-row sm:items-center sm:justify-between">
        <p>&copy; 2026 Iniyan Lourderaj</p>
        <div className="flex flex-wrap gap-6">
          {links.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="transition-colors hover:text-red-500"
            >
              {label}
            </a>
          ))}
        </div>
        <a href="#home" className="transition-colors hover:text-red-500">
          Back to top &uarr;
        </a>
      </div>
    </footer>
  );
};

export default Footer;
