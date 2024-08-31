import styled from "styled-components";

export const CountButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.8rem;
  overflow: hidden;
  border-radius: 6px;

  background-color: ${(props) => props.theme["base-button"]};
  color: ${(props) => props.theme["base-title"]};
  font: ${(props) => props.theme["text-md"]};
`;

export const ActionButton = styled.button`
  outline: 0;
  border: 0;
  background: ${(props) => props.theme["base-button"]};
  color: ${(props) => props.theme.purple};
`;
