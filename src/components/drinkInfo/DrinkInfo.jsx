import "./drinkInfo.scss";

const DrinkInfo = (props) => {
    const { desc } = props;

    return (
        <div className="beverage-info">
            <div className="beverage-info__descr">{ desc }</div>
            <ul className="beverage-info__row">
                <li className="beverage-info__item">
                    <span className="beverage-info__item-title">Эц, ккал</span>
                    <span className="beverage-info__item-count">308</span>
                </li>
                <li className="beverage-info__item">
                    <span className="beverage-info__item-title">Белки, г</span>
                    <span className="beverage-info__item-count">23</span>
                </li>
                <li className="beverage-info__item">
                    <span className="beverage-info__item-title">Жиры, г</span>
                    <span className="beverage-info__item-count">17</span>
                </li>
                <li className="beverage-info__item">
                    <span className="beverage-info__item-title">Углвеоды, г</span>
                    <span className="beverage-info__item-count">38</span>
                </li>
            </ul>
        </div>
    );
};

export default DrinkInfo;
