import "./productCard.css"

export default function ProductCard() {
  return (
    <div className="productCard">
      <h1>Apple iPad</h1>
      <p>Price: $499.99</p>
      <img className="productImg" src ="https://www.apple.com/assets-www/en_WW/ipad/01_product_tile/medium/ipad_air_a5aaa09ad_2x.jpg" alt="Apple iPad" />
      <button>Add to Cart</button>
    </div>
  )
}