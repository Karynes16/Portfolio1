
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