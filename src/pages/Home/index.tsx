import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import coffeePrincipal from "../../assets/images/principal.png";
import { defaultTheme } from "../../styles/themes/default";
import { AboutContainer, FeatureItem, FeaturesContainer } from "./styles";

export function Home() {
  return (
    <AboutContainer>
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
    </AboutContainer>
  );
}
