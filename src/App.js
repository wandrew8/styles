import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Navigation from './components/Navigation';
import AnimationApp from './components/AnimationApp';

function App() {

  return (
    <div>
      <Router>
        <Navigation />
        <Switch>
          <Route path="*">
            <AnimationApp />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
