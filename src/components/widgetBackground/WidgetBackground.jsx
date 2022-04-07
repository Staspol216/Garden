
import "./widgetBackground.scss";

import glasses from "../../assets/main_page/Stakanchiki.png";

const WidgetBackground = () => {
    return (
        <div className="page-order__body">
            <div className="page-order__ibg">
                <img src={ glasses } alt="glasses" />
            </div>
            <div className="page-order__content">
                <h1 className="page-order__title">Garden</h1>
                <p className="page-order__subtitle">Coffee roasters</p>
                <div className="page-order__slogan"> <h2> Заказ <br /> на сайте <br />
                    <span className="pink">без очереди</span></h2>
                </div>
            </div>
            <div className="page-order__substrate">
                <span className="page-order__text">Miss you^^</span>
            </div>
        </div>
    );
};

export default WidgetBackground;
