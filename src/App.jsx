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

const App = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <StatsSection />
    </>
  );
};

export default App;