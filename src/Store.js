import {configureStore} from "@reduxjs/toolkit";
import CartSlice from "./Components/Reducer/CartSlice";

const Store = configureStore({
    reducer : {
        counter:  CartSlice
    }
})

export default Store