import './App.css';
import Airback from './Components/airback/Airback';
import Navbar from './Components/Navbar/Navbar';
import Rest from './Components/Rest/Rest';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Airback />
      <Rest />
    </div>
  );
}

export default App;
