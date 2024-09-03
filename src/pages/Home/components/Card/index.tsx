import { ShoppingCart } from "phosphor-react";
import { CountButton } from "../../../../components/CountButton";
import {
  CardDescription,
  CardImage,
  CardPricing,
  CardWrapper,
  ShoppingCartButton,
} from "./styles";

import traditionalCoffee from "../../../../assets/images/traditional.png";

export function Card() {
  return (
    <CardWrapper>
      <CardImage>
        <img src={traditionalCoffee} alt="Café tradicional" />
        <figcaption>
          <span>Tradicional</span>
        </figcaption>
      </CardImage>

      <CardDescription>
        <h3>Expresso Tradicional</h3>
        <p>O tradicional café feito com água quente e grãos moídos</p>
      </CardDescription>

      <CardPricing>
        <span>
          R$ <strong>9,90</strong>
        </span>

        <div>
          <CountButton />
          <ShoppingCartButton>
            <ShoppingCart size={22} weight="fill" />
          </ShoppingCartButton>
        </div>
      </CardPricing>
    </CardWrapper>
  );
}
