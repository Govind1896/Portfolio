import React from "react";
import './intro.css';
import bg from '../../assets/Govind.png';
import btnImg from '../../assets/placeholder.png';
import {Link} from 'react-scroll';

const Intro = () => {   
    return (
        <section id="intro">
            <div className="introContent">
                <span className="hello">Hello,</span>
                <span className="introText">I'm<span className="introName"> Govind Kakulde</span><br/>website developer </span>
                <p className="introPara">I am a skilled web designer with experience in creating visually appealing and user friendly websites</p>
                <Link><button className="btn"><img src={btnImg} alt="Hire" className="btnImg" />Hire me</button></Link>
            </div>
            <img src={bg} alt="Profile" className="bg" />
        </section>
    )
}

export default Intro;