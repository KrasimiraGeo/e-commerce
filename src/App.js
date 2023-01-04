import './App.css';
import { Route } from 'react-router-dom'
import { Switch } from 'react-router-dom';

import { useContext } from 'react';
import { Fragment } from 'react';

import { LandingPage } from './pages/LandingPage'
import { ShopPage } from './pages//Shop/ShopPage'
import { Upload } from './pages/Admin/Upload'
import { LoginForm } from './components/LoginForm/LoginForm';
import { Cart } from './components/Cart/Cart';
import { AuthContext } from '../src/store/auth-context'


function App() {

  const authCtx = useContext(AuthContext)
//  console.log(authCtx);

  return (
    <Fragment>
      <Route path='/' exact>
        <LandingPage />
      </Route>
      <Switch>
        <Route path='/shop'>
          <ShopPage />
        </Route>
        {authCtx.isLoggedIn && <Route path='account'>
          <LoginForm />
        </Route>}
        <Route path='cart'>
          <Cart />
        </Route>
        {authCtx.isAdmin && <Route path='/upload'>
          <Upload />
        </Route>}
      </Switch>
    </Fragment>
  );
}

export default App;
