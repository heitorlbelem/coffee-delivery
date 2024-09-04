import { ShoppingCart } from "phosphor-react";
import { CountButton } from "../../../../components/CountButton";
import {
  CardDescription,
  CardImage,
  CardPricing,
  CardWrapper,
  ShoppingCartButton,
} from "./styles";

interface CardProps {
  name: string;
  description: string;
  price: string;
  tags: string[];
}

import traditionalCoffee from "../../../../assets/images/traditional.png";

export function Card({ description, name, price, tags }: CardProps) {
  return (
    <CardWrapper>
      <CardImage>
        <img src={traditionalCoffee} alt="Café tradicional" />
        <figcaption>
          {tags.map((tag) => {
            return <span>{tag}</span>;
          })}
        </figcaption>
      </CardImage>

      <CardDescription>
        <h3>{name}</h3>
        <p>{description}</p>
      </CardDescription>

      <CardPricing>
        <span>
          R$ <strong>{price}</strong>
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
