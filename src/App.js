import './App.css';
import {Routes, Route} from 'react-router-dom';
import logo from './assets/images/logo.png';

function App() {
  return (
    
      <>
        <section className="navbar">
          <div className="container flex justify-content-space-between">
            {/* First Nav */}

            <nav className="first-nav">
              <img className="logo" src={logo} alt="logo" />

              <ul  className="nav-middle">
                <li>Dashboard</li>
                <li className="market-btn"><i class="fas fa-home"></i>Marketplace</li>
              </ul>

              <ul className="nav-right">
                <li><span class="fas fa-headphones"></span></li>
                <li><span class="fas fa-power-off">Login</span></li>
              </ul>

            </nav>
            {/* end of Nav */}
            </div>

          </section>

          <section className="navbar bg-purple-2">
          <div className="container flex">
            {/* Second Nav */}
            <nav className="second-nav">
              <ul>
                <li>Cyberspawns</li>
                <li>Cyberskins</li>

                <li>Avater Wears</li>
                <li>Avater Skins</li>

              </ul>
            </nav>
            {/* end of Nav */}

            </div>
            </section>

            <section className="navbar bg-purple">
          <div className="container flex">
            {/* Third Nav */}
            <nav className="third-nav">
              <ul>
                <li>Filter</li>
                <li>Aves</li>
                <li>Reptiles</li>
                <li>Mammals</li>
                <li>Amphibs</li>
                <li>Anthropods</li>
                <li>Aqua</li>
              </ul>

              <ul>
                <li>Crown</li>
                <li>Eyes</li>
                <li>Mouth</li>
                <li>Arms</li>
                <li>Tail</li>
                <li>Feet</li>
              </ul>

              <ul>
                <li>Egg</li>
                <li>Adult</li>
              </ul>

              <ul>
                <li>Clear</li>
              </ul>
            </nav>
            {/* end of Nav */}


          </div>
        </section>
      </>
  
  );
}

export default App;
