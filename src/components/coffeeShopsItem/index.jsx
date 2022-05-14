import classNames from "classnames";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./coffeeShopsItem.scss";
import AngleDownIcon from "assets/nav_icon/angle-down.svg";

import CoffeeShopInfo from "components/coffeeShopInfo";

const CoffeeShopsItem = (props) => {

  const { name, addres, slug } = props;
  const [showInfo, setShowInfo] = useState(false);

  const itemClass = classNames("cafe-list__item", `${slug}-color-pattern`, {
    "active": showInfo
  });

  const btnClass = classNames("cafe-list__btn", {
    "cafe-list__btn_active": showInfo
  });

  return (
    <li className={ itemClass }>
      <div className={ `cafe-list__pattern pattern-block ${slug}-pattern` }></div>
      <div className="cafe-list__inner">
        <h3 className="cafe-item__title">{ name }</h3>
        <span className="cafe-address">ул. { addres }</span>
      </div>
      <button onClick={ () => {setShowInfo(!showInfo);} } className={ btnClass }>
        <img src={ AngleDownIcon } alt="AngleDownIcon" />
      </button>
      { showInfo ? <CoffeeShopInfo /> : null }
      { showInfo ? <Link to={ slug }><button className="cafe-list__link button">Go</button></Link> : null }
    </li>
  );
};

export default CoffeeShopsItem;
