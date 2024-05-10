import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

function Categories({
  others,
  setOthers,
  rentPerDay,
  setRentPerDay,
  restaurants,
  setRestaurants,
  transportation,
  setTransportation,
  budget
}) {
  const [hasRentPerDay, setHasRentPerDay] = useState(false);
  const [hasRestaurants, setHasRestaurants] = useState(false);
  const [hasTransportation, setHasTransportation] = useState(false);
  const [hasOthers, setHasOthers] = useState(false);

  const handleRentChange = (event) => {
    setHasRentPerDay(event.target.checked);
  };
  const handleRestChange = (event) => {
    setHasRestaurants(event.target.checked);
  };
  const handleTransChange = (event) => {
    setHasTransportation(event.target.checked);
  };
  const handleOthersChange = (event) => {
    setHasOthers(event.target.checked);
  };

  const handleRestaurantsOnChange = (event) => {
    setRestaurants(event.target.value);
  };
  const handleRentOnChange = (event) => {
    setRentPerDay(event.target.value);
  };
  const handleTransOnChange = (event) => {
    setTransportation(event.target.value);
  };
  const handleOthersOnChange = (event) => {
    setOthers(event.target.value);
  };

  let days = 9;

  const url = 'http://192.168.90.55:5000'
  const email = 'stuff@com'

  useEffect(() => {
    axios
      .get(`${url}/simulate?days=${days}&email=${email}`)
      .then((response) => {
        console.log(response.data);

        setRestaurants(Math.floor(((response.data[0] * budget)/days)/100) );
        setRentPerDay(Math.floor(((response.data[1] * budget)/days)/100));
        setTransportation(Math.floor(((response.data[2] * budget)/days)/100));
        setOthers(Math.floor(((response.data[3] * budget)/days)/100));

      })
      .catch((error) => {
        console.error("Error fetching drinks:", error);
      });
  }, [days, budget]);

  return (
    <Container>
      <ImageWrapper>
        <Image src="https://cdn.builder.io/api/v1/image/assets/TEMP/08fa1ec5695586902b0db38f412e1ef7c61387ff64a7560e9b84d2d929e7f93b?apiKey=16c16e3a04b14066bc4e94c492815cc8&" />
        <input type="checkbox" onChange={handleRestChange} />
        {hasRestaurants && (
          <RoundedBox
            value={restaurants && restaurants}
            onChange={handleRestaurantsOnChange}
          />
        )}
      </ImageWrapper>

      <ImageWrapper>
        <Image src="https://cdn.builder.io/api/v1/image/assets/TEMP/e0bc922a972a8b53fcd617aa459aa4443e462a2a681c7e7a1890186bc52e3c07?apiKey=16c16e3a04b14066bc4e94c492815cc8&" />
        <input type="checkbox" onChange={handleRentChange} />

        {hasRentPerDay && (
          <RoundedBox
            value={rentPerDay && rentPerDay}
            onChange={handleRentOnChange}
          />
        )}
      </ImageWrapper>

      <ImageWrapper>
        <Image src="https://cdn.builder.io/api/v1/image/assets/TEMP/3bb70d57e84972d46a8480dcbb2f09b7d45b5da86ff13d309c19efae202edf81?apiKey=16c16e3a04b14066bc4e94c492815cc8&" />
        <input type="checkbox" onChange={handleTransChange} />

        {hasTransportation && (
          <RoundedBox
            value={transportation && transportation}
            onChange={handleTransOnChange}
          />
        )}
      </ImageWrapper>

      <ImageWrapper>
        <Image src="https://cdn.builder.io/api/v1/image/assets/TEMP/9c27a33deabe6ad527372ef8bd6676130bcd959750557df9f2ecf3d67b5d7260?apiKey=16c16e3a04b14066bc4e94c492815cc8&" />
        <input type="checkbox" onChange={handleOthersChange} />

        {hasOthers && (
          <RoundedBox
            value={others && others}
            onChange={handleOthersOnChange}
          />
        )}
      </ImageWrapper>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 179px;
  gap: 16px;
`;

const ImageWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
`;

const Image = styled.img`
  width: 40px;
  aspect-ratio: 1;
  object-fit: cover;
`;

const RoundedBox = styled.input`
  width: 86px;
  height: 34px;
  border-radius: 20px;
  border: 2px solid rgba(1, 71, 72, 1);
  background-color: #fff;
`;

export default Categories;
