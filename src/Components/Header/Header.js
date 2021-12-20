import React from 'react';
// import { Container, Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import img from "../../images/logo.png"
import "./Header.css";

const Header = () => {
    const style = { textDecoration: "none", color: "tomato", marginLeft: "10px", fontSize: "20px" };
    return (
        <div className='navigation'>
            <div>
                <NavLink to="/home"> <img className='img' src={img} alt="" /> </NavLink>
            </div>
            <div>
                <NavLink style={style} to="/home">Home </NavLink>
                <NavLink style={style} to="/products">Products</NavLink>
                <NavLink style={style} to="/upcommings">Upcomming</NavLink>
                <NavLink style={style} to="/about">About</NavLink>

            </div>

        </div>
    );
};

export default Header;