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



function App() {
  return (
    <div className="App">
      <div>
        <div className="white-gradient"/>
        <Header/>
        <Hero/>
      </div>
      <NEStates/>
      <Explore/>  
      <Card/>  
      <FAQs/>
      <Contact/>
      <GetStarted/>
      <Footer/>
    </div>
  );
}

export default App;

//npm run dev



