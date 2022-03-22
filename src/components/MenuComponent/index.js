function ButtonColor() {
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

 export default ButtonColor;