import "./drinksList.scss";

import { nanoid } from "@reduxjs/toolkit";
import { useEffect } from "react";
import { useDispatch , useSelector } from "react-redux";
import { useParams } from "react-router";

import { fetchDrinks } from "./drinksListSlice";
import DrinksListItem from "../drinksListItem/DrinksListItem";
import Spinner from "../spinner/Spinner";

const DrinksList = (props) => {

    const { title } = props;

    const shop = useParams();

    const dispatch = useDispatch();
    const drinks = useSelector( state => state.drinks.drinks);
    const drinksLoadingStatus = useSelector( state => state.drinks.drinksLoadingStatus);

    useEffect(() => {
        dispatch(fetchDrinks(shop));
    }, []);

    const renderItems = (arr) => {
        if (arr.length === 0) {
            return <h5 className="text-center">Напитики отсутствуют</h5>;
        }

        return arr.map((props, i) => {
            return <DrinksListItem
                key={ nanoid() }
                id={ i }
                { ...props } />;});
    };

    const listItems = renderItems(drinks.slice(0, 4));
    const spinner = drinksLoadingStatus === "loading" ? <Spinner /> : null;
    const error = drinksLoadingStatus === "error" ? <h5 className="text-center">Напитки отсутствуют</h5> : null;

    return (

        <>
            <div className="categories__coffee cofee">
                <div
                    style={ {
                        color: title === "Рекомендуем" ? "#F3F4F0" : null
                    } }
                    className="coffee__title">{ title }</div>
                <ul className="coffee__list">
                    { listItems }
                </ul>
            </div>
            { spinner }
            { error }
        </>

    );
};

export default DrinksList;
