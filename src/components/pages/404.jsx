import { Link } from "react-router-dom";

import Error404Image from "../../assets/errors/error_404.png";
import WidgetNav from "../widgetNav/WidgetNav";
import "../../style/errors.scss";

const Page404 = () => {
    return (
        <div className="error-wrapper">
            <div className="error-body">
                <div className="error__img">
                    <img src={ Error404Image } alt="ErrorImage" />
                </div>
                <p className="error__title">Упс, промашечка</p>
                <span className="error__text">К сожалению, данная страница спрятана в Нарнии</span>
                <Link className="error__back-btn" to="/"><span className="error__back-btn-text">Обратно к чудесам</span></Link>
            </div>
            <WidgetNav />
        </div>
    );
};

export default Page404;
