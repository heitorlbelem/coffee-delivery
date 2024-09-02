import { CardsGrid, ProductsContainer } from "./styles";

import { Banner } from "./components/Banner";
import { CoffeeCard } from "./components/CoffeeCard";

export function Home() {
  return (
    <>
      <Banner />
      <ProductsContainer>
        <h2>Nossos cafés</h2>
        <CardsGrid>
          <CoffeeCard />
        </CardsGrid>
      </ProductsContainer>
    </>
  );
}
