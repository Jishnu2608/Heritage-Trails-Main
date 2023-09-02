
import './GetStarted.css';

const GetStarted = () => {
    return (

        <section className="g-wrapper">
            <div id="getstarted" className="paddings innerWidth g-container">
                <div className="flexColCenter inner-container">
                <span className="primaryText" style={{ color: "white" }}>Get Started with Heritage Trails</span>

                <span className="secondaryText">
                <div style={{ textAlign: "center" }}>
                    At Heritage Trails, we passionately uncover and preserve the rich cultural heritage of North-East India. Our curated trails invite you to explore hidden gems, ancient temples, historical sites, and vibrant communities, providing immersive experiences that celebrate the captivating heritage of the region. Join us on a remarkable journey of discovery and connection with the diverse traditions and history of North-East India.
                </div>
                <br className="justifyAlignment"/>
                If you have any queries, feel free to ask us.
                </span>
                
                    <button className="button">
                    <a href="mailto:jishnudeepborah@gmail.com">Ask Questions</a>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default GetStarted