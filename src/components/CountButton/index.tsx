import { Minus, Plus } from "phosphor-react";
import { ActionButton, CountButtonContainer } from "./styles";

export function CountButton() {
  return (
    <CountButtonContainer>
      <ActionButton>
        <Minus size={16} weight="bold" />
      </ActionButton>
      <span>0</span>
      <ActionButton>
        <Plus size={16} weight="bold" />
      </ActionButton>
    </CountButtonContainer>
  );
}
