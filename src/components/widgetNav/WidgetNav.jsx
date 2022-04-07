import Garden from "../../assets/nav_icon/garden.svg";
import MapMarker from "../../assets/nav_icon/map-marker.svg";
import Ticket from "../../assets/nav_icon/ticket.svg";
import "./widgetNav.scss";

const WidgetNav = () => {
    return (
        <div className="widget__nav nav">
            <nav className="nav__row">
                <div className="nav__item">
                    <div className="nav__icon-box">
                        <img src={ Garden } alt="Молнии" />
                    </div>
                    <span className="nav__text">Garden</span>
                </div>
                <div className="nav__item">
                    <div className="nav__icon-box">
                        <img src={ MapMarker } alt="Молнии" />
                    </div>
                    <span className="nav__text">Кофейни</span>
                </div>
                <div className="nav__item">
                    <div className="nav__icon-box">
                        <img src={ Ticket } alt="Молнии" />
                    </div>
                    <span className="nav__text">К оплате</span>
                </div>
            </nav>
        </div>
    );
};

export default WidgetNav;
