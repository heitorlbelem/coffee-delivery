import {
  CartInfo,
  PaymentContainer,
  PaymentInfo,
  SectionHeader,
} from "./styles";

export function Payment() {
  return (
    <PaymentContainer>
      <PaymentInfo>
        <SectionHeader>Complete seu pedido</SectionHeader>
      </PaymentInfo>

      <CartInfo>
        <SectionHeader>Cafés selecionados</SectionHeader>
        <div></div>
      </CartInfo>
    </PaymentContainer>
  );
}
