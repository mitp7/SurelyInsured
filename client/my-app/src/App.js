import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import Navbar from './Navbar/Navbar.js';
import Home from './Home/Home.js';
import Landing from './Landing/Landing.js';


function App() {
  return (
    <Router>
        <Navbar/>
        <Switch>
          <Route path="/" exact render={ () => <Redirect to="/landing"/> }/>
          <Route path="/landing" exact component={Landing}/>
          <Route path="/app" exact component={Home} />
        </Switch>
    </Router>
  );
}

export default App;
