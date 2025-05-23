// Write your JS code here
import Header from '../Header'
import './index.css'

const Products = () => (
  <>
    <Header />
    <div className="products-container">
      <h1>Products Page</h1>
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-img.png"
        alt="products"
        className="products-img"
      />
    </div>
  </>
)

export default Products
