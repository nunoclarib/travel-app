import * as React from "react";
import styled from "styled-components";

const images = [
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/08fa1ec5695586902b0db38f412e1ef7c61387ff64a7560e9b84d2d929e7f93b?apiKey=16c16e3a04b14066bc4e94c492815cc8&", alt: "Image 1" },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/e0bc922a972a8b53fcd617aa459aa4443e462a2a681c7e7a1890186bc52e3c07?apiKey=16c16e3a04b14066bc4e94c492815cc8&", alt: "Image 2" },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/3bb70d57e84972d46a8480dcbb2f09b7d45b5da86ff13d309c19efae202edf81?apiKey=16c16e3a04b14066bc4e94c492815cc8&", alt: "Image 3" },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/9c27a33deabe6ad527372ef8bd6676130bcd959750557df9f2ecf3d67b5d7260?apiKey=16c16e3a04b14066bc4e94c492815cc8&", alt: "Image 4" },
];

function Categories() {
  return (
    <Container>
      {images.map((image, index) => (
        <ImageWrapper key={index}>
          <Image src={image.src} alt={image.alt} />
          <input type="checkbox" />
          <RoundedBox>
            <p>wdwd</p>
          </RoundedBox>
        </ImageWrapper>
      ))}
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

const RoundedBox = styled.div`
  width: 86px;
  border-radius: 20px;
  border: 2px solid rgba(1, 71, 72, 1);
  background-color: #fff;
`;

export default Categories;