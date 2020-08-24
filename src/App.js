import React from 'react';
// import axios from 'axios';
import {Route} from 'react-router-dom';
//import {connect} from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';


import { Header } from './components';
import {Home, Cart} from './pages';
import { fetchPizzas } from './redux/actions/pizzas';



function App() {
  const dispatch = useDispatch();
  
  // React.useEffect(() => {
  //   dispatch(fetchPizzas());
  // }, []);

  
  return (
    <div className="wrapper">
      <Header/>
      <div className="content">
        
        <Route exact path='/' component={Home} />
        <Route exact path='/cart' component={Cart} />
      </div>
    </div>
  );
}


export default App;

