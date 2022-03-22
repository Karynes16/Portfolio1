import logo from './logo.svg';
import './App.css'
import MenuApp from "./components/MenuApp"
import ButtonMessage from "./components/MenuButton"

// [
//   {
//     "menuName": "Dinner",
//     "menuItems": [
//       {
//         "itemId": 1,
//         "itemPrice": "12",
//         "itemName": "Lasagne",
//         "itemDescription": "Meat and cheese layered between house-made pasta with bell peppers and onions."
//       },
//       {
//         "itemId": 2,
//         "itemPrice": "10",
//         "itemName": "Cheese Ravioli",
//         "itemDescription": "Cheese-filled ravioli served with house red sauce."
//       },
//       {
//         "itemId": 3,
//         "itemPrice": "14",
//         "itemName": "Chicken Parmesan",
//         "itemDescription": "Breaded chicken topped with marinara sauce and lots of cheese served over house made spaghetti."
//       }
//     ]
//   },
//   {
//     "menuName": "Dessert",
//     "menuItems": [
//       {
//         "itemId": 45,
//         "itemPrice": "10",
//         "itemName": "Chocolate Lava Cake",
//         "itemDescription": "Dark chocolate molten lava cake. Serves 2-3."
//       },
//       {
//         "itemId": 47,
//         "itemPrice": "8",
//         "itemName": "Tiramisu",
//         "itemDescription": "Layers of espresso-soaked ladyfingers and marscarpone cream topped with cocoa and espresso powder."
//       },
//       {
//         "itemId": 49,
//         "itemPrice": "5",
//         "itemName": "Cannolis",
//         "itemDescription": "Three flaky pastries enclosing a rich, ricotta filling dotted with decadent chocolate chips."
//       },
//       {
//         "itemId": 50,
//         "itemPrice": "5",
//         "itemName": "Cappuccino",
//         "itemDescription": "Steamed milk with two ristretto shots of espresso."
//       }
//     ]
//   }
// ]




function App() {
  //return (
    //<div className="App">
    let menuData = [
      {
     // <Menu
      menuName:"Dinner",
      menuItems: [
      {
        itemId:1,
        itemPrice: "$12",
        itemName: "Lasagne",
        itemDescription: "Meat and Cheese layered between house-made pasta with bell peppers and onions.",
      },
      {
        itemId:2,
        itemPrice: "$10",
        itemName: "Cheese Ravioli",
        itemDescription: "Cheese-filled ravioli served with house red sauce.",
      },
      {
        itemId:3,
        itemPrice: "$14",
        itemName: "Chicken Parmesean",
        itemDescription: "Breaded chicken topped with marinara sauce and lots of cheese served over house made spaghetti.",
      }
    ]
  },
  {
    //></Menu>

     //<Menu
     menuName:"Dessert",
     menuItems: [
       {
         itemId:45,
         itemPrice: "$10",
         itemName: "Chocolate Lava Cake",
         itemDescription: "Dark chocolate molten lava cake. Serves 2-3.",
       },
       {
         itemId:47,
         itemPrice: "$8",
         itemName: "Tiramisu",
         itemDescription: "Layers of espresso-soaked ladyfingers and marscarpone cream topped with cocoa and espresso powder.",
       },
       {
         itemId:49,
         itemPrice: "$5",
         itemName: "Cannolis",
         itemDescription: "Three flaky pastries enclosing a rich, ricotta filling dotted with decadent chocolate chips.",
       },
       {
         itemId:50,
         itemPrice: "$5",
         itemName: "Cappuccino",
         itemDescription: "Steamed milk with two ristretto shots of espresso.",
       }
     ]
    }
     //></Menu>
   // </div>
    ]
    return (
      <div className="App">
        <MenuApp data={menuData}></MenuApp>
      </div>
    )
}


// function buttonMessage() {
//   alert('Item added to shopping cart');
// }

// return (
//   <button onClick={buttonMessage}>
//     click here
//   </button>
// );
// }

// function ButtonMessage () {
//   const [cart, setCart] = useState(true);

//   return (
//     <div 
//     className="ButtonMessage"
//     >
//       {
//         (cart
//           ?
//           <>
//           <button onClick={() =>
//           {setCart(false)}}>Add to Cart
//           </button>
        
//           </>
//           :
//           alert ('item added to cart')
//           )
//       }
//     </div>
//   );
// }
    

export default App;
