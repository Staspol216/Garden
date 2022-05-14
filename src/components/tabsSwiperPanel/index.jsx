import { nanoid } from "@reduxjs/toolkit";
import { NavLink } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper-bundle.css";
import "./tabsSwiperPanel.scss";
import { ReactComponent as ClockIcon } from "../../assets/categoriesPage/icon/uil_clock-eight.svg";
import { ReactComponent as Cake }  from "../../assets/coffeeShopItem/icons/cake.svg";
import { ReactComponent as CoffeeBean } from "../../assets/coffeeShopItem/icons/coffee-bean.svg";
import { ReactComponent as CoffeeCup } from "../../assets/coffeeShopItem/icons/coffee-cup.svg";
import { ReactComponent as Kettle } from "../../assets/coffeeShopItem/icons/kettle.svg";

const TabsSwiperPanel = () => {

    const categories = [
        { category: "breakfast", icon: <ClockIcon fill="#14AD99" />, id: nanoid(), name: "Завтраки"  },
        { category: "drinks", icon: <CoffeeCup />, id: nanoid(), name: "Напитки" },
        { category: "eat", icon: <Cake />, id: nanoid(), name: "Еда" },
        { category: "coffeeBeans", icon: <CoffeeBean />, id: nanoid(), name: "Зерновое кофе" },
        { category: "accessories", icon: <Kettle />, id: nanoid(), name: "Акссесуары" }
    ];

    const renderSlides = (arr) => {
        return arr.map(({ name, icon, id, category }) => {
            return (
              <SwiperSlide
                key={ id }
                tag="li"
                className="tabs-panel__item">
                <NavLink
                  to={ category }
                  className="tabs-panel__link">
                  <div className="tabs-panel__icon-box">
                    { icon }
                  </div>
                  <span className="tabs-panel__descr">{ name }</span>
                </NavLink>
              </SwiperSlide>

            );
        });
    };

    const slides = renderSlides(categories);

    return (
      <div className="categories__tabs tabs-panel">
        <Swiper
          spaceBetween={ 20 }
          slidesOffsetAfter = { -10 }
          width={ 60 }
          tag="ul"
          className="tabs-panel__list">
          { slides }
        </Swiper>
      </div>
    );
};

export default TabsSwiperPanel;
