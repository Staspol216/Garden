import AppSidebar from "components/appSidebar";

import Widget from "components/widget";
import WidgetBackground from "components/widgetBackground";

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
