import React, { Component } from 'react';
import '../App.css';
import Categoria from './Categoria';
import NavBar from './NavBar';
import List from './List';
import SearchBar from './SearchBar';
import { Route } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import { createBrowserHistory } from "history";

class App extends Component {
  
  render() {
    const customHistory = createBrowserHistory();
    return (
      <Grid>
        <Route exact path="/" render={() => (
          <div>
            <NavBar back={false}/>
            <SearchBar />
            <Categoria />
          </div>
        )} />       
        <Route exact path="/mais-barato" render={() => (
          <div>
            <NavBar history={customHistory} back={true}/>
            <SearchBar />
            <List tipo={"barato"}/>
          </div>
        )} />
        <Route exact path="/mais-proximo" render={() => (
          <div>
            <NavBar history={customHistory} back={true}/>
            <SearchBar />
            <List tipo={"proximo"}/>
          </div>
        )} />
        <Route exact path="/sugestao" render={() => (
          <div>
            <NavBar history={customHistory} back={true}/>
            <SearchBar />
            <List tipo={"sugestao"}/>
          </div>
        )} />
      </Grid>
    )
  }
}

export default App;
