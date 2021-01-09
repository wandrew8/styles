import './App.css';
import HomePage from './pages/HomePage';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Navigation from './components/Navigation';
import AnimationApp from './components/AnimationApp';
import SideNavigation from './components/SideNavigation';

function App() {

  return (
    <div>
      <Router>
        <SideNavigation />
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
