

import React from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { withAuth0 } from '@auth0/auth0-react';
import Home from './Components/Home';
import FavWatch from './Components/FavWatch';
import LoginButton from './Components/LoginButton';
class App extends React.Component {

  render() {
    console.log('app', this.props);
    const { isAuthenticated } = this.props.auth0;
    return (
      <>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              {isAuthenticated ? <Home /> : <LoginButton />}
            </Route>
            <Route exact path="/FavWatch">
              {isAuthenticated && <FavWatch />}
            </Route>
          </Switch>
          <Footer />
        </Router>
      </>
    );
  }
}

export default withAuth0(App);

