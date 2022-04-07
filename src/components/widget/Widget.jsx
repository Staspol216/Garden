import "./widget.scss";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import DrinksList from "../drinksList/DrinksList";
import { CategorySinglePage , DrinkSinglePage, MainWidgetPage, Page404, PaymentPage, ShopCategoriesPage } from "../pages";

const Widget = () => {
    return (
        <Router>
            <div className="widget__inner">
                <Routes>
                    <Route path="/" element={ <MainWidgetPage /> } />
                    <Route path=":shop" element={ <ShopCategoriesPage /> }>
                        <Route path=":category" element={ <DrinksList title={ "Кофе" } /> } />
                    </Route>
                    <Route path=":shop/:category/:item" element={ <DrinkSinglePage /> } />
                    <Route path=":shop/:category/all" element={ <CategorySinglePage /> } />
                    <Route path=":shop/payment" element={ <PaymentPage /> } />
                    <Route path="*" element={ <Page404 /> } />
                </Routes>
            </div>
        </Router>
    );
};

export default Widget;
