import {useState} from 'react';
import './Header.css';
import {BiMenuAltRight} from 'react-icons/bi';
import OutsideClickHandler from "react-outside-click-handler";
import { Link } from 'react-scroll';

const Header = () => {
    const [menuOpened, setMenuOpened] = useState(false)
    const getMenuStyles = (menuOpened) => {
        if(document.documentElement.clientWidth <=800){
            return {right: !menuOpened && "-100%"}
        }
    }
    return (
        <section className="h-wrapper">
            <div className="flexCenter paddings innerWidth h-container">
            <a href="/">
            <img style={{cursor:"pointer"}} src="./logo.png" alt="logo" width={250}/></a>
            <OutsideClickHandler
            onOutsideClick={() =>{
                setMenuOpened(false)
            }}>
            <div className="flexCenter h-menu"
            style={getMenuStyles(menuOpened)}
            >
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
                <button className="button">
                <Link to="contact" smooth={true} duration={500}>
                Contact
                </Link>
                </button>
            </div>
            </OutsideClickHandler> 
            <div className="menu-icon" onClick= {() => setMenuOpened((prev)=>!prev)}>
                <BiMenuAltRight size={30}/>
                </div>
            </div>  
        </section>
    );
};

export default Header