import styled from "styled-components";

export const CountButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: ${(props) => props.theme["base-button"]};

  border-radius: 6px;
  max-width: fit-content;

  input,
  button {
    background: transparent;
    outline: 0;
    border: 0;
  }

  input[type="number"] {
    width: 2rem;

    font: ${(props) => props.theme["text-md"]};
    color: ${(props) => props.theme["base-title"]};

    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;

    &::-webkit-inner-spin-button,
    &::-webkit-outer-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${(props) => props.theme.purple};
    cursor: pointer;

    padding: 1.2rem 0.8rem;

    transition: color 200ms;

    &:hover {
      color: ${(props) => props.theme["purple-dark"]};
    }
  }
`;
