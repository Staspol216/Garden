import "./drinkCounter.scss";

const DrinkCounter = (props) => {

    return (
        <div className="counter">
            <button
                className="counter__btn"
                onClick={ props.onDecrease }
            >-</button>
            <span className="counter__current-beverage-count">{ props.quantity }</span>
            <button
                className="counter__btn"
                onClick={ props.onIncrease }
            >+</button>
        </div>
    );
};

export default DrinkCounter;
