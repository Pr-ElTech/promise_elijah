// import Navbar from "./layout/Navbar";
// import HeroSection from "./sections/HeroSection";

// function App() {
//   return (
//     <main className="bg-[#070B14] text-white overflow-hidden">
//       <Navbar />
//       <HeroSection />
//     </main>
//   );
// }

// export default App;
import Navbar from "./layout/Navbar";
import HeroSection from "./sections/HeroSection";
import StatsSection from "./sections/StatsSection";
import ProjectsSection from "./sections/ProjectsSection";
import TrustedProducts from "./sections/TrustedProducts";

const App = () => {
  return (
    <>
<Navbar />
<HeroSection />
<StatsSection />
<TrustedProducts />
<ProjectsSection />
    </>
  );
};

export default App;