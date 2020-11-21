
import React from 'react';
import Group from './Components/Group'
import Contact from './Components/Contact'
import Alert from './Components/Alert'
import Chat from './Components/Chat'
import History from './Components/History'
import Profil from './Components/Profil'
import Signup from './Components/Signup'
import Login from './Components/Login'
import OTP from './Components/OTP'
import Share from './Components/Share'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/history" exact component={History} />
        <Route path="/chat" exact component={Chat} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/alert" exact component={Alert} />
        <Route path="/groups" exact component={Group} />
        <Route path="/profil" exact component={Profil} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/login" exact component={Login} />
        <Route path="/otp" exact component={OTP} />
        <Route path="/share" exact component={Share} />
      </Switch>
    </BrowserRouter >

  );
}

export default App;

