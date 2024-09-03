import { CardsGrid, ProductsContainer } from "./styles";

import { Banner } from "./components/Banner";
import { Card } from "./components/Card";

export function Home() {
  return (
    <>
      <Banner />
      <ProductsContainer>
        <h2>Nossos cafés</h2>
        <CardsGrid>
          <Card />
        </CardsGrid>
      </ProductsContainer>
    </>
  );
}
