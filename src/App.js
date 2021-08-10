import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Index from "./components/Index";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Index} />
      </Switch>
    </Router>
  );
}

export default App;
