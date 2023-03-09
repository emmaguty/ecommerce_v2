import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Sidebar from './components/Sidebar';
import { Product } from './components/Product';
import {Brand}  from './components/Brand';
import {Category} from './components/Category';

import ProductList from './components/ProductList';
import BrandList from './components/BrandList';
import CategoryList from './components/CategoryList';



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
          <Route path='/products-list' exact>
            <ProductList />
          </Route>
          <Route path='/brand' exact>
            <Brand />
          </Route>
          <Route path='/brand-list' exact>
            <BrandList />
          </Route>
          <Route path='/categorys' exacts>
            <Category />
          </Route>
          <Route path='/categorys-list' exacts>
            <CategoryList />
          </Route>
        </Switch>

      </div >
    </BrowserRouter>
  );
}

export default App;
