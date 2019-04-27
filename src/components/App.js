import React, { Component } from 'react';
import '../App.css';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import Categoria from './Categoria';
import NavBar from './NavBar';
import List from './List';
import SearchBar from './SearchBar';
import { Route } from 'react-router-dom';

class App extends Component {
  
  render() {
    return (
      <div>
        <NavBar />
        <Route exact path="/" render={() => (
          <SearchBar />
        )} />
        <Route exact path="/" render={() => (
          <Categoria />
        )} />
        <Route exact path="/mais-barato" render={() => (
          <List tipo={"barato"}/>
        )} />
        <Route exact path="/mais-proximo" render={() => (
          <List tipo={"proximo"}/>
        )} />
        <Route exact path="/sugestao" render={() => (
          <List tipo={"sugestao"}/>
        )} />
      </div>
    )
  }
}

export default App;
