import './App.css';
import {Button} from 'react-bootstrap'
import Header from './components/Header';
import Hero from './components/Hero';
import HomeScreen from './components/HomeScreen';
import Footer from './components/Footer';
import Subscribe from './components/Subscribe';
function App() {
  return (
    <div className="App">
     <Header />
     <Hero/>
     <HomeScreen />
     <Subscribe/>
     <Footer/>
    </div>
  );
}

export default App;
