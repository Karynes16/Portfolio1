// import React from 'react';

// export default class MenuApp extends React.Component {
//     render() {
//         console.log(this.props.data)
//         return "To be implemented"
//     }
// }

import MenuItem from '../MenuItem'
import Menu from "../Menu"
import React from "react"

function MenuApp(props ){

    //hard coding commented out and fixed below
//     let menuItem = {
//         'itemId':1,
//         'itemPrice': "$12",
//         'itemName': "Lasagne",
//         'itemDescription': "Meat and Cheese layered between house-made pasta with bell peppers and onions."
//     }
//     return (
//         <div className="App">
//             <MenuItem {...menuItem}></MenuItem>
//         </div>
//     )
// }

let menuElements = props.data.map((mi) => <Menu {...mi}></Menu>)
return (
        <div className="App">
        {menuElements}
        </div>
     )
}

export default MenuApp

