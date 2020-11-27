
import React from 'react';
import Group from './Components/Group'
import Contact from './Components/Contact'
import Alert from './Components/Alert'
import Chat from './Components/Chat'
import History from './Components/History'
import Profil from './Components/Profil'
import Signup from './Components/Signup'
import Login from './Components/Login'
import PublicRoute from './hooks/PublicRoute'
import OTP from '../src/Components/OTP'
import Share from '../src/Components/Share'
import Video from '../src/Components/WebChat'
import PrivateRoute from './hooks/PrivateRoute'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

const App = () => {
  const token = localStorage.getItem('token');
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact render={props => token ? <Redirect to='/contact' /> : <Login {...props} />} />
        <PrivateRoute path="/history" exact component={History} />
        <PrivateRoute path="/video" exact component={Video} />
        <PrivateRoute path="/chat" exact component={Chat} />
        <PrivateRoute path="/contact" exact component={Contact} />
        <PrivateRoute path="/alert" exact component={Alert} />
        <PrivateRoute path="/groups" exact component={Group} />
        <PrivateRoute path="/profil" exact component={Profil} />
        <Route path="/signup" exact render={props => token ? <Redirect to='/contact' /> : <Signup {...props} />} />
        <Route path="/login" exact render={props => token ? <Redirect to='/contact' /> : <Login {...props} />} />
      </Switch>
    </BrowserRouter >

  );
}

export default App;

