import styled from "styled-components";

export const PaymentContainer = styled.div`
  display: flex;
  gap: 3.2rem;
  align-items: flex-start;
`;

export const SectionHeader = styled.header`
  font: ${(props) => props.theme["title-xs"]};
  color: ${(props) => props.theme["base-subtitle"]};
`;

export const PaymentInfo = styled.section``;

export const CartInfo = styled.section``;
