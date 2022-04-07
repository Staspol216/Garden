import "./paymentPage.scss";

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { ReactComponent as AndleDownIcon } from "../../../assets/payment_page/angle-down.svg";
import BackBtn from "../../backBtn/BackBtn";
import PaymentForm from "../../paymentForm/PaymentForm";
import ShopCart from "../../shopCart/ShopCart";

const PaymentPage = () => {

    const { shop } = useParams();
    const { cart } = useSelector( state => state.shoppingCart);

    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        let price = cart.reduce((prevValue, item) => {
            return prevValue + item.price * item.quantity;
        }, 0);

        setTotalPrice(price);
    }, [cart, totalPrice, setTotalPrice]);

    return (
        <div className="payment__page">
            <div className="payment__underheader"></div>
            <div className="payment__header">
                <p className="payment__title"> <span className="payment__final">Итого:</span> <span className="payment__total-sum">{ totalPrice }Р</span></p>
                <BackBtn>
                    <AndleDownIcon width={ 24 } height={ 24 } />
                </BackBtn>
            </div>
            <PaymentForm />
            <ShopCart />
            <div className={ `payment__pay-block ${shop}-color-pattern` }>
                <div className={ `payment__pattern pattern-block ${shop}-pattern` }></div>
                <div className="payment__rules">
                    <input type="checkbox" id="checkobox-rules" />
                    <label className="payment__checkbox-rules" htmlFor="checkobox-rules">Я согласен с правилами оплаты</label>
                </div>
                <button
                    type="submit"
                    form="payment"
                    className="payment__pay-btn">Оплатить</button>
            </div>
        </div>
    );
};

export default PaymentPage;
