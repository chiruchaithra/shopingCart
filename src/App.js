import './App.css';
import MainHeader from "./Components/MainHeader/MainHeader";
import {Route,Routes} from "react-router-dom";
import Cart from "./Components/Cart/Cart";
import Home from "./Components/Home/Home";
import MyProfile from "./Components/MyProfile/MyProfile";
import CartDetails from "./Components/CartDetails/CartDetails";
import Product from "./Components/Prodcuts/Product";
import Selector from "./Selector";
import {connect} from "react-redux";
import cartImg from './Images/cart.webp'

function App(props) {
  const {count} = props
  return (
    <div className="App">
    <MainHeader />
        <div className="cartImageWrapper">
            <img className="cartImage" src={cartImg} alt="img" />
            <p className="counter">{count}</p>
        </div>

        <div className="RoutesWrapper">
        <Routes>
        <Route path='/home' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/cart/:cartId' element={<CartDetails/>}/>
          <Route path='/myProfile' element={<MyProfile />}/>
          <Route path='/products' element={<Product />}/>
        </Routes>
        </div>
    </div>
  );
}

export default connect(Selector)(App);
