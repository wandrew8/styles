import './App.css';
import HomePage from './pages/HomePage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
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
