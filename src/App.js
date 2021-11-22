import './App.css';
import {Routes, Route} from 'react-router-dom';
import logo from './assets/images/logo.png';

function App() {
  return (
    
      <>
        <section className="navbar">
          <div className="container flex">
            {/* First Nav */}
            <img className="logo" src={logo} alt="logo" />


            <nav className="flex justify-content-space-between ml-9">

              <ul  className="">
                <li className="text-dim-white">Dashboard</li>
                <li className="btn-market m-1"><i class="fas fa-home text-dim-ash mr-1"></i>Marketplace</li>
              </ul>

              <ul className="">
                <li><i class="fas fa-headphones btn-headphone p-1"></i></li>
                <li className="market-btn"><span class="fas fa-power-off m-1 "></span>Login</li>
              </ul>

            </nav>
            {/* end of Nav */}
            </div>

          </section>

          <section className="navbar bg-purple-2">
          <div className="container flex ">
            {/* Second Nav */}
            <nav className="flex justify-content-space-around ">
              <ul className="justify-self-start p-1 justify-content-space-between">
                <li className="p-2 mr-2 selected-spawn">Cyberspawns</li>
                <li className="p-2 mr-2">Cyberskins</li>

                <li className="p-2 mr-2">Avater Wears</li>
                <li className="p-2 mr-2">Avater Skins</li>

              </ul>
              <ul>

              </ul>
            </nav>
            {/* end of Nav */}

            </div>
            </section>

            <section className="navbar bg-purple">
          <div className="container flex">
            {/* Third Nav */}
            <nav className="flex justify-content-space-between p-2">
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
