import {Swiper,SwiperSlide, useSwiper} from 'swiper/react';
import "swiper/css";
import './NEStates.css';
import data from '../../utils/slider.json';
import { sliderSettings } from '../../utils/common';

//function of modal 
const NEStates = () =>{
    return (
        <section className="r-wrapper">
            <div id="states" className="paddings innerWidth r-container">
                <div className="r-head flexColStart">
                    <span className="orangeText" style={{ fontSize: "2.2rem" }}>The eight states</span>
                    <span className="primaryText" style={{ fontSize: "1.4rem" }}>of North-east India</span>
                </div>
                <Swiper {...sliderSettings}>
                    <SliderButtons/>
                {data.map((card, i) => (
                        <SwiperSlide key={i}> 
                            <div className="flexColStart r-card">
                                <img src={card.image} className="card-image" alt="home"/>

                                <span className="primaryText" style={{color: "orange"}}>{card.name}</span>
                                <span className="secondaryText justifyAlignment" style={{color: "#1f3e72"}}>{card.detail}</span>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
            </div>
        </section>
    );
}
export default NEStates

const SliderButtons = () => {
    const swiper = useSwiper();
    return(
        <div className="r-buttons">
            <button onClick={() => swiper.slidePrev()}>&lt;</button>
            <button onClick={() => swiper.slideNext()}>&gt;</button>
        </div>
    )
}