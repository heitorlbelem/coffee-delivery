import { MapPin, ShoppingCart } from "phosphor-react";
import { Outlet } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { HeaderContainer, MainContainer } from "./styles";

export function Header() {
  return (
    <>
      <HeaderContainer>
        <img src={logo} alt="" width={85} height={40} />
        <nav>
          <span>
            <MapPin size={22} weight="fill" />
            Porto Alegre, RS
          </span>
          <div>
            <ShoppingCart size={22} weight="fill" />
          </div>
        </nav>
      </HeaderContainer>

      <MainContainer>
        <Outlet />
      </MainContainer>
    </>
  );
}
