import {useEffect, useState} from "react";
import request from "../../request";
import {useDispatch} from 'react-redux'
import {addToCart} from "../Reducer/CartSlice";
import './Products.css'

const Product = () => {
    const [data,setData] = useState({products:[],titles:[]})
    const [text,setText] = useState('')
    const dispatch = useDispatch()
    useEffect(() => {
        const resp = request('https://fakestoreapi.com/products')
        resp.then((res) => {
            setData((prev) => ({...prev,products:res,productsData:res}))
        })
    },[])

    useEffect(() => {
        if(text.length ===0) {
            let newData = data?.productsData
            setData((prev) => ({
                ...prev,
                products:newData
            }))
        }
    },[text])

    const OnSearchClick = (value) => {
        setText(value)
        const copyData = data.products;
        let newData = copyData.filter((item) => item?.title?.toLowerCase().includes(value.toLowerCase()) || item?.category?.toLowerCase().includes(value.toLowerCase()));
        setData((prevState) => ({...prevState, products:newData}))
    }


    return (
        <div>
            <div className="searchBoxWrapper">
                <h1>Products</h1>
                <input  placeholder="Search" className="inputBox" type="text" onChange={(e) => setTimeout(() => {OnSearchClick(e.target.value)},300)}/>
            </div>
            {data?.products?.length ? <>{ data?.products.map((item,index) => (
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
            ))} </> :  <div className="loading"></div> }
        </div>
    )
}
export default Product