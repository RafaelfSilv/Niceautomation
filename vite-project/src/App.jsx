import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Hero from "./ilustrator/Hero";
import WhyChoose from "./meiosite/WhyChoose";
import HowItWorks from "./questions/HowItWorks";
import Footer from "./Rodape/Footer";

import Cadastro from "./Cadastro/cadastro";

function Home() {
  return (
    <>
      <Header />
      <Hero />
      <WhyChoose />
      <HowItWorks />
      <Footer />
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
