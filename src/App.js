import React, { Suspense } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

const Landing = React.lazy(() => import('./Components/Landing'));
const Contact = React.lazy(() => import('./Container/Contact'));
const Group = React.lazy(() => import('./Container/ChatGroup'));
const Chat = React.lazy(() => import('./Container/TeamChat'));
const History = React.lazy(() => import('./Container/History'));
const Profil = React.lazy(() => import('./Components/Profil'));
const Signup = React.lazy(() => import('./Components/Signup'));
const Login = React.lazy(() => import('./Components/Login'));
const Video = React.lazy(() => import('../src/Components/WebChat'));
const PrivateRoute = React.lazy(() => import('./hooks/PrivateRoute'));
const LandingRoute = React.lazy(() => import('./hooks/LandingRoute'));

const App = () => {
  const token = localStorage.getItem('token');
  return (
    <BrowserRouter>
      <Switch>
        <Suspense fallback={<div>Chargement...</div>}>
          <LandingRoute path="/" exact component={Landing} />
          <PrivateRoute path="/history" exact component={History} />
          <PrivateRoute path="/chat" exact component={Chat} />
          <PrivateRoute path="/contact" exact component={Contact} />
          <PrivateRoute path="/alert" exact component={Video} />
          <PrivateRoute path="/groups" exact component={Group} />
          <PrivateRoute path="/profil" exact component={Profil} />
          <Route path="/signup" exact render={props => token ? <Redirect to='/contact' /> : <Signup {...props} />} />
          <Route path="/login" exact render={props => token ? <Redirect to='/contact' /> : <Login {...props} />} />
        </Suspense>
      </Switch>
    </BrowserRouter >

  );
}

export default App;

