import Logo from "../components/Logo";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-black/30 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        <Logo />

        <nav className="hidden md:flex gap-10 text-slate-300">
          <a href="#about" className="hover:text-blue-400">
            About
          </a>

          <a href="#projects" className="hover:text-blue-400">
            Projects
          </a>

          <a href="#skills" className="hover:text-blue-400">
            Skills
          </a>

          <a href="#contact" className="hover:text-blue-400">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
