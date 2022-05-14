import "./coffeeShopsList.scss";
import { nanoid } from "@reduxjs/toolkit";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchCoffeeShops } from "./coffeeShopsSlice";
import BannerIcon from "assets/banner_icon/map.svg";
import Avatar from "components/avatar/Avatar";
import CoffeeShopsItem  from "components/coffeeShopsItem";
import Spinner from "components/spinner";

const CoffeeShopsList = () => {

  const dispatch = useDispatch();
  const coffeeShops = useSelector( state => state.coffeeShops.coffeeShops);
  const coffeeShopsLoadingStatus = useSelector( state => state.coffeeShops.coffeeShopsLoadingStatus);

  useEffect(() => {
    dispatch(fetchCoffeeShops());
  }, []);

  const renderCoffeeShopsList = (arr) => {
    if (arr.length === 0) {
      return <h5 className="text-center mt-5">Магазины отсутствуют</h5>;
    }

    return arr.map((props) => {
      return <CoffeeShopsItem key={ nanoid() } { ...props }/>;
    });
  };

  const listItems = renderCoffeeShopsList(coffeeShops);
  const spinner = coffeeShopsLoadingStatus === "loading" ? <Spinner /> : null;
  const error = coffeeShopsLoadingStatus === "error" ? <h5 className="text-center mt-5">Магазины отсутствуют</h5> : null;

  return (
    <div className="widget__cafe cafe">
      <div className="cafe__banner">
        <h3 className="cafe__header">
          <p className="cafe__header-text">Выберите кофейню</p>
          <div className="cafe__header-icon">
            <img src={ BannerIcon } alt="BannerIcon" />
          </div>
        </h3>
        <Avatar />
      </div>
      <ul className="cafe__list cafe-list">
        { listItems }
      </ul>
      <div className="block"></div>
      { spinner }
      { error }
    </div>
  );
};

export default CoffeeShopsList;
