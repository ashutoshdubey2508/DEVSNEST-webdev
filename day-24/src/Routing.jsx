  
import React from 'react';
import Home from './Home';
import About from './About';
import Profile from './Profile';
import { Switch, Route, Link } from 'react-router-dom';

export const Routing = () => {
    return(
    <div>
        <Switch>
            <Route path='/about'>
                <About />
            </Route>
            <Route path='/profile'>
                <Profile />
            </Route>
            <Route path='/'>
                <Home />
            </Route>
        </Switch>
    </div>
    );
}

export const Linking = () => {

    return(
    <div className = "links">

   <Link className = 'inner' to='/'>
       <h2>Home</h2>
   </Link>

   <Link className = 'inner' to='/about'>
       <h2>About</h2>
   </Link>

   <Link className = 'inner' to='/profile'>
       <h2>Profile</h2>
   </Link>

    </div>
    );
}