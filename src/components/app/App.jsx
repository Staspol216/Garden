import AppSidebar from "../appSidebar/AppSidebar";

import Widget from "../widget/Widget";
import WidgetBackground from "../widgetBackground/WidgetBackground";

const App = () => {
    return (
        <div className="app">
            <AppSidebar />
            <main className="main">
                <WidgetBackground />
                <Widget />
            </main>
        </div>
    );
};

export default App;
