import { useState, useEffect } from 'react';
import Header from "./components/Header/Header";
import Hero from './components/Hero/Hero';
import './App.css';
import Explore from "./components/Explore/Explore";
import NEStates from "./components/NEStates/NEStates";
import FAQs from "./components/FAQs/FAQs";
import Contact from "./components/Contact/Contact";
import GetStarted from './components/GetStarted/GetStarted';
import Footer from './components/Footer/Footer';
import Card from './components/Card/Card';
import PropagateLoader from 'react-spinners/PropagateLoader';

function App() {
  const [Loading, SetLoading] = useState(true);

  useEffect(() => {

    setTimeout(() => {
      SetLoading(false);
    }, 1500);
  }, []);

  return (
    <div className="App">
      {Loading ? (
        <div className="loader" style={{"background-color": "white"}}>
          <PropagateLoader
            color={'#d64541'}
            loading={true}
            size={22}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <>
          <div>
            <div className="white-gradient" />
            <Header />
            <Hero />
          </div>
          <NEStates />
          <Explore />
          <Card />
          <FAQs />
          <Contact />
          <GetStarted />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
