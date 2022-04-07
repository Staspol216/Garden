
import { nanoid } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { ReactComponent as LeftArrowBtn } from "../../../assets/DrinkSinglePage/icon/arrow-left.svg";
import AltDrinksListItem from "../../alterDrinksListItem/AltDrinksListItem";
import BackBtn from "../../backBtn/BackBtn";
import WidgetNav from "../../widgetNav/WidgetNav";

import "./categorySinglePage.scss";

const CategorySinglePage = () => {

    const drinks = useSelector( state => state.drinks.drinks);

    const { shop } = useParams();

    const renderItems = (arr) => {
        if (arr.length === 0) {
            return <h5 className="text-center">Напитики отсутствуют</h5>;
        }

        return arr.map((props, i) => {
            return <AltDrinksListItem
                key={ nanoid() }
                id={ i }
                { ...props } />;});
    };

    const listItems = renderItems(drinks);

    return (
        <div className={ `single-category__page ${shop}-color-pattern` }>
            <div className={ `single-category__pattern pattern-block ${shop}-pattern` }></div>
            <div className="single-category__header">
                <BackBtn>
                    <LeftArrowBtn width="100%" height="100%" />
                </BackBtn>
                <h4 className="single-category__title">Кофе</h4>
            </div>
            <div className="single-category__body">
                { listItems }
            </div>
            <WidgetNav />
        </div>
    );
};

export default CategorySinglePage;
