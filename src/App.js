import logo from './logo.svg';
import './App.css'
import MenuApp from "./components/MenuApp"
import MenuButton from "./components/MenuButton"
import ButtonMessage from './components/MenuButton'



function App() {
  //return (
    //<div className="App">
    let menuData = [
      {
     // <Menu
      menuName:"Latin Appetizers",
      menuItems: [
      {
        itemId:1,
        itemPrice: "$12",
        itemName: "Pastelillos",
        itemDescription: "Thin dough turnovers stuffed with your meat of choice.",
      },
      {
        itemId:2,
        itemPrice: "$10",
        itemName: "Morcilla",
        itemDescription: "Authentic Puerto Rican Style Blood Sausage.",
      },
      {
        itemId:3,
        itemPrice: "$14",
        itemName: "Queso Frito",
        itemDescription: "Hand Cut Fried Cheese",
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
    
<MenuButton></MenuButton>

export default App;
