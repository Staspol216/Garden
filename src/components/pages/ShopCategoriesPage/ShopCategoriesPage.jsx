import "./ShopCategoriesPage.scss";

import { Outlet, useParams } from "react-router-dom";

import Avatar from "../../avatar/Avatar";
import TabsSwiperPanel from "../../tabsSwiperPanel/TabsSwiperPanel";
import WidgetNav from "../../widgetNav/WidgetNav";

const ShopCategoriesPage = () => {

    const { shop } = useParams();

    return (
        <>
            <div className={ `categories__banner ${shop}-color-pattern` }>
                <div className={ `categories__pattern pattern-block ${shop}-pattern` }></div>
                <h3 className="categories__header">Что желаете?</h3>
                <Avatar />
            </div>
            <TabsSwiperPanel />
            <Outlet />
            <WidgetNav />
        </>
    );
};

export default ShopCategoriesPage;
