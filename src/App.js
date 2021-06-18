
import './App.css';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Watchlist from './pages/Watchlist';
import { Navbar } from 'react-bootstrap';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar bg="light">
          <Navbar.Brand href='/'>Scene It</Navbar.Brand>
          <Link to="/">Home</Link>
          <Link style={{marginLeft: '1%'}} to="/watchlist">Watchlist</Link>
        </Navbar>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/watchlist">
            <Watchlist />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
