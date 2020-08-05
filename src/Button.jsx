import React from 'react';
import classNames from 'classnames';


// class Button extends React.Component {
//     render () {
//         //return <button className={`button ${this.props.outline ? 'button--outline' : ''}`}>
//         //{this.props.text}</button>
//         return <button className={classNames('button', {
//             'button--outline': this.props.outline
//         })}>
//         {this.props.text}</button>
//     }
// }



function Button (props) {
    return (
        <button 
            onClick={props.onClick}
            className={classNames('button', {
            'button--outline': props.outline
        })}>
            {props.text}
        </button>
    );
}




export default Button;