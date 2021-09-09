import { ReactElement } from 'react';
import './styles/App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Coins from './pages/coin';
import Dashboard from './pages/dashboard';
import { Provider } from 'react-redux';
import combinedReducers from './store';

function App(): ReactElement {

  return (
    <div className="App" >
      <Provider store={combinedReducers}>
        <Router>
          <Switch>
            <Route path="/coin/:id">
              <Coins />
            </Route>
            <Route path="/">
              <Dashboard />
            </Route>
          </Switch>
        </Router>

      </Provider>


    </div>
  );
}

export default App;
