import axios from 'axios';

export const setLoaded = (val) => ({
    type: 'SET_LOADED',
    payload: val,
});


export const fetchPizzas = (category, sortBy) => (dispatch) => {
    dispatch(setLoaded(false));

    axios.get(`http://localhost:3001/pizzas?${category !== null ? `category=${category}` : ''}&_sort=${sortBy}&_order=desc`).then(({data}) => {
          dispatch(setPizzas(data));
      })

    //   if (category === null) {
    //     axios.get(`http://localhost:3001/pizzas?_sort=${sortBy}&_order=desc`).then(({data}) => {
    //         dispatch(setPizzas(data));
    //     })
    //   }
};

export const setPizzas = (items) => ({
    type: 'SET_PIZZAS',
    payload: items,
});

