import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import coffeeMainImage from "../../../../assets/images/principal.png";
import {
  BannerHeader,
  BannerWrapper,
  FeatureItem,
  FeaturesList,
} from "./styles";

export function Banner() {
  return (
    <BannerWrapper>
      <div>
        <BannerHeader>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery, você recebe seu café onde estiver, a qualquer
            hora.
          </p>
        </BannerHeader>
        <FeaturesList>
          <FeatureItem featureColor="yellow">
            <ShoppingCart size={14} weight="fill" />
            Compra simples e segura
          </FeatureItem>
          <FeatureItem featureColor="gray">
            <Package size={14} weight="fill" />
            Embalagem mantém o café intacto
          </FeatureItem>
          <FeatureItem featureColor="yellow-dark">
            <Timer size={14} weight="fill" />
            Entrega rápida e rastreada
          </FeatureItem>
          <FeatureItem featureColor="purple">
            <Coffee size={14} weight="fill" />O café chega fresquinho até você
          </FeatureItem>
        </FeaturesList>
      </div>

      <img src={coffeeMainImage} alt="Imagem principal do café" />
    </BannerWrapper>
  );
}
