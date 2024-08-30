import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 3.2rem 16rem;

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

      font-size: 1.4rem;
      line-height: 1.3;
      font-family: "Roboto", sans-serif;

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
    }
  }
`;

export const MainContainer = styled.div`
  padding-inline: 16rem;
`;
