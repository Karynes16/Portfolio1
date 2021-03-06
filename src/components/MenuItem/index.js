import React from 'react'
import ButtonMessage from '../MenuButton'
import ButtonAdd from '../MenuComponent'

export default class MenuItem extends React.Component {
render() {
    return (
        <div class="menu-item" id={`menu-item-${this.props.itemId}`}>
            <p>{this.props.itemPrice}</p>
            <h2>{this.props.itemName}</h2>
            <p>{this.props.itemDescription}</p>
            <ButtonMessage></ButtonMessage>
            <ButtonAdd></ButtonAdd>
            {/* <button>Add to Cart</button> */}
            

            

            </div>
        )
    }

}


  
    