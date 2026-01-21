import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Hero from "./ilustrator/Hero";
import WhyChoose from "./meiosite/WhyChoose";
import HowItWorks from "./questions/HowItWorks";
import Footer from "./Rodape/Footer";
import Pricing from "./Preços/Pricing";
import SupportBot from "./Suportbot/supportbot";

import Cadastro from "./Cadastro/cadastro";

function Home() {
  return (
    <>
      <Header />
      <Hero />
      <WhyChoose />
      <HowItWorks />
      <Pricing/>
      <Footer />
      
      <SupportBot/>
    </>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cadastro" element={<Cadastro />} />
    </Routes>
  );
}
