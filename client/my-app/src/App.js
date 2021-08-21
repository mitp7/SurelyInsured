import logo from './logo.svg';
import './App.css';

import Navbar from './Navbar/Navbar.js';
import Home from './Home/Home.js';
import DataDisplay from './DataDisplay/DataDisplay'

function App() {
  return (
    <div>
        <Navbar/>
        <Home/>
        <DataDisplay/>
        <iframe src="https://compare.insurancehotline.com/en/auto/vehicles">

        </iframe>
    </div>
  );
}

export default App;
