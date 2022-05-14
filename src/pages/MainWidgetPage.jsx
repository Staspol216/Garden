import CoffeeShopsList from "components/coffeeShopsList";
import ErrorBoundary from "components/errorBoundary";
import WidgetNav from "components/widgetNav";

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
