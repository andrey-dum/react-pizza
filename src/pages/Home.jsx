import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Categories, SortPopup, PizzaBlock, PizzaLoadingBlock } from '../components';


import { setCategory, setSortBy  } from '../redux/actions/filters';
import { fetchPizzas } from '../redux/actions/pizzas';

const Items = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
const sortItems = [
  {name: 'популярности', type: 'popular'}, 
  {name:'цене', type: 'price'}, 
  {name:'алфавиту', type: 'name'}
];


function Home () {
  const dispatch = useDispatch();
  const {items} = useSelector(({pizzas, filters}) => {
    return {
      items: pizzas.items
    };
  });
  const isLoaded = useSelector(({pizzas}) => pizzas.isLoaded);
  const {category, sortBy} = useSelector(({filters}) => filters);


  React.useEffect(() => {
    dispatch(fetchPizzas(category, sortBy));
  }, [category, sortBy]);

  const onSelectCategory = (index) => dispatch(setCategory(index));

  const onSelectSortType = React.useCallback((type) => {
    dispatch(setSortBy(type));
  }, []);
 
    return (
        <div className="container">
        <div className="content__top">
         <Categories
            activeCategory={category}
            onClickCategory={onSelectCategory}
            items={Items} 
          />
          <SortPopup activeSortType={sortBy} items={sortItems} onClickSortType={onSelectSortType}/>
        </div>
        <h2 className="content__title">Все пиццы</h2>
        <div className="content__items">
        
{/*  
        {items.map(obj => (
          <li key={obj.name}>
            {obj.name} {obj.price}
          </li>
        ))}         */}
        
        {isLoaded 
          ? items.map((obj) => <PizzaBlock key={`${obj.name}_${obj.id}`} {...obj} />) 
          : Array(12)
            .fill(0)
            .map((_, index) => <PizzaLoadingBlock key={index} />)}

        </div>
      </div>
    )
}

export default Home;