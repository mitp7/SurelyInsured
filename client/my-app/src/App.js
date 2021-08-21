import logo from './logo.svg';
import './App.css';

import MapContainer from './Map/Map/MapContainer.js';
import Navbar from './Navbar/Navbar.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
        <MapContainer/>
      </header>
    </div>
  );
}

export default App;
