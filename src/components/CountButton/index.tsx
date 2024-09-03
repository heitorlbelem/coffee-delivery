import { Minus, Plus } from "phosphor-react";
import { useState } from "react";
import { CountButtonWrapper } from "./styles";

export function CountButton() {
  const [count, setCount] = useState(0);

  function handleIncrementCount() {
    setCount((state) => state + 1);
  }

  function handleDecrementCount() {
    setCount((state) => {
      if (state === 0) return 0;

      return state - 1;
    });
  }

  return (
    <CountButtonWrapper>
      <button>
        <Minus size={18} weight="bold" onClick={handleDecrementCount} />
      </button>
      <input type="number" min={0} value={count} />
      <button>
        <Plus size={18} weight="bold" onClick={handleIncrementCount} />
      </button>
    </CountButtonWrapper>
  );
}
