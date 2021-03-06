import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import ItemIndex from "./components/pages/ItemIndex";
import ItemForm from './components/forms/ItemForm';
import MainPage from './components/pages/MainPage';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route exact path="/item/all" component={ItemIndex}/>
          <Route exact path="/item/new" component={ItemForm}/>
          <Route exact path="/test" component={MainPage}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
