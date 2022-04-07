import { nanoid } from "@reduxjs/toolkit";
import { useDispatch , useSelector } from "react-redux";
import "./shopCart.scss";
import { addToCart, decreaseItemCount, removeAllDrinksInCart } from "../drinkOrderCreator/drinkOrderCreatorSlice";
import ShopCartItem from "../shopCartItem/ShopCartItem";

const ShopCart = () => {

    const cartItems = useSelector( state => state.shoppingCart.cart);
    const dispatch = useDispatch();

    const increaseItemInCart = (item) => {
        dispatch(addToCart(item));
    };

    const decreaseItemInCart = (item) => {
        dispatch(decreaseItemCount(item));
    };

    const renderItems = (arr) => {
        if (arr.length === 0) {
            return <h5 className="text-center">Корзина пустая</h5>;
        }

        return arr.map((props) => {
            return <ShopCartItem
                key={ nanoid() }
                onIncrease={ (item) => increaseItemInCart(item) }
                onDecrease={ (item) => decreaseItemInCart(item) }
                { ...props } />;});
    };

    const onClearShopCart = () => {
        dispatch(removeAllDrinksInCart());
    };

    const listItems = renderItems(cartItems);

    return (
        <div className="shopping-cart">
            <div className="shopping-cart__header">
                <span className="shopping-cart__title">Выбрано</span>
                <button onClick={ onClearShopCart } className="shopping-cart__clear-btn">Удалить все</button>
            </div>
            <ul className="shopping-cart__list">
                { listItems }
            </ul>
        </div>
    );
};

export default ShopCart;
