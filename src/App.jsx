
import './App.css'
import { Routes, Route } from 'react-router'
import Home from './pages/home.jsx'
import About from './pages/about.jsx'
import Cart from './pages/cart.jsx'
import Contacts from './pages/contacts.jsx'
import Payment from './pages/payment.jsx'
import Products from './pages/products.jsx'
import Shop from './pages/shop.jsx'
import {Link} from 'react-router-dom'

function App() {

  return (
    <>
      <nav className="navbar">
      <h2 className="logo">ShopX</h2>

      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/shop">Shop</Link></li>
        <li><Link to="/cart">Cart</Link></li>
        <li><Link to="/contacts">Contacts</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
    </nav>
    
      <Routes>
        <Route path='/' element= { <Home/> }></Route>
        <Route path='/about' element= { <About/> }></Route>
        <Route path='/cart' element= { <Cart/> }></Route>
        <Route path='/contacts' element= { <Contacts/> }></Route>
        <Route path='/payment' element= { <Payment/> }></Route>
        <Route path='/products' element= { <Products/> }></Route>
        <Route path='/shop' element= { <Shop/> }></Route>
      </Routes>
    </>
  )
}

export default App