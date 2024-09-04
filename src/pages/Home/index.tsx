import { CardsGrid, ProductsContainer } from "./styles";

import { Banner } from "./components/Banner";
import { Card } from "./components/Card";

const cards = [
  {
    id: new Date().getTime().toString(),
    name: "Expresso Tradicional",
    description: "O tradicional café feito com água quente e grãos moídos",
    price: "9,90",
    tags: ["tradicional"],
  },
  {
    id: new Date().getTime().toString(),
    name: "Expresso Americano",
    description: "Expresso diluído, menos intenso que o tradicional",
    price: "9,90",
    tags: ["tradicional", "com leite"],
  },
  {
    id: new Date().getTime().toString(),
    name: "Expresso Cremoso",
    description: "Café expresso tradicional com espuma cremosa",
    price: "9,90",
    tags: ["tradicional", "com leite"],
  },
  {
    id: new Date().getTime().toString(),
    name: "Expresso Gelado",
    description: "Bebida preparada com café expresso e cubos de gelo",
    price: "9,90",
    tags: ["tradicional"],
  },
  {
    id: new Date().getTime().toString(),
    name: "Café com Leite",
    description: "Meio a meio de expresso tradicional com leite vaporizado",
    price: "9,90",
    tags: ["tradicional"],
  },
  {
    id: new Date().getTime().toString(),
    name: "Latte",
    description:
      "Uma dose de café expresso com o dobro de leite e espuma cremosa",
    price: "9,90",
    tags: ["tradicional"],
  },
];

export function Home() {
  return (
    <>
      <Banner />
      <ProductsContainer>
        <h2>Nossos cafés</h2>
        <CardsGrid>
          {cards.map((card) => {
            return (
              <Card
                key={card.id}
                description={card.description}
                name={card.name}
                price={card.price}
                tags={card.tags}
              />
            );
          })}
        </CardsGrid>
      </ProductsContainer>
    </>
  );
}
