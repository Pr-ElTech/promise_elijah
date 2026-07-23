import { Download } from "lucide-react";

const AboutResumeButton = () => {
  return (
    <a
      href="/resume.pdf"
      download
      className="mt-12 inline-flex items-center gap-3 rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white transition-all duration-300 hover:bg-blue-500"
    >
      <Download size={18} />
      Download Resume
    </a>
  );
};

export default AboutResumeButton;