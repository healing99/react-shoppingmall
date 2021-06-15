import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Main } from "./pages/index";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Main} />
          <Route component={() => <div>Page Not Found</div>} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
