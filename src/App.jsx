import styled from "styled-components";
import Home1 from "./page/Home1/Home1";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home2 from "./page/Home2/Home2";
import AboutPage from "./page/About/AboutPage";
import Gallery from "./page/Gallery/Gallery";
import Service from "./page/Service/Service";
import Team from "./page/Team/Team";
import Blog from "./page/Blog/Blog";
import ContactPage from "./page/Contact/ContactPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home1 />} />
        <Route path="/home2" element={<Home2 />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/service" element={<Service />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/team" element={<Team />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
