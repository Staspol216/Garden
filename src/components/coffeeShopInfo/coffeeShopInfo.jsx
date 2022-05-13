import "./coffeeShopInfo.scss";
import { ReactComponent as CakeIcon } from "../../assets/coffeeShopItem/icons/cake.svg";
import { ReactComponent as CoffeBeanIcon }  from "../../assets/coffeeShopItem/icons/coffee-bean.svg";
import { ReactComponent as CoffeeCupIcon } from "../../assets/coffeeShopItem/icons/coffee-cup.svg";
import { ReactComponent as KettleIcon } from "../../assets/coffeeShopItem/icons/kettle.svg";
import { ReactComponent as MenuIcon } from "../../assets/coffeeShopItem/icons/menu.svg";
import photo1 from "../../assets/coffeeShopItem/item__photo/photo_1.png";
import photo2 from "../../assets/coffeeShopItem/item__photo/photo_2.png";
import photo3 from "../../assets/coffeeShopItem/item__photo/photo_3.png";

const CoffeeShopInfo = () => {

  return (
    <>
      <div className="cafe-list__info">
        <div className="cafe-list__category">
          <ul className="cafe-list__products products-list">
            <li className="products-list__item">
              <a href="/" className="products-list__link">
                <div className="products-list__icon-box">
                  <CoffeeCupIcon />
                </div>
                <span className="products-list__descr">Напитки</span>
              </a>
            </li>
            <li className="products-list__item">
              <a href="/" className="products-list__link">
                <div className="products-list__icon-box">
                  <CakeIcon />
                </div>
                <span className="products-list__descr">Еда</span>
              </a>
            </li>
            <li className="products-list__item">
              <a href="/" className="products-list__link">
                <div className="products-list__icon-box">
                  <CoffeBeanIcon />
                </div>
                <span className="products-list__descr">Зерно</span>
              </a>
            </li>
            <li className="products-list__item">
              <a href="/" className="products-list__link">
                <div className="products-list__icon-box">
                  <KettleIcon />
                </div>
                <span className="products-list__descr">Аксессуары</span>
              </a>
            </li>
          </ul>
          <div className="cafe-list__new">
            <div className="cafe-list__new-icon">
              <MenuIcon />
            </div>
            <span className="cafe-list__new-text">new</span>
          </div>
        </div>
        <div className="cafe-list__timetable timetable">
          <div className="timetable__item">
            <span className="timetable__day">Пн-Пт</span>
            <span className="timetable__hours">7:30 - 23:00</span>
          </div>
          <div className="timetable__item">
            <span className="timetable__day">Сб-Вс</span>
            <span className="timetable__hours">7:30 - 23:00</span>
          </div>
        </div>
      </div>
      <div className="cafe-list__photo cafe-photo">
        <h4 className="cafe-photo__title">Фотографии заведения</h4>
        <div className="cafe-photo__row">
          <div className="cafe-photo__item">
            <img src={ photo1 } alt="photo1" />
          </div>
          <div className="cafe-photo__item">
            <img src={ photo2 } alt="photo2" />
          </div>
          <div className="cafe-photo__item">
            <img src={ photo3 } alt="photo3" />
          </div>
          <div className="cafe-photo__item">
            <img src={ photo1 } alt="photo1" />
          </div>
        </div>
      </div>
    </>
  );
};

export default CoffeeShopInfo;
