import React from 'react';
import { Route, Switch } from 'react-router-dom';

// pages
import Home from '../pages/Home';
import NewRoom from '../pages/NewRoom';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/rooms/new" component={NewRoom} />
    </Switch>
  );
};

export default Routes;
