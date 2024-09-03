import styled from "styled-components";

export const BannerWrapper = styled.section`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  margin-top: 9.4rem;

  img {
    width: 47.6rem;
  }
`;

export const BannerHeader = styled.header`
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
`;

export const FeaturesList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 2rem;

  margin-top: 6.6rem;
`;

const FEATURE_COLORS = {
  yellow: "yellow",
  "yellow-dark": "yellow-dark",
  purple: "purple",
  gray: "base-title",
} as const;

interface FeatureItemProps {
  featureColor: keyof typeof FEATURE_COLORS;
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

    background-color: ${(props) =>
      props.theme[FEATURE_COLORS[props.featureColor]]};
    color: ${(props) => props.theme.white};
  }
`;
