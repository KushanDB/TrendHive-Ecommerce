import "./productCard.css"

export default function ProductCard(props) {  // props is like an object that holds all the attributes passed to the component
  return (
    <div className="productCard">
      <h1>{props.name}</h1> {/* Accessing the 'name' attribute from props */}
      <p>Price: {props.price}</p>
      <img className="productImg" src ={props.image}/>
      <button>Add to Cart</button>
    </div>
  )
} 