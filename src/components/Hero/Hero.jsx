import './Hero.css';
import CountUp from "react-countup";

const Hero =() => {
    return (
        <section className="hero-wrapper">
           <div className="paddings innerWidth flexCenter hero-container">
               {/* left side */}
               <div className="flexColStart hero-left">
                   <div className="hero-title">
                       <div className="orange-circle"/>
                       <h1>
                           Discover <br/>
                           The beauty of<br/> North-East <br/> India
                       </h1>
                   </div>

                   <div className="flexColStart hero-des">
                       <span className="secondaryText">Discover the captivating allure of North-East</span>
                       <span className="secondaryText">India, where breathtaking landscapes meet vibrant cultures,</span>
                       <span className="secondaryText">unveiling the true essense of natural beauty.</span>
                   </div>

                   {/* <div className="flexCenter search-bar">
                       <HiLocationMarker color="var(--blue)" size={25}/>
                       <input className="text"/>
                       <button className="button">Search</button>
                   </div> */}

                   <div className="flexCenter stats">
                       <div className="flexColCenter stat">
                           <span>
                               <CountUp start={0} end ={8} duration={4}/>
                               <span></span>
                           </span>
                           <span className="secondaryText">States</span>
                       </div>
                       
                       <div className="flexColCenter stat">
                           <span>
                               <CountUp start={0} end ={200} duration={4}/>
                               <span>+</span>
                           </span>
                           <span className="secondaryText">Languages</span>
                       </div>
                       <div className="flexColCenter stat">
                           <span>
                               <CountUp start={15000} end ={25000} duration={4}/>
                               <span>+</span>
                           </span>
                           <span className="secondaryText">Rich Biodiversity</span>
                       </div>  
                   </div>   
               </div>
                {/* right side */}
               <div className="flexCenter hero-right">
                   <div className="image-container">
                       <img src="./hero-image.jpg" alt=" "/>
                   </div>
               </div>
            
            </div> 

        </section>
    )
}

export default Hero