import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './components/partials/Navbar';
import Home from './components/Home';
import Create from './components/Create';
import BlogDetails from './components/BlogDetails';
import NotFound from './components/NotFound';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <div className="content">
          <Switch>
            <Route component={Home} exact path="/" />
            <Route component={Create} exact path="/create" />
            <Route component={BlogDetails} exact path="/blogs/:id" />
            <Route component={NotFound} path="*" />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
