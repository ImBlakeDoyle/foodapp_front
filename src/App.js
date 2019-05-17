import React from 'react';
import { Route, Switch } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import ItemIndex from "./components/pages/ItemIndex";
import ItemForm from './components/forms/ItemForm';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route exact path="/item/all" component={ItemIndex}/>
        <Route exact path="/item/new" component={ItemForm}/>
      </Switch>
    </div>
  );
}

export default App;
