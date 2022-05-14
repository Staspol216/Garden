import { FC } from "react";
import "./drinkCounter.scss";

interface DrinkCounterProps {
  onDecrease: () => void;
  onIncrease: () => void;
  quantity: number;
}

const DrinkCounter: FC<DrinkCounterProps> = ({ onDecrease, quantity, onIncrease }) => {
  return (
    <div className="counter">
      <button
        className="counter__btn"
        onClick={ onDecrease }
      >-</button>
      <span className="counter__current-beverage-count">{ quantity }</span>
      <button
        className="counter__btn"
        onClick={ onIncrease }
      >+</button>
    </div>
  );
};

export default DrinkCounter;
