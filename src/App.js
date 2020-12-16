import React from 'react';
import Group from './Container/ChatGroup'
import Contact from './Container/Contact'
import Chat from './Container/TeamChat'
import History from './Container/History'
import Profil from './Components/Profil'
import Signup from './Components/Signup'
import Login from './Components/Login'
import Video from '../src/Components/WebChat'
import PrivateRoute from './hooks/PrivateRoute'
import LandingRoute from './hooks/LandingRoute'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Landing from './Components/Landing';


const App = () => {
  const token = localStorage.getItem('token');
  return (
    <BrowserRouter>
      <Switch>
        <LandingRoute path="/" exact component={Landing} />
        <PrivateRoute path="/history" exact component={History} />
        <PrivateRoute path="/chat" exact component={Chat} />
        <PrivateRoute path="/contact" exact component={Contact} />
        <PrivateRoute path="/alert" exact component={Video} />
        <PrivateRoute path="/groups" exact component={Group} />
        <PrivateRoute path="/profil" exact component={Profil} />
        <Route path="/signup" exact render={props => token ? <Redirect to='/contact' /> : <Signup {...props} />} />
        <Route path="/login" exact render={props => token ? <Redirect to='/contact' /> : <Login {...props} />} />

      </Switch>
    </BrowserRouter >

  );
}

export default App;

