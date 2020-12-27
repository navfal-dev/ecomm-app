import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import Create from './pages';
import { Provider } from './context/search';
import '../styles/tailwind.css';

const App = ({ history, currentUser }) => {
  return (
    <Provider>
      <Router history={history}>
        <Switch>
          <Route path="/search/:term" component={Create} />
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
