import React from 'react';
import { Route, Switch } from 'react-router-dom';

// pages
import Home from '../pages/Home';
import NewRoom from '../pages/NewRoom';
import Room from '../pages/Room';
import AdminRoom from '../pages/AdminRoom';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/rooms/new" component={NewRoom} />
      <Route path="/rooms/:id" component={Room} />

      <Route path="/admin/rooms/:id" component={AdminRoom} />
    </Switch>
  );
};

export default Routes;
