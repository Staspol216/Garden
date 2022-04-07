import "./drinksListItem.scss";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { ReactComponent as CoffeeIcon } from "../../assets/categoriesPage/icon/CoffeeIcon.svg";

import "swiper/swiper-bundle.css";

const DrinksListItem = (props) => {

    const drinks = useSelector( state => state.drinks.drinks);

    const { name, slug, price, id } = props;

    if (id === 3) {
        return (
            <li className="coffee__item">
                <Link to="all">
                    <div className="item-coffee__content">
                        <div className="item-coffee__descr item-coffee__descr_all">Посмотреть все</div>
                    </div>
                    <div className="item-coffee__info">
                        <span className="item-coffee__count">{ `${id} из ${drinks.length}` }</span>
                    </div>
                </Link>
            </li>
        );
    }

    return (
        <li className="coffee__item">
            <Link to={ slug }>
                <div className="item-coffee__content">
                    <div className="item-coffee__icon-box">
                        <CoffeeIcon />
                    </div>
                    <div className="item-coffee__descr">{ name }</div>
                </div>
                <div className="item-coffee__info">
                    <span className="item-coffee__count"></span>
                    <span className="item-coffee__price">{ price } ₽</span>
                </div>
            </Link>
        </li>
    );
};

export default DrinksListItem;
