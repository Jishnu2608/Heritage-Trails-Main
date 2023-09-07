
import './Card.css';
import {Swiper,SwiperSlide, useSwiper} from 'swiper/react';
import "swiper/css";
import data from '../../utils/contentDescription.json';
import { sliderSettings } from '../../utils/common';
const Card = () =>{
    return (
        <section className="r-wrapper">
            <div className="paddings innerWidth r-container">
                <div className="r-head flexColStart">
                    <span className="orangeText" style={{ fontSize: "2.2rem" }}>Exploration of</span>
                    <span className="primaryText" style={{ fontSize: "1.4rem" }}>our North-Eastern Heritage</span>
                </div>
                <Swiper {...sliderSettings}>
                <SliderButtons/>
                {data.map((card, i) => (
                        <SwiperSlide key={i}> 
                            <a href={card.link} className="card-link" target="_blank" rel="noopener noreferrer">
                                <div className="flexColStart r-card zoom-wrapper">
                                    
                                    <img src={card.image} className="card-image" alt="cultural heritage"/>
                                    <span className="primaryText" style={{color: "orange"}}>{card.name}</span>
                                    <span className="secondaryText justifyAlignment" style={{color: "#1f3e72"}}>{card.detail}</span>                                  
                                </div>
                            </a>
                        </SwiperSlide>
                    ))
                }
                </Swiper>
            </div>
        </section>
    );
}
export default Card

const SliderButtons = () => {
    const swiper = useSwiper();
    return(
        <div className="r-buttons">
            <button onClick={() => swiper.slidePrev()}>&lt;</button>
            <button onClick={() => swiper.slideNext()}>&gt;</button>
        </div>
    )
}