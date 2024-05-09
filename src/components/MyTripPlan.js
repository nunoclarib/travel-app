import * as React from "react";
import styled from "styled-components";

const budgetAllocationData = [
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/08fa1ec5695586902b0db38f412e1ef7c61387ff64a7560e9b84d2d929e7f93b?apiKey=16c7c9da614b490c942cd9907250fc80&",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/e0bc922a972a8b53fcd617aa459aa4443e462a2a681c7e7a1890186bc52e3c07?apiKey=16c7c9da614b490c942cd9907250fc80&",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/3bb70d57e84972d46a8480dcbb2f09b7d45b5da86ff13d309c19efae202edf81?apiKey=16c7c9da614b490c942cd9907250fc80&",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/9c27a33deabe6ad527372ef8bd6676130bcd959750557df9f2ecf3d67b5d7260?apiKey=16c7c9da614b490c942cd9907250fc80&",
  },
];

function myTripPlan() {
  return (
    <Container>
      <Header>
        <Logo loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/25d418d11da48a9279a0a4942ac7a592463e18135f47a5c72d473582764239bd?apiKey=16c7c9da614b490c942cd9907250fc80&" alt="Company logo" />
        <HeroImage loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/8bd2c755de1030366be3b19ddc095189f20ee7888f3f151664b7e0f520262470?apiKey=16c7c9da614b490c942cd9907250fc80&" alt="Hero image" />
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/306fb4a997bb467eadb2f85f39228c8637d887e63760e37414e0db958ada66d2?apiKey=16c7c9da614b490c942cd9907250fc80&" alt="Decorative image" />
      </Header>
      <BudgetAmount>10 000€</BudgetAmount>
      <BudgetAllocationForm>
        <LocationInputs>
          <LocationInput>
            <Label>Country</Label>
            <Input placeholder="e.g. Portugal" />
          </LocationInput>
          <LocationInput>
            <Label>City</Label>
            <Input placeholder="e.g. Lisbon" />
          </LocationInput>
        </LocationInputs>
        <Label>Budget Allocation</Label>
        <Input placeholder="0000 €" />
        <Label>Date range</Label>
        <Input placeholder="YYYY-MM-DD to YYYY-MM-DD" />
        <BudgetAllocationOptions>
          {budgetAllocationData.map((item, index) => (
            <BudgetAllocationOption key={index}>
              <Icon loading="lazy" src={item.icon} alt="Budget allocation icon" />
              <Checkbox />
            </BudgetAllocationOption>
          ))}
        </BudgetAllocationOptions>
      </BudgetAllocationForm>
      <SubmitButton loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/b9a8f2eed7f0dd0ddd911bc8085d042cbc7f84345a19126d95a43599aeeb7e04?apiKey=16c7c9da614b490c942cd9907250fc80&" alt="Submit button" />
    </Container>
  );
}

const Container = styled.div`
  background-color: #fff;
  display: flex;
  max-width: 430px;
  width: 100%;
  flex-direction: column;
  margin: 0 auto;
  padding: 0 22px 17px;
`;

const Header = styled.header`
  z-index: 10;
  display: flex;
  align-items: start;
  gap: 7px;
`;

const Logo = styled.img`
  aspect-ratio: 1;
  object-fit: auto;
  object-position: center;
  width: 56px;
  margin-top: 24px;
`;

const HeroImage = styled.img`
  aspect-ratio: 1.59;
  object-fit: auto;
  object-position: center;
  width: 100%;
  align-self: stretch;
`;

const BudgetAmount = styled.div`
  justify-content: center;
  border-radius: 8px;
  background-color: #eee;
  align-self: center;
  margin-top: -39px;
  color: #000;
  padding: 3px 16px;
  font: 500 48px/150% Inter, sans-serif;
`;

const BudgetAllocationForm = styled.form`
  border-radius: 12px;
  border: 1px solid rgba(1, 71, 72, 1);
  display: flex;
  margin-top: 34px;
  flex-direction: column;
  padding: 23px 6px 47px 17px;
`;

const LocationInputs = styled.div`
  display: flex;
  gap: 11px;
  font-weight: 500;
  line-height: 150%;
`;

const LocationInput = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 1px 0;
`;

const Label = styled.label`
  color: #000;
  font: 16px Inter, sans-serif;
`;

const Input = styled.input`
  border-radius: 8px;
  border: 1px solid rgba(224, 224, 224, 1);
  background-color: #fff;
  margin-top: 8px;
  color: #828282;
  padding: 0 16px;
  font: 20px Inter, sans-serif;

  &::placeholder {
    color: #282;
  }
`;

const BudgetAllocationOptions = styled.div`
  align-self: center;
  display: flex;
  flex-direction: column;
  margin-top: 59px;
  width: 179px;
  max-width: 100%;
  gap: 16px;
`;

const BudgetAllocationOption = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Icon = styled.img`
  aspect-ratio: 1;
  object-fit: auto;
  object-position: center;
  width: 40px;
`;

const Checkbox = styled.div`
  border-radius: 20px;
  border: 2px solid rgba(1, 71, 72, 1);
  background-color: #fff;
  width: 86px;
  height: 44px;
`;

const SubmitButton = styled.img`
  aspect-ratio: 1.01;
  object-fit: auto;
  object-position: center;
  width: 69px;
  align-self: center;
  margin-top: 21px;
`;

export default myTripPlan;
