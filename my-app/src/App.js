
import './App.css';

import {Home}from './Home';
import {KompaniaProdhuese}from './KompaniaProdhuese';
import {Navigation}from './Navigation';
import {Produkti}from './Produkti';

import{BrowserRouter,Route,Switch }from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <h3 className="m-3 d-flex justify-content-center">
      Electronic Shop
      </h3>

      <Navigation/>
      <Switch>
        <Route path='/' component={Home} exact/>
        <Route path='/KompaniaProdhuese/' component={KompaniaProdhuese} exact/>
        <Route path='/Produkti/' component={Produkti} exact/>

      </Switch>

    </div>
    </BrowserRouter>
  );
}

export default App;
