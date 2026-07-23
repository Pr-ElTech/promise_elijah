import AboutImage from "../components/AboutImage";
import AboutContent from "../components/AboutContent";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="bg-[#050816] py-32"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="mb-20 text-center">

          <p className="uppercase tracking-[8px] text-blue-500 font-semibold">
            ABOUT ME
          </p>

          <h2 className="mt-5 text-5xl font-bold text-white">
            Building Products,
            <span className="text-blue-500">
              {" "}
              Not Just Interfaces.
            </span>
          </h2>

        </div>

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          <AboutImage />

          <AboutContent />

        </div>

      </div>
    </section>
  );
};

export default AboutSection;