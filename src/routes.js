import * as React from 'react';
import { Route, HashRouter as Router, Switch } from 'react-router-dom';
import {Helmet} from 'react-helmet';

import Sidebar from './components/Sidebar/Sidebar';
import Container from './components/Container/Container';
import Photos from './components/Photos/Photos';
import Empty from './components/Empty/Empty';

const Routes = () => (
  <Router>
    <Helmet>
      <meta charSet="utf-8" />
      <title>CUSTOM TITLE</title>
      <meta content="CUSTOM DESCRIPTION" name="description" />
    </Helmet>
    <Container>
      <Sidebar />
      <Switch>
        <Route exact path="/" component={Photos} />
        <Route exact path="/photos" component={Photos} />
        <Route exact path="/files" component={Empty} />
        <Route exact path="/sharing" component={Empty} />
        <Route exact path="/links" component={Empty} />
        <Route exact path="/events" component={Empty} />
        <Route exact path="/get-started" component={Empty} />
      </Switch>
    </Container>
  </Router>
);

export default Routes;
