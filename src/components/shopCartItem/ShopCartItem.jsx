import "./shopCartItem.scss";
import { ReactComponent as CoffeeIcon } from "../../assets/categoriesPage/icon/CoffeeIcon.svg";
import DrinkCounter from "../drinkCounter/DrinkCounter.tsx";

const ShopCartItem = ({ onIncrease, onDecrease, ...props }) => {

  const { cream, modify, name, price, quantity } = props;

  return (
    <li className="shopping-cart__item">
      <div className="shopping-cart__top">
        <div className="shopping-cart__name">
          <div className="shopping-cart__icon-box">
            <CoffeeIcon />
          </div>
          <span className="shopping-cart__descr">{ name }</span>
        </div>
      </div>
      <div className="shopping-cart__bottom">
        <div className="shopping-cart__additievs-info">
          { cream ? <span className="shopping-cart__cream">{ cream }</span> : null }
          { modify ? <span className="shopping-cart__modify">{ modify }</span> : null }
        </div>
        <div className="shopping-cart__add-block">
          <DrinkCounter
            quantity={ quantity }
            onIncrease={ () => {
              onIncrease({
                ...props
              });
            } }
            onDecrease={ () => {
              onDecrease({
                ...props
              });
            } }
          />
          <span className="shopping-cart__total-sum">{ quantity * price }</span>
        </div>
      </div>
    </li>
  );
};

export default ShopCartItem;
