
import './App.css';

import {Home}from './Home';
import {KompaniaProdhuese}from './KompaniaProdhuese';
import {Navigation}from './Navigation';
import {Produkti}from './Produkti';
import {ContactForm}from './ContactForm';
import {LlojeteProdukteve}from './LlojeteProdukteve';
import {PreferencatETel}from './PreferencatETel';
import {Phone}from './Phone';


import{BrowserRouter,Route,Switch }from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <h3 className="m-3 d-flex justify-content-center">
      ONLINE SHOP
      </h3>

      <Navigation/>
      <Switch>
        <Route path='/' component={Home} exact/>
        <Route path='/KompaniaProdhuese/' component={KompaniaProdhuese} exact/>
        <Route path='/ContactForm/' component={ContactForm} exact/>
        <Route path='/Produkti/' component={Produkti} exact/>
        <Route path='/LlojeteProdukteve/' component={LlojeteProdukteve} exact/>
        <Route path='/Phone/' component={Phone} exact/>

        <Route path='/PreferencatETel/' component={PreferencatETel} exact/>

      </Switch>

    </div>
    </BrowserRouter>
  );
}

export default App;
