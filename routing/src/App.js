import React from 'react';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
} from 'react-router-dom'

export default function App() {
  return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/about'>About</Link>
              </li>
              <li>
                <Link to='/users'>Users</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path='/about'>
              <About />
            </Route>
            <Route path='/about'>
              <Users />
            </Route>
            <Route path='/'>
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
  );
}

const About = () => <h2>About</h2>;

const Home = () => <h2>Home</h2>;

const Users = () => <h2>Users</h2>;