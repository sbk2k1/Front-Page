import './App.css';
import Airback from './Components/airback/Airback';
import Cloud from './Components/Cloud/Cloud';
import Desc from './Components/Desc/Desc';
import Devices from './Components/Devices/Devices';
import Footer from './Components/Footer/Footer';
import Member from './Components/Member/Member';
import Navbar from './Components/Navbar/Navbar';
import Team from './Components/Team/Team';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Airback />
      <Desc />
      <Cloud />
      <Devices />
      <Team /> 
      <Footer />
    </div>
  );
}

export default App;
