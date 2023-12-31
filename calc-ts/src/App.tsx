import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import ParticlesComponent from "./components/particlesComponent";
import { SelectedPage } from "./shared/types";
import Numbers from "./components/Numbers";
import Temperature from "./components/Temperature";
import Currency from "./components/Currency";

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Numbers
  );
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Numbers);
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div>
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <Numbers setSelectedPage={setSelectedPage} />
      <Currency setSelectedPage={setSelectedPage} />
      <Temperature setSelectedPage={setSelectedPage} />
      <ParticlesComponent />
    </div>
  );
}

export default App;
