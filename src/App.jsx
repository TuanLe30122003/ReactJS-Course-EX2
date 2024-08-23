import styled from "styled-components";
import Header from "./page/Header";
import CoreServices from "./page/CoreServices";
import About from "./page/About";
import Expert from "./page/Expert";

function App() {
  return (
    <>
      <Cover>
        <Header />
        <CoreServices />
        <About />
        <Expert />
      </Cover>
    </>
  );
}

const Cover = styled.div`
  position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`


export default App;
