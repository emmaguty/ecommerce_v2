import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Sidebar from './components/Sidebar';
import { Product } from './components/Product';
import {Brand}  from './components/Brand';
import {Category} from './components/Category';



import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Sidebar />

        <Switch>
          <Route path='/products' exact>
            <Product />
          </Route>
          <Route path='/brand' exact>
            <Brand />
          </Route>
          <Route path='/categorys' exacts>
            <Category />
          </Route>
        </Switch>

      </div >
    </BrowserRouter>
  );
}

export default App;
