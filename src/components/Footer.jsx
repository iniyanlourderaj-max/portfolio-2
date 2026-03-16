import { FaDiscord, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
const socialLinks = [
  { href: "https://discord.com/users/1442087375609139326", icon: <FaDiscord /> },
  { href: "https://www.linkedin.com/in/iniyanlourderaj/", icon: <FaLinkedin /> },
  { href: "mailto:iniyanlourderaj@gmail.com", icon: <SiGmail /> },
];

const Footer = () => {
  return (
    <footer className="w-screen bg-[#5542ff] py-4 text-black">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
        <p className="text-center text-sm font-light md:text-left">
      Made by Iniyan Lourderaj.
        </p>

        <div className="flex justify-center gap-4  md:justify-start">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-black transition-colors duration-500 ease-in-out hover:text-white"
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;