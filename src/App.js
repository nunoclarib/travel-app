import React, { useState } from "react";
import styled from "styled-components";
import "./App.css";
import logo from "./img/logo.png";
import AddDrink from "./components/AddDrink";
import DrinkCards from "./components/DrinkCards";

function App() {
  const [clicked, setClicked] = useState(false);
  const [category, setCategory] = useState(null);
  const [loader, setLoader] = useState(false);

  return (
    <Div className="App">
      <Img loading="lazy" src={logo} />
      {!category && !loader && <div>
      <Div2>
        <p>John Doe</p>
      </Div2>
      <Div3>
        <p>0.2g</p>
      </Div3>
      </div>}
      
      {!clicked ? <AddDrink setClicked={setClicked} /> : <DrinkCards category={category} setCategory={setCategory} loader={loader} setLoader={setLoader}/>}
    </Div>
  );
}

const Div = styled.div`
  background-color: #181818;
  display: flex;
  max-width: 480px;
  width: 100%;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  height: 100vh;
`;

const Img = styled.img`
  aspect-ratio: 1.72;
  object-fit: auto;
  object-position: center;
  width: 100%;
  align-self: start;
`;

const Div2 = styled.div`
  color: #fff;
  margin-top: 40px;
  margin-bottom: 40px;
  font: 200 30px/53% Inter, sans-serif;
`;

const Div3 = styled.div`
  justify-content: center;
  width: 257px;
  max-width: 100%;
  color: #fff;
  padding: 6px 8px;
  font: 600 60px/27% Inter, sans-serif;
  align-content: center;
`;

export default App;
