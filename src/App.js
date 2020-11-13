
import React from 'react';
import Layout from './Components/Layout'
import Group from './Components/Group'
import Contact from './Components/Contact'
import Alert from './Components/Alert'
import Chat from './Components/Chat'
import History from './Components/History'
import Profil from './Components/Profil'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route path="/history" exact component={History} />
          <Route path="/chat" exact component={Chat} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/alert" exact component={Alert} />
          <Route path="/groups" exact component={Group} />
          <Route path="/profil" exact component={Profil} />
        </Switch>
      </Layout>
    </BrowserRouter >

  );
}

export default App;

