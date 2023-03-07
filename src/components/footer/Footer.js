import React, {useState} from 'react';
import style from './Footer.module.css';
import {RiFacebookCircleLine,RiLinkedinBoxLine} from "react-icons/ri";
import {RxInstagramLogo} from "react-icons/rx";
import {AiFillTwitterCircle} from "react-icons/ai";
import {MdAlternateEmail} from "react-icons/md";


const location = {
    address: '1600 Amphitheatre Parkway, Mountain View, california.',
    lat: 37.42216,
    lng: -122.08427,
}
const Footer = () =>{
    return (
        <div className={style.footer}>
            <hr/>
            <div className={style.logoSocialNet}>
                <a href='##'><RiFacebookCircleLine size={25}/></a>
                <a href='##'><RxInstagramLogo size={25}/></a>
                <a href='##'><AiFillTwitterCircle size={25}/></a>
                <a href='##'><MdAlternateEmail size={25}/></a>
                <a href='##'><RiLinkedinBoxLine size={25}/></a>
            </div>
            <div className={style.footerContAndMAp}>
            <div className={style.footerCont}>
                <h1><a href="#">Наші контакти</a></h1>
                <p><a href="#">вул. Новозабарська, 2/6  04074 м. Київ</a> </p>
                <p><a href="#">+38097755234</a> </p>
                <p><a href="#">nazarbalko2@gmail.com</a> </p>

            </div>
            <div className={style.map}><iframe width="100%" height="150px" src="https://maps.google.com/maps?width=720&amp;height=400&amp;hl=en&amp;q=%D0%9D%D0%B0%D1%86%D1%96%D0%BE%D0%BD%D0%B0%D0%BB%D1%8C%D0%BD%D0%B8%D0%B9%20%D0%BB%D1%96%D1%81%D0%BE%D1%82%D0%B5%D1%85%D0%BD%D1%96%D1%87%D0%BD%D0%B8%D0%B9%20%D1%83%D0%BD%D1%96%D0%B2%D0%B5%D1%80%D1%81%D0%B8%D1%82%D0%B5%D1%82,%20university,%20Lviv,%20Ukraine+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                <a href="https://www.maps.ie/distance-area-calculator.html">area maps</a></iframe></div>
            </div>
            <div className={style.footerYear}>
                <p>2023</p>
            <div className={style.footerMenu}>
                <p><a href="#">Головна</a></p>
                <p><a href="#">Про нас</a></p>
                <p><a href="#">Контакти</a></p>
                <p><a href="#">Новини</a></p>
            </div>
            </div>

        </div>
    );
};

export default Footer;