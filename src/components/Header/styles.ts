import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 3.2rem 1.6rem;
  width: min(100%, 1280px);
  margin-inline: auto;

  nav {
    display: flex;
    align-items: center;
    gap: 1.2rem;

    span {
      display: flex;
      align-items: center;
      gap: 0.4rem;

      padding: 0.8rem;
      border-radius: 6px;
      background-color: ${(props) => props.theme["purple-light"]};
      color: ${(props) => props.theme["purple-dark"]};
      font: ${(props) => props.theme["text-sm"]};

      svg {
        color: ${(props) => props.theme.purple};
      }
    }

    div {
      width: 3.8rem;
      height: 3.8rem;
      padding: 0.2rem;
      border-radius: 6px;

      color: ${(props) => props.theme["yellow-dark"]};
      background-color: ${(props) => props.theme["yellow-light"]};

      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;

      transition: opacity 200ms;

      &:hover {
        opacity: 0.8;
      }
    }
  }
`;

export const MainContainer = styled.div`
  width: min(100%, 1280px);
  margin-inline: auto;
  padding-inline: 1.6rem;
  padding-bottom: 3.2rem;
`;
