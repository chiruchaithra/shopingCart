import {useEffect, useState} from "react";
import request from "../../request";
import {useParams} from "react-router-dom";
import {useDispatch} from 'react-redux'
import '../Prodcuts/Products.css'
import {addToCart} from "../Reducer/CartSlice";
const CartDetails = () => {
    const dispatch = useDispatch()
    const params=useParams()
    const [cardDetail, setCartDetail] = useState([])
    useEffect(() => {
            const resp = request(`https://fakestoreapi.com/products/category/${params.cartId}`)
            resp.then((data) => {setCartDetail(data)})
    },[])
    return (
        <div>
            <h1 className="heading">Cart Details</h1>
            {cardDetail.length ? <>
                {cardDetail.map((item,index) => (
                    <div key={index} className="productsWrapper">
                        <div className="productDetails">
                            <img className="image" alt='Image' src={item.image} />
                            <div className="itemsWrapper">
                                <div>Category - {item.category}</div>
                                <div>Price - {item.price}</div>
                                <div>{item.title}</div>
                                <button className='button' onClick={() =>{dispatch(addToCart())}}>Add to Cart</button>
                            </div>
                        </div>

                    </div>
                ))} :</> : <div className="loading"></div>}

        </div>
    )
}
export default CartDetails