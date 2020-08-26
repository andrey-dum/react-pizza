import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import Button from '../Button';
// import { PizzaLoadingBlock } from './components';



function PizzaBlock ({id, name, price, imageUrl, types, sizes, onClickAddPizza, addedCount}) {
    const avaliableTypes = ['тонкая', 'традиционная'];
    const avaliableSizes = [26, 30, 40];
    const [activeType, setActiveType] = React.useState(types[0]);
    const [activeSize, setActiveSize] = React.useState(0);

    const onSelectType = (index) => {
        setActiveType(index);
    }   
    const onSelectSize = (index) => {
        setActiveSize(index);
    }

    const handleAddPizza = () => {
        const obj = {
            id, 
            name, 
            price, 
            imageUrl,
            size: avaliableSizes[activeSize],
            type: avaliableTypes[activeType]

        }
        onClickAddPizza(obj)
    }
    
    return (
        <div className="pizza-block">
           
            <img
            className="pizza-block__image"
            src={imageUrl}
            alt="Pizza"
            />
            <h4 className="pizza-block__title">{name}</h4>
            <div className="pizza-block__selector">
            <ul>
                {avaliableTypes.map((type, index) => (
                    <li
                        key={type}
                        onClick={()=>onSelectType(index)}
                        className={classNames({
                            active: activeType === index,
                            disabled: !types.includes(index)
                        })}
                        >
                        {type}</li>
                    )
                )}
               
            </ul>
            <ul>
            {avaliableSizes.map((size, index) => (
                    <li
                        key={size}
                        onClick={()=>onSelectSize(index)}
                        className={classNames({
                            active: activeSize === index,
                            disabled: !sizes.includes(size)
                        })}
                        >
                        {size} см.</li>
                    )
                )}
            </ul>
            </div>
            <div className="pizza-block__bottom">
            <div className="pizza-block__price">от {price} ₽</div>
         
            <Button handleAddPizza={handleAddPizza} addedCount={addedCount} сlassName="button--outline button--add" />
            
            </div>
            </div> 
    )
}


PizzaBlock.propTypes = {
   name: PropTypes.string.isRequired,
   price: PropTypes.number.isRequired,
   imageUrl: PropTypes.string.isRequired,
   types: PropTypes.arrayOf(PropTypes.number).isRequired,
   sizes: PropTypes.arrayOf(PropTypes.number).isRequired,
   onClickAddPizza: PropTypes.func,
   addedCount: PropTypes.number
};

PizzaBlock.defaultProps = {
    types: [],
    sizes: [],
}

export default PizzaBlock;