import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import UpdateTrip from './components/Trip/Update';
import DeleteTrip from './components/Trip/Delete';
// import { FetchData } from './components/FetchData';
// import { Counter } from './components/Counter';

import './custom.css'
import Trips from './components/Trip/Trips';
import CreateTrip from './components/Trip/Create';

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/trips' component={Trips} />
        <Route path='/create' component={CreateTrip} />
        <Route path='/update-trip/:id' component={UpdateTrip} />
        <Route path='/delete-trip' component={DeleteTrip} />
        {/* <Route path='/counter' component={Counter} /> */}
        {/* <Route path='/fetch-data' component={FetchData} /> */}
      </Layout>
    );
  }
}
