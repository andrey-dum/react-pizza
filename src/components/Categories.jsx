import React from 'react'


const Categories = React.memo(({items, onClickItem}) => {
    // const [state, setstate] = useState(initialState);
    const [activeItem, setActiveItem] = React.useState(null);
 
    const onSelectItem = (index) => {
     setActiveItem(index);
     onClickItem(index);
    }
 
     return (
         <div className="categories">
             <ul>
             <li 
                 className={activeItem === null ? 'active' : ''}  
                 onClick={() => onSelectItem(null)}>Все</li>
             {items &&
                  items.map((item, index) => (
                 <li 
                     className={activeItem === index ? 'active' : ''} 
                     onClick={() => onSelectItem(index) } key={`${item}_${index}`}>
                     {item}
                 </li>
             ))}
             </ul>
       </div>
     )
 });

// class Categories extends React.Component {
//     state = {
//         activeItem: null,

//     };

//     onSelectItem = (index) => {
//         this.setState({
//             activeItem: index
//         });
//     }

//     render() {
//         const {items, onClickItem} = this.props;
//         return (
//             <div className="categories">
//                 <ul>
//                 <li>Все</li>
//                 {items.map((item, index) => (
//                     <li className={this.state.activeItem === index ? 'active' : ''} 
//                     onClick={() => this.onSelectItem(index) } key={`${item}_${index}`}>
//                         {item}
//                     </li>
//                 ))}
//                 </ul>
//           </div>
//         )
//     }
// }

export default Categories;