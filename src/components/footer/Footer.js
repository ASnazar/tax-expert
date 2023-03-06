import React, {useState} from 'react';
import style from './Footer.module.css';
import {RiFacebookCircleLine,RiLinkedinBoxLine} from "react-icons/ri";
import {RxInstagramLogo} from "react-icons/rx";
import {AiFillTwitterCircle} from "react-icons/ai";
import {MdAlternateEmail} from "react-icons/md";

const Footer = () =>{
    return (
        <div className={style.footer}>
            <div className={style.logoSocialNet}>
                <a href='##'><RiFacebookCircleLine size={25}/></a>
                <a href='##'><RxInstagramLogo size={25}/></a>
                <a href='##'><AiFillTwitterCircle size={25}/></a>
                <a href='##'><MdAlternateEmail size={25}/></a>
                <a href='##'><RiLinkedinBoxLine size={25}/></a>
            </div>
        </div>
    );
};

export default Footer;