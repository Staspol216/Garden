
import { useSelector } from "react-redux";
import BeverageDrinkImage from "assets/DrinkSinglePage/beverage.png";
import { ReactComponent as LeftArrowBtn } from "assets/DrinkSinglePage/icon/arrow-left.svg";
import { ReactComponent as HeartIcon } from "assets/DrinkSinglePage/icon/favorite.svg";

import BackBtn from "components/backBtn";
import DrinkOrderCreator from "components/drinkOrderCreator";

import "./drinkSinglePage.scss";

const DrinkSinglePage = () => {

    const beverage = useSelector( state => state.shoppingCart.activeBeverage);

    const { name, size } = beverage;

    return (
      <div className="beverage__page">
        <div className="beverage__header beverage-header">
          <div className="beverahe-header__left">
            <BackBtn resetBeverage={ true }>
              <LeftArrowBtn width="100%" height="100%" />
            </BackBtn>
            <h4 className="beverage-header__name">{ name }</h4>
          </div>
          <div className="beverage-header__right">
            <span className="beverage-header__size">{ size }мл.</span>
            <div className="beverage-header__heart-icon">
              <HeartIcon />
            </div>
          </div>
        </div>
        <div className="beverage__image">
          <img src={ BeverageDrinkImage } alt="BeverageDrinkImage" />
        </div>
        <DrinkOrderCreator />
      </div>

    );
};

export default DrinkSinglePage;
