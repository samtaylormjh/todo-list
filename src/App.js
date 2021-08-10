import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Edit from "./components/Edit";

import Index from "./components/Index";
import New from "./components/New";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Index} />
        <Route exact path="/new" component={New} />
        <Route exact path="/:id/edit" component={Edit} />
      </Switch>
    </Router>
  );
}

export default App;
