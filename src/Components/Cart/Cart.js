import request from "../../request";
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import './cart.css'
const Cart = () => {
    const [data,setData] = useState([])
    useEffect(() => {
        const resp = request('https://fakestoreapi.com/products/categories')
        resp.then((res) => {
            setData(res)
        })
    },[])
    return (
        <div>
            <h1>Carts</h1>
            <div className="cartDetailsWrapper">
                {data?.map((item,index) => (
                <div key={index}>
                    <Link className="link" to={`/cart/${item}`} >{item}</Link>
                </div>
            ))}
            </div>
        </div>
    )
}
export default Cart;