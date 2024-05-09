import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

import Liqueurs from "../img/1.png";
import Cocktails from "../img/2.png";
import Wine from "../img/3.png";
import Beer from "../img/4.png";
import Favorites from "../img/5.jpg";
import Others from "../img/6.png";

import "../styles/drinkCards.css";

const DrinkCards = ({ category, setCategory, loader, setLoader }) => {
  const [drinks, setDrinks] = useState([]);

  console.log(drinks);
  console.log(loader);

  useEffect(() => {
    if (category) {
      axios
        .get(`http://192.168.90.239:5000/drinks/category?category=${category}`)
        .then((response) => {
          setDrinks(response.data);
          setLoader(true);
        })
        .catch((error) => {
          console.error("Error fetching drinks:", error);
        });
    }
  }, [category]);

  return (
    <>
      {drinks.length > 0 && loader ? (
        <DrinkList drinks={drinks} category={category} setCategory={setCategory} setDrinks={setDrinks}/>
      ) : (
        <Container>
          <Row>
            <Button onClick={() => setCategory("Beer")}>
              <img src={Beer} alt="Button 1" />
            </Button>
            <Button onClick={() => setCategory("Wine")}>
              <img src={Wine} alt="Button 2" />
            </Button>
            <Button onClick={() => setCategory("Liqueurs")}>
              <img src={Liqueurs} alt="Button 3" />
            </Button>
          </Row>
          <Row>
            <Button onClick={() => setCategory("Cocktail")}>
              <img src={Cocktails} alt="Button 4" />
            </Button>
            <Button>
              <img src={Favorites} alt="Button 5" />
            </Button>
            <Button onClick={() => setCategory("Others")}>
              <img src={Others} alt="Button 6" />
            </Button>
          </Row>
        </Container>
      )}
    </>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3rem;
`;

const Row = styled.div`
  display: flex;
`;

const Button = styled.button`
  margin: 1rem;
  padding: 10px;
  border: 1px solid #fff;
  border-radius: 10px;
  background-color: #ccc;
  cursor: pointer;

  img {
    width: 70px;
    height: 70px;
  }
`;

const DrinkList = ({ drinks, category, setCategory, setDrinks }) => {

    const handleBack = () => {
        setCategory(null);
        setDrinks([]);
      };

  return (
    <div className="container-list">
      <h2 style={{ color: "white" }}>{category && category}</h2>
      {drinks.map((drink) => (
        <div className="produtos-container" key={drink.id}>
          <button className="elem">{drink.drink_name}</button>
        </div>
      ))}
      <div className="back">
        <button className="backButton" onClick={handleBack}>Back</button>
      </div>
    </div>
  );
};

export default DrinkCards;
