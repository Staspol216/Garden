import "./drinksListItem.scss";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { ReactComponent as CoffeeIcon } from "assets/categoriesPage/icon/CoffeeIcon.svg";

import "swiper/swiper-bundle.css";

const DrinksListItem = ({ name, slug, price, id }) => {

 const drinks = useSelector(state => state.drinks.drinks);

 return (
   <li className="coffee__item">
     <Link to={ id === 3 ? "all" : slug }>
       <div className="item-coffee__content">
         <div className="item-coffee__icon-box">
           <CoffeeIcon />
         </div>
         <div className="item-coffee__descr">{ name }</div>
       </div>
       <div className="item-coffee__info">
         { id === 3  ? <span className="item-coffee__count">{ `${id} из ${drinks.length}` }</span> :
         <>
           <span className="item-coffee__count"></span>
           <span className="item-coffee__price">{ price } ₽</span>
         </> }
       </div>
     </Link>
   </li>
 );
};

export default DrinksListItem;
