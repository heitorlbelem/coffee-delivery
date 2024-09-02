import styled from "styled-components";

export const ProductsContainer = styled.section`
  margin-top: 10rem;
  padding-top: 3.2rem;

  h2 {
    font: ${(props) => props.theme["title-lg"]};
    color: ${(props) => props.theme["base-subtitle"]};
    margin-bottom: 5.4rem;
  }
`;

export const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 4rem 3.2rem;
`;
