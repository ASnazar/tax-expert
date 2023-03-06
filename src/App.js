import './index.css'
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import style from "./index.css"
import AboutUs from "./components/about-us/AboutUs";
import Vanta from "./components/Vanta";
import Arrow from "./components/arrowUp/arrow";


function App() {


  return (
    <div >

        <Navbar/>
        <AboutUs />
        <Footer/>

        <Vanta/>
    </div>

  );
}

export default App;
