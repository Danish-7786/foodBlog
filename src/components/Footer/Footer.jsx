import React from 'react'
import "./Footer.css"
import foodTruck from "../../assets/foodTruck.png"
import instagram from "../../assets/instagram.png"
import fb from "../../assets/facebook.png"
import twitter from "../../assets/twitter.png"
const Footer = () => {
  return (
    <div id='Footer'>
        <div className="food-truck">
<img src={foodTruck} alt="" />

        </div>
        <div className="contact-us">
            <h3>Contact Us</h3>
            <p>Lorem Ipsum Pvt Ltd.5/1, Magalton Road, Phartosh Gate near YTM Market, XYZ-343434</p>
            <p className="email">example2020@gmail.com</p>

        </div>
        <div className="more">
            <h3>More</h3>
            <p>About Us</p>
            <p>Products</p>
            <p>Career</p>
            <p>Contact Us</p>

        </div>
        <div className="social-links">
            <h3>Social links</h3>
            <div className="social-handles">

            <img src={instagram} alt="" />
            <img src={fb} alt="" />
            <img src={twitter} alt="" />
            </div>
            <p>© 2022 Food Truck Example</p>
        </div>
    </div>
  )
}

export default Footer