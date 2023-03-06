
import React from "react";
import style from "./AboutUs.module.css"
import Logo_Us from '../../asserts/logo_2.png'
import Logo_2 from '../../asserts/logo_2.png'
import Arrow from "../arrowUp/arrow";
const AboutUs = () =>{

    return (
        <div className={style.box} >
            <div className={style.boxWelcomeWithImg}>
            <div className={style.boxWelcome}>
                <h1 className={style.h11}>Welcome to Workers</h1>
            <p className={style.p11}>If you need people for work than you are in right place If you need people for work than you are in right place If you need people for work than you are in right place</p>
                <a href="#" className={style.btn}>Зворотній зв'язок</a>
            </div>
                {/*<img src={Logo_2}/>*/}
            </div>


            <div className={style.info}>
                <Arrow/>
            </div>

        </div>
    );
};

export default AboutUs;