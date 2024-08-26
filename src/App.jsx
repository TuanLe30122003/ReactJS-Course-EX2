import styled from "styled-components";
import Home1 from "./page/Home1/Home1";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home2 from "./page/Home2/Home2";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home1 />} />
        <Route path="/home2" element={<Home2 />} />
      </Routes>
    </BrowserRouter>
  );
}


export default App;
