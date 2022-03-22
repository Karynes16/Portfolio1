import React, { useState } from 'react';


// function ButtonMessage () {
//     const [cart, setCart] = useState(true);

// return (
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

// export default ButtonMessage;



//Reactjs.org example
function ButtonMessage() {
        const [count, setCount] = useState(0);
    
        return (
          <div>
        <p>You added this to your cart {count} times</p>
            <button onClick={() => setCount(count + 1)}>
            Add to Cart
           </button>
         </div>
       );
     }

     export default ButtonMessage;

