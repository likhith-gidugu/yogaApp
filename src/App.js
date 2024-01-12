
import './Media.css';
import './App.css';
import FirstPage from './FirstPage';
import Navigation from './Header';
import Secondpage from './SecondPage';
import ThirdPage from './ThirdPage';
import FourthPage from './FourthPage';
import FifthPage from './FifthPage';
import SixthPage from './Sixthpage';
import Seventhpage from './Seventhpage';
import EightPage from './EightPage';
import Footer from './Footer';


const App=()=> {
  return (
    <section>
  
    <Navigation/>
    <FirstPage/>
    <Secondpage/> 
    <ThirdPage/>
    <FourthPage/>
    <FifthPage/>
    <SixthPage/>
    <Seventhpage/>
    <EightPage/>
    <Footer/>
    </section>
    
);
}

export default App;
