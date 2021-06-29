import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ItemDetail, Main } from "./pages/index";
import Navbar from "./components/Navbar";

const App = () => {
  const [cartOpen, setCartOpen] = useState(false);
  return (
    <div className="App">
      <Router>
        <Navbar setCartOpen={setCartOpen} />
        <Switch>
          <Route
            path="/"
            exact
            component={() => (
              <Main cartOpen={cartOpen} setCartOpen={setCartOpen} />
            )}
          />
          <Route path="/item/:itemId" exact component={ItemDetail} />
          <Route component={() => <div>Page Not Found</div>} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
