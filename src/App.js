import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Group from './Container/ChatGroup/AllGroups';
import Contact from './Container/Contact';
import Chat from './Container/TemporaryChat';
import History from './Container/History';
import Profil from './Components/Profil';
import Signup from './Components/Signup';
import Login from './Components/Login';
import WebChat from './Container/WebChat'
import PrivateRoute from './hooks/PrivateRoute';
import LandingRoute from './hooks/LandingRoute';
import Landing from './Components/Landing';
import GroupsDetail from './Container/ChatGroup/GroupsDetails';
import GroupContact from './Container/ChatGroup/Contact';
import TemporaryChat from './Container/TemporaryChatScreen';

const App = () => {
  const token = localStorage.getItem('token');
  return (
    <>
      <Switch>
        <LandingRoute path="/" exact component={Landing} />
        <PrivateRoute path="/history" exact component={History} />
        <PrivateRoute path="/chat" exact component={Chat} />
        <PrivateRoute path="/contact" exact component={Contact} />
        <PrivateRoute path="/webChat/:id" exact component={WebChat} />
        <PrivateRoute path="/groups" exact component={Group} />
        <PrivateRoute path="/groups/contact" exact component={GroupContact} />
        <PrivateRoute path="/update/group/:id" exact component={GroupContact} />
        <PrivateRoute path="/groups/:id" exact component={GroupsDetail} />
        <PrivateRoute path="/webChat/team/:id" exact component={TemporaryChat} />
        <PrivateRoute path="/profil" exact component={Profil} />
        <Route path="/signup" exact render={(props) => (token ? <Redirect to="/contact" /> : <Signup {...props} />)} />
        <Route path="/login" exact render={(props) => (token ? <Redirect to="/contact" /> : <Login {...props} />)} />
      </Switch>
    </ >

  );
};

export default App;
