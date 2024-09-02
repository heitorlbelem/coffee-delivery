import { ShoppingCart } from "phosphor-react";
import { CountButton } from "../../../../components/CountButton";
import { Card, ShoppingCartButton } from "./styles";

import traditionalCoffee from "../../../../assets/images/traditional.png";

export function CoffeeCard() {
  return (
    <Card>
      <figure>
        <img src={traditionalCoffee} alt="Café tradicional" />
        <figcaption>
          <span>Tradicional</span>
        </figcaption>
      </figure>
      <h3>Expresso Tradicional</h3>
      <p>O tradicional café feito com água quente e grãos moídos</p>

      <div>
        <span>
          R$ <strong>9,90</strong>
        </span>

        <div>
          <CountButton />
          <ShoppingCartButton>
            <ShoppingCart size={22} weight="fill" />
          </ShoppingCartButton>
        </div>
      </div>
    </Card>
  );
}
