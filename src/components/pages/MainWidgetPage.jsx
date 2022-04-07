import CoffeeShopsList from "../coffeeShopsList/CoffeeShopsList";
import ErrorBoundary from "../errorBoundary/ErrorBoundary";
import WidgetNav from "../widgetNav/WidgetNav";

const MainWidgetPage = () => {
    return (
        <>
            <ErrorBoundary>
                <CoffeeShopsList />
            </ErrorBoundary>
            <WidgetNav />
        </>
    );
};

export default MainWidgetPage;
