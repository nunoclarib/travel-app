import React from "react";
import styled from "styled-components";
import plusButton from "../img/plus_button.png";
import emergencyButton from "../img/emergency_button.png";

function AddDrink({ setClicked }) {
  return (
    <>
      <Div4>
        <Img2
          loading="lazy"
          src={plusButton}
          onClick={() => setClicked(true)}
        />
      </Div4>
      <Div5>
        <Img3 loading="lazy" src={emergencyButton} />
      </Div5>
    </>
  );
}
const Div4 = styled.div`
  border-radius: 30px;
  background-color: rgba(255, 255, 255, 0.71);
  display: flex;
  margin-top: 80px;
  width: 257px;
  max-width: 50%;
  align-items: center;
  justify-content: center;
  padding: 26px 60px;
`;
const Div5 = styled.div`
  border-radius: 30px;
  background-color: #d60000;
  opacity: 60%;
  display: flex;
  margin-top: 107px;
  heigh: 10px;
  max-width: 100%;
  align-items: center;
  justify-content: center;
  padding: 26px 60px;
`;

const Img2 = styled.img`
  aspect-ratio: 1;
  object-fit: auto;
  object-position: center;
  width: 88px;
`;

const Img3 = styled.img`
  aspect-ratio: 1;
  object-fit: auto;
  object-position: center;
  width: 88px;
`;

export default AddDrink;
