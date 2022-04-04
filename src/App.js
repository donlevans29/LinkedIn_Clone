import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'; // importing Router
import "./App.css"; // importing css
import Login from "./components/Login"; // importing Login

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
            <Route exact path="/" >
              <Login />
            </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
