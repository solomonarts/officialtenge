import { useState } from "react";
import "./App.css";
import AboutSection from "./components/AboutSection";
import AllocationSection from "./components/AllocationSection";
import BuySection from "./components/BuySection";
import ContactAddress from "./components/ContactAddress";
import FAQSection from "./components/FAQSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import MemeCommunitySection from "./components/MemeCommunitySection";
import Navbar from "./components/NavBar";
import PrivacyPolicyDock from "./components/PrivacyPolicyDock";
import TermsDock from "./components/TermsDock";

function App() {
  const [openDock1, setOpenDoc1] = useState(false);
  const [openDock2, setOpenDoc2] = useState(false);

  const openDock = (dock) => {
    switch (dock) {
      case "privacy":
        setOpenDoc1(true);
        setOpenDoc2(false);
        break;
      case "terms":
        setOpenDoc1(false);
        setOpenDoc2(true);
        break;

      default:
        break;
    }
  };
  return (
    <div className="App">
      <Navbar />
      <HeroSection openDock={(dock) => openDock(dock)} />
      <AboutSection />
      <ContactAddress />
      <AllocationSection openDock={(dock) => openDock(dock)} />
      <BuySection openDock={(dock) => openDock(dock)} />
      <MemeCommunitySection />
      <FAQSection />
      <PrivacyPolicyDock openDock={openDock1} setOpenDock={setOpenDoc1} />
      <TermsDock openDock={openDock2} setOpenDock={setOpenDoc2} />
      <Footer />
    </div>
  );
}

export default App;
