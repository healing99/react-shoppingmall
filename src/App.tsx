import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ItemDetail, Main } from "./pages/index";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/item/:itemId" exact component={ItemDetail} />
          <Route component={() => <div>Page Not Found</div>} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
