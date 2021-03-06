import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import Update from './components/Trip/Update';
import Delete from './components/Trip/Delete';
// import { FetchData } from './components/FetchData';
// import { Counter } from './components/Counter';

import './custom.css'
import Trips from './components/Trip/Trips';
import Create from './components/Trip/Create';

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/trips' component={Trips} />
        <Route path='/create' component={Create} />
        <Route path='/update/:id' component={Update} />
        <Route path='/delete' component={Delete} />
        {/* <Route path='/counter' component={Counter} /> */}
        {/* <Route path='/fetch-data' component={FetchData} /> */}
      </Layout>
    );
  }
}
