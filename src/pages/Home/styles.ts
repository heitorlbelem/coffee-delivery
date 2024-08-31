import styled from "styled-components";

export const BannerContainer = styled.section`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  margin-top: 9.4rem;

  & > div {
    max-width: 60rem;
    h1 {
      font: ${(props) => props.theme["title-xl"]};
      color: ${(props) => props.theme["base-title"]};
    }

    p {
      margin-top: 1.6rem;

      font: ${(props) => props.theme["text-lg"]};
      color: ${(props) => props.theme["base-subtitle"]};
    }
  }

  img {
    width: 47.6rem;
  }
`;

export const FeaturesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 2rem;

  margin-top: 6.6rem;
`;

interface FeatureItemProps {
  featureColor: string;
}

export const FeatureItem = styled.span<FeatureItemProps>`
  display: flex;
  align-items: center;
  gap: 1.2rem;

  font: ${(props) => props.theme["text-md"]};
  color: ${(props) => props.theme["base-text"]};

  svg {
    width: 3.2rem;
    height: 3.2rem;
    padding: 0.4rem;
    border-radius: 999px;

    background-color: ${(props) => props.featureColor};
    color: ${(props) => props.theme.white};
  }
`;

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

export const CoffeeCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: ${(props) => props.theme["base-card"]};

  border-top-left-radius: 6px;
  border-top-right-radius: 36px;
  border-bottom-left-radius: 36px;
  border-bottom-right-radius: 6px;
  padding: 0 2rem 2rem;

  figure {
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
  }

  h3 {
    font: ${(props) => props.theme["title-sm"]};
    color: ${(props) => props.theme["base-subtitle"]};
  }

  > p {
    margin-block: 0.8rem 3.3rem;
    text-align: center;
    font: ${(props) => props.theme["text-md"]};
    color: ${(props) => props.theme["base-label"]};
  }

  > div {
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

      input {
        border: 0;
        outline: 0;
        border-radius: 6px;

        background: ${(props) => props.theme["base-button"]};
        color: ${(props) => props.theme.purple};
      }
    }
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
