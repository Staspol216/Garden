
import { nanoid } from "@reduxjs/toolkit";
import cn from "classnames";
import { useEffect, useState } from "react";
import { useDispatch , useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { addToCart, decreaseItemCount, fetchBeverage } from "./drinkOrderCreatorSlice";
import { ReactComponent as RazorIcon } from "../../assets/DrinkSinglePage/icon/payment.svg";
import DrinkCounter from "../drinkCounter/DrinkCounter";
import  DrinkInfo  from "../drinkInfo/DrinkInfo";
import DrinkOrderForm from "../drinkOrderForm/DrinkOrderForm";
import DrinksList from "../drinksList/DrinksList";

import "./drinkOrderCreator.scss";

const DrinkOrderCreator = () => {

    const slugs = useParams();
    const dispatch = useDispatch();
    const { activeBeverage, cart, lastSubmitBeverage } = useSelector( state => state.shoppingCart);

    const [lastSubmit, setLastSubmit] = useState({});
    const [activeTab, setActiveTab] = useState(true);
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalItems, setTotalItems] = useState(0);
    const [counterVisible, setCounterVisivle] = useState(false);

    const { name, slug, size, price, desc } = activeBeverage;
    const { shop } = slugs;

    useEffect(() => {
        dispatch(fetchBeverage(slugs));
        // eslint-disable-next-line
    }, []);

    useEffect(() => {
        let price = cart.reduce((prevValue, item) => {
            return prevValue + item.price * item.quantity;
        }, 0);

        let items = cart.reduce((prevValue, item) => {
            return prevValue + item.quantity;
        }, 0);

        setTotalItems(items);
        setTotalPrice(price);
    }, [cart, totalPrice, totalItems, setTotalPrice, setTotalItems]);

    const tabsToggle = () => {
        setActiveTab(!activeTab);
    };

    const onCreateOrder = (additievs) => {
        dispatch(addToCart({ id: nanoid(), name, slug, size, price, ...additievs }));
        setLastSubmit({ name, slug, size, price, ...additievs });
    };

    const tabBtnMod = cn("beverage__modify", {
        "active" : activeTab
    });

    const infoBtnClass = cn("beverage__information", {
        "active" : !activeTab
    });

    const onRenderCounter = () => {
        setCounterVisivle(true);
    };

    const backToAddBtn = () => {
        setCounterVisivle(false);
    };

    const increaseItemInCart = (item) => {
        dispatch(addToCart(item));
    };

    const decreaseItemInCart = (item) => {
        dispatch(decreaseItemCount(item));
    };

    return (
        <div className={ `beverage__body ${shop}-color-pattern` }>
            <div className={ `beverage__pattern pattern-block ${shop}-pattern` }>
            </div>
            <div className="beverage__options">
                <button
                    onClick={ tabsToggle }
                    disabled={ activeTab  }
                    className={ tabBtnMod }>Модификации</button>
                <button
                    onClick={ tabsToggle }
                    disabled={ !activeTab }
                    className={ infoBtnClass }>Информация</button>
            </div>
            <div className="beverage__form">
                { activeTab ? <DrinkOrderForm
                    onCreateOrder={ onCreateOrder }
                    onRenderCounter={ onRenderCounter }
                    backToAddBtn={ backToAddBtn }
                /> : <DrinkInfo desc={ desc } /> }
            </div>
            <DrinksList title={ "Рекомендуем" } />
            <div className="beverage__payment">
                <div className="bevearge__add-block">
                    { counterVisible ? <DrinkCounter
                        quantity={ lastSubmitBeverage.quantity }
                        onIncrease={ () => increaseItemInCart(lastSubmit) }
                        onDecrease={ () => decreaseItemInCart(lastSubmit) } />
                        :
                        // eslint-disable-next-line
                        <button
                            type="submit"
                            form="additievs"
                            className="beverage__add-btn">Добавить</button> }
                    <span className="beverage__price">{ price } Р</span>
                </div>

                <Link to={ `/${shop}/payment` } className="beverage__pay-btn">
                    { totalItems !== 0 ? <div className="beverage__total total">
                        <div className="total__circle">
                            <span className="total__count">{ totalItems }</span>
                        </div>
                        <span className="total__summ">{ totalPrice }₽</span>
                    </div>  : null }
                    <div className="beverage__pay-icon">
                        <RazorIcon width="24" height="24" />
                    </div>
                    <span className="beverage__pay-text">К оплате</span>
                </Link>
            </div>
        </div>
    );
};

export default DrinkOrderCreator;
