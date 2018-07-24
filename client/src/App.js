import React, { Component } from 'react';
// import NoMatch from './NoMatch';
import AboutMe from './components/AboutMe';
import NavBar from './components/NavBar'; 
import Contact from './components/Contact';
import Home from './components/Home';
// import MyIntersts from './MyInterests';
import { Switch, Route } from 'react-router-dom';


class App extends Component {
  render() {
    return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exect path='/about' component={AboutMe} />
        <Route exact path='/contact' component={Contact} />
        {/* <Route exact path='/contact' component={Contact} />
        <Route component={NoMatch} /> */}
      </Switch>
    </div>
    );
  }
}

export default App;
