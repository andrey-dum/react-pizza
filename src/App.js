import React from 'react';
import axios from 'axios';
import {Route} from 'react-router-dom';
import {connect} from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';


import { Header } from './components';
import {Home, Cart} from './pages';
import { setPizzas } from './redux/actions/pizzas';



function App() {
  const dispatch = useDispatch();
  
  React.useEffect(() => {
      axios.get('http://localhost:3001/pizzas')
        .then(({data}) => {
          // dispatch(setPizzas(data.pizzas));
          dispatch(setPizzas(data));

      })
      
  }, []);

  
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

// function App() {
//   //const [isLoaded, setIsLoaded] = React.useState(false);
//   //const [error, setError] = React.useState(null);
//   const [items, setItems] = React.useState([]);

//   React.useEffect(() => {
//     // fetch('http://localhost:3000/db.json')
//     //   .then(res => res.json())
//     //   .then(
//     //     (result) => {
//     //       setIsLoaded(true);
//     //       setItems(result.pizzas);
//     //     },
//     //     (error) => {
//     //       setError(error);
//     //     }
//     //   ) 
//       axios.get('http://localhost:3000/db.json')
//         .then(({data}) => {
//           setItems(data.pizzas);
//       })
      
//   }, []);

  
//   return (
//     <div className="wrapper">
//       <Header/>
//       <div className="content">
//         <Route exact path='/' render={() => <Home items={items} />} />
//         <Route exact path='/cart' component={Cart} />
//       </div>
//     </div>
//   );
// }




// class App extends React.Component {

//   componentDidMount() {
//     axios.get('http://localhost:3000/db.json')
//         .then(({data}) => {
//           this.props.savePizzas(data.pizzas);
//       })
//   }

//   render() {
//     return (
//       <div className="wrapper">
//       <Header/>
//       <div className="content">
//         <Route exact path='/' render={() => <Home items={this.props.items} />} />
//         <Route exact path='/cart' component={Cart} />
//       </div>
//     </div>
//     );
//   }
// }

// const mapStateToProps = (state) => {
//   return {
//     items: state.pizzas.items
//   }
// }
// const mapDispatchToProps = (dispatch) => {
//   return {
//     // {-setPizzas-},
//     savePizzas: (items) => dispatch(setPizzasAction(items))
//   };
// }
// export default connect(mapStateToProps, mapDispatchToProps)(App);
