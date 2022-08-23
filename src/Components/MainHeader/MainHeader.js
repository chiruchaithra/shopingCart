import React from "react";
import './MainHeader.css'
import {NavLink} from "react-router-dom";

const MainHeader = () => {
    return(
        <div className="MainHeaderWrapper">
            <div className="linkWrapper" ><NavLink className={(navdata) => navdata.isActive ? 'active' : 'notActive'} to='/home'>Home</NavLink></div>
            <div className="linkWrapper"><NavLink className={(navdata) => navdata.isActive ? 'active' : 'notActive'} to='/cart'>Carts</NavLink></div>
            <div className="linkWrapper"><NavLink className={(navdata) => navdata.isActive ? 'active' : 'notActive'} to='/products'>Products</NavLink></div>
            <div className="linkWrapper"><NavLink className={(navdata) => navdata.isActive ? 'active' : 'notActive'} to='/myProfile'>My Profile</NavLink></div>
        </div>
    )
}
export default  MainHeader