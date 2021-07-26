import React from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import Header from './components/Header/Header';
import Main from './pages/Main/Main';
import List from './pages/List/List';
import Detail from './pages/Detail/Detail';
import SignUp from './pages/SignUp/SignUp';
import Login from './pages/Login/Login';
import ProjectCreate from './pages/ProjectCreate/ProjectCreate';
import Pledges from './pages/Pledges/Pledges';
import MyProjects from './pages/MyProjects/MyProjects';
import Footer from './components/Footer/Footer';

function Routes() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/discover" exact component={List} />
        <Route path="/project" exact component={Detail} />
        <Route path="/signup" exact component={SignUp} />
        <Route path="/login" exact component={Login} />
        <Route path="/project-create" exact component={ProjectCreate} />
        <Route path="/pledges" exact component={Pledges} />
        <Route path="/my-projects" exact component={MyProjects} />
        <Redirect path="*" to="/" />
      </Switch>
      <Footer />
    </Router>
  );
}

export default Routes;
