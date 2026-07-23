import Navbar from "./layout/Navbar";
import HeroSection from "./sections/HeroSection";
import StatsSection from "./sections/StatsSection";
import SelectedWork from "./sections/SelectedWork";
import AboutSection from "./sections/AboutSection";

const App = () => {
  return (
    <main className="bg-[#050816] text-white overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <StatsSection />
      <SelectedWork />
      <AboutSection />
    </main>
  );
};

export default App;



// import Navbar from "./layout/Navbar";
// import HeroSection from "./sections/HeroSection";
// import StatsSection from "./sections/StatsSection";
// import ProjectsSection from "./sections/ProjectsSection";
// import TrustedProducts from "./sections/TrustedProducts";
// import SelectedWork from "./sections/SelectedWork";

// const App = () => {
//   return (
//     <>
// <Navbar />
// <HeroSection />
// <StatsSection />
// {/* <TrustedProducts /> */}
// {/* <ProjectsSection /> */}
// <SelectedWork />
//     </>
//   );
// };

// export default App;