import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Categories, SortPopup, PizzaBlock } from '../components';

import { setCategory } from '../redux/actions/filters';


const Items = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
const sortItems = [
  {name: 'популярности', type: 'popular'}, 
  {name:'цене', type: 'price'}, 
  {name:'алфавиту', type: 'alphabet'}
];


function Home () {
  const dispatch = useDispatch();
  const {items} = useSelector(({pizzas, filters}) => {
    return {
      items: pizzas.items
    };
  });

  const selectCat = (index) => dispatch(setCategory(index));
 
    return (
        <div className="container">
        <div className="content__top">
         <Categories
            onClickItem={selectCat}
            items={Items} 
          />
          <SortPopup items={sortItems} />
        </div>
        <h2 className="content__title">Все пиццы</h2>
        <div className="content__items">
        
{/*  
        {items.map(obj => (
          <li key={obj.name}>
            {obj.name} {obj.price}
          </li>
        ))}         */}
        
        {items.map(obj => <PizzaBlock key={`${obj.name}_${obj.id}`} {...obj} />)}

        </div>
      </div>
    )
}

export default Home;