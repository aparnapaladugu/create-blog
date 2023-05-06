import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Blog from './components/Blog'
import Card from './components/Card'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Profile from './components/Profile'

const App = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Switch>
        <Route path="/create-blog">
          <Blog />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="/">
          <Home />
        </Route>
        <Route path="/card">
          <Card />
        </Route>
      </Switch>
    </React.Fragment>
  );
};

export default App