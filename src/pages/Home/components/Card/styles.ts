import styled from "styled-components";

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: ${(props) => props.theme["base-card"]};

  border-top-left-radius: 6px;
  border-top-right-radius: 36px;
  border-bottom-left-radius: 36px;
  border-bottom-right-radius: 6px;
  padding: 0 2rem 2rem;
`;

export const CardImage = styled.figure`
  margin-top: -2rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    margin-bottom: 1.2rem;
  }

  figcaption {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.4rem;

    span {
      border-radius: 100px;
      padding: 0.4rem 0.8rem;

      font: ${(props) => props.theme.tag};

      text-align: center;
      text-transform: uppercase;
      background-color: ${(props) => props.theme["yellow-light"]};
      color: ${(props) => props.theme["yellow-dark"]};
    }
  }
`;

export const CardDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.8rem;

  margin-block: 1.6rem 3.3rem;

  h3 {
    font: ${(props) => props.theme["title-sm"]};
    color: ${(props) => props.theme["base-subtitle"]};
  }

  p {
    text-align: center;
    font: ${(props) => props.theme["text-md"]};
    color: ${(props) => props.theme["base-label"]};
  }
`;

export const CardPricing = styled.div`
  display: flex;
  align-items: center;
  gap: 2.3rem;

  span {
    font: ${(props) => props.theme["text-md"]};
    color: ${(props) => props.theme["base-text"]};

    strong {
      font: ${(props) => props.theme["title-md"]};
    }
  }

  div {
    display: flex;
    align-items: center;
    gap: 0.8rem;
  }
`;

export const ShoppingCartButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;

  padding: 0.8rem;
  width: 3.8rem;
  height: 3.8rem;
  border: 0;
  outline: 0;

  background: ${(props) => props.theme["purple-dark"]};
  color: ${(props) => props.theme["base-card"]};
  border-radius: 6px;
`;
