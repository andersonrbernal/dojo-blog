import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './components/partials/Navbar';
import Home from './components/Home';
import Create from './components/Create';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <div className="content">
          <Switch>
            <Route component={Home} exact path="/" />
            <Route component={Create} exact path="/create" />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
