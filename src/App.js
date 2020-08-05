import React, {useState} from 'react';
import {Route} from 'react-router-dom';
import { Header } from './components';
import {Home, Cart} from './pages';


function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);
  const [items, setItems] = useState([]);

  React.useEffect(() => {
    fetch('http://localhost:3000/db.json')
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result.pizzas);
        },
        (error) => {
          setError(error);
        }
      ) 
  }, []);

  
  return (
    <div className="wrapper">
      <Header/>
      <div className="content">
        <Route exact path='/' render={() => <Home items={items} />} />
        <Route exact path='/cart' component={Cart} />
      </div>
    </div>
  );
}

export default App;
