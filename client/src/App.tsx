import React, { useEffect } from 'react';
// components
import Header from './components/Header';
import SideBar from './components/SideBar';
import Login from './components/Login';
// components
import { ContentStyled, GlobalStyles, Wrapper } from './styles';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
//pages
import Home from './pages/Home';
import Cart from './pages/Cart';
import Products from './pages/Products';
//pages
import ProductPage from './components/ProductPage';
import Register from './components/Register';
import { useDispatch } from 'react-redux';
import { checkToken } from './redux/actions/auth';
import Profile from './pages/Profile';


function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkToken())
  }, [])

  return (
    <BrowserRouter>
      <Header />
      <Wrapper>
        <SideBar />
        <ContentStyled>
          <Switch>
            <Route path='/login' render={() => <Login />} />
            <Route path='/register' render={() => <Register />} />
            <Route path='/products/:id' render={() => <ProductPage />} />
            <Route path='/products' render={() => <Products />} />
            <Route exact path='/' render={() => <Home />} />
            <Route path='/cart' render={() => <Cart />} />
            <Route path='/profile' render={() => <Profile />} />
          </Switch>
        </ContentStyled>
      </Wrapper>
      <GlobalStyles />
    </BrowserRouter>
  );
}

export default App;
