import React, { useState } from "react";
import styled from "styled-components";
import "./App.css";

import Navbar from "./components/Navbar";

import CityEntry from "./components/CityEntry";

function App() {
  const [addCity, setAddCity] = useState(false);
  const [budget, setBudget] = useState('');

  return (
    <div className="App">

      <Navbar />
      <div>
      <div className="budget-box">{budget ? budget : 0} €</div>
      </div>

      {/* Component React */}

      {addCity && <CityEntry budget={budget} setBudget={setBudget}/>}

      {!addCity && <button 
      onClick={() => setAddCity(!addCity)}
      >Plus</button>}
      

    </div>
  );
}

const Div = styled.div`
  background-color: #fff;
  display: flex;
  max-width: 480px;
  width: 100%;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  height: 100vh;
`;

export default App;
