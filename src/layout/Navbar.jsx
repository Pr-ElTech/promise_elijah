import Logo from "../components/Logo";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 z-50 w-full">
      <div className="mx-auto mt-5 flex max-w-7xl items-center justify-between rounded-2xl border border-slate-800 bg-[#050816]/70 px-8 py-4 shadow-2xl backdrop-blur-xl">
        <Logo />

        <nav className="hidden items-center gap-10 text-sm font-medium text-slate-300 md:flex">
          <a
            href="#about"
            className="transition-colors duration-300 hover:text-blue-400"
          >
            About
          </a>

          <a
            href="#projects"
            className="transition-colors duration-300 hover:text-blue-400"
          >
            Projects
          </a>

          <a
            href="#skills"
            className="transition-colors duration-300 hover:text-blue-400"
          >
            Skills
          </a>

          <a
            href="#contact"
            className="transition-colors duration-300 hover:text-blue-400"
          >
            Contact
          </a>
          <a
            href="#contact"
            className="rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-blue-500 hover:shadow-[0_0_20px_rgba(37,99,235,0.35)]"
          >
            Hire Me
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
