import React from 'react';
import './Footer.css';
import { Link } from 'react-scroll';

const Footer = () => {
    return (
    <section className="f-wrapper">
        <div className="paddings innerWidth flexCenter f-container">
            
            {/*left side*/}

            <div className="flexColStart f-left">
                <img src="./logo2.png" alt="logo" width={300}/>
                <span className="secondaryText" style={{color: "#1f3e72"} }>
                Embark on a captivating expedition through Heritage Trails - North-East India, <br/>
                delving into the untold stories and remarkable heritage of the enchanting seven sisters.
                </span>
            </div>

            <div className="flexColStart f-right">
                <span className="primaryText">Information</span>
                <span className="secondaryText" style={{color: "#1f3e72"} }>Tezpur 784001, Assam</span>

                <div className="flexCenter f-menu">
                <Link to="states" smooth={true} duration={500}>
                States
                </Link>
                <Link to="explore" smooth={true} duration={500}>
                Explore
                </Link>
                
                <Link to="faqs" smooth={true} duration={500}>
                FAQs
                </Link>
                <Link to="getstarted" smooth={true} duration={500}>
                Get Started
                </Link>
                </div>
            </div>
        </div>
    </section>
    );
}

export default Footer