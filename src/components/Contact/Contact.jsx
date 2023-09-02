import './Contact.css';
import {MdCall} from 'react-icons/md';
import {BsFillChatDotsFill} from 'react-icons/bs';
const Contact = () =>{
    const phoneNumber = "9365514936"; // Replace with the desired phone number

    const handleCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const handleChat = () => {
    const message = "Hello, I'd like to chat with you."; // Replace with the desired pre-filled message
    window.location.href = `sms:${phoneNumber}&body=${encodeURIComponent(message)}`;
  };
    return (
        <section className="c-wrapper">
            <div id="contact" className="paddings innerWidth flexCenter c-container">
                {/*left side*/}
                <div className="flexColStart c-left">
                    <span className="orangeText" style={{ fontSize: "2.2rem" }}>How do we</span>
                    <span className="primaryText"style={{ fontSize: "1.4rem" }}>Contact / Locate</span>
                    <div className="flexColStart contactModes">
                    <img src="map.jpg" alt="map" className="map-image"/>
                        {/*first row*/}
                        <div className="flexStart row">
                            <div className="flexColCenter mode">
                                <div className="flexStart">
                                    <div className="flexCenter icon">
                                        <MdCall size={25}/>
                                    </div>
                                    <div className="flexColStart detail">
                                        <span className="primaryText">Call</span>
                                        {/* <span className="secondaryText" style={{color: "#1f3e72"}}>9365514936</span> */}
                                    </div>
                                </div>
                                <div className="flexCenter button" onClick={handleCall}>Call us</div>
                            </div>

                            <div className="flexColCenter mode">
                                <div className="flexStart">
                                    <div className="flexCenter icon">
                                        <BsFillChatDotsFill size={25}/>
                                    </div>
                                    <div className="flexColStart detail">
                                        <span className="primaryText">Chat</span>
                                        {/* <span className="secondaryText" style={{color: "#1f3e72"}}>9365514936</span> */}
                                    </div>
                                </div>
                                <div className="flexCenter button" onClick={handleChat}>Chat with us</div>
                            </div>
                        </div>

                        
                    </div>
                </div>

                {/*right side*/}
                <div className="c-right">
                    <div className="image-container">
                        <img src="./collage 2.jpg" alt= "collage"/> 
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact