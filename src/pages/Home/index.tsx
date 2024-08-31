import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import coffeePrincipal from "../../assets/images/principal.png";
import { defaultTheme } from "../../styles/themes/default";
import {
  BannerContainer,
  CardsGrid,
  CoffeeCard,
  FeatureItem,
  FeaturesContainer,
  ProductsContainer,
  ShoppingCartButton,
} from "./styles";

import traditionalCoffee from "../../assets/images/traditional.png";
import { CountButton } from "../../components/CountButton";

export function Home() {
  return (
    <>
      <BannerContainer>
        <div>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
          <FeaturesContainer>
            <FeatureItem featureColor={defaultTheme.yellow}>
              <ShoppingCart size={14} weight="fill" />
              Compra simples e segura
            </FeatureItem>
            <FeatureItem featureColor={defaultTheme["base-text"]}>
              <Package size={14} weight="fill" />
              Embalagem mantém o café intacto
            </FeatureItem>
            <FeatureItem featureColor={defaultTheme["yellow-dark"]}>
              <Timer size={14} weight="fill" />
              Entrega rápida e rastreada
            </FeatureItem>
            <FeatureItem featureColor={defaultTheme.purple}>
              <Coffee size={14} weight="fill" />O café chega fresquinho até você
            </FeatureItem>
          </FeaturesContainer>
        </div>

        <img src={coffeePrincipal} alt="" />
      </BannerContainer>

      <ProductsContainer>
        <h2>Nossos cafés</h2>
        <CardsGrid>
          <CoffeeCard>
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
          </CoffeeCard>
          <CoffeeCard>
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
          </CoffeeCard>
          <CoffeeCard>
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
          </CoffeeCard>
          <CoffeeCard>
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
          </CoffeeCard>
          <CoffeeCard>
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
          </CoffeeCard>
          <CoffeeCard>
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
          </CoffeeCard>
          <CoffeeCard>
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
          </CoffeeCard>
          <CoffeeCard>
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
          </CoffeeCard>
          <CoffeeCard>
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
          </CoffeeCard>
          <CoffeeCard>
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
          </CoffeeCard>
          <CoffeeCard>
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
          </CoffeeCard>
        </CardsGrid>
      </ProductsContainer>
    </>
  );
}
