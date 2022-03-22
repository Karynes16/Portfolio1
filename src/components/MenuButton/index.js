import React, { useState } from 'react';


function ButtonMessage () {
    const [cart, setCart] = useState(true);

return (
    <div 
    className="ButtonMessage"
    >
      {
        (cart
          ?
          <>
          <button onClick={() =>
          {setCart(false)}}>Add to Cart
          </button>
        
          </>
          :
          alert ('item added to cart')
          )
      }
    </div>
  );
}

export default ButtonMessage;



//Reactjs.org example
// function Example() {
//         const [count, setCount] = useState(0);
    
//         return (
//           <div>
//         <p>You clicked {count} times</p>
//             <button onClick={() => setCount(count + 1)}>
//             Click me
//            </button>
//          </div>
//        );
//      }

//      export default Example;

