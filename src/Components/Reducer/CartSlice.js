import {createSlice} from "@reduxjs/toolkit";
const CartSlice = createSlice({
    name:'cartSlice',
    initialState:{
        count:0
    },
    reducers: {
        addToCart:(state)=>{
            state.count++
        }
    }
})

export  const {addToCart} =  CartSlice.actions;
export default CartSlice.reducer