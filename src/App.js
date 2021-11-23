import './App.css';
import {Routes, Route} from 'react-router-dom';
import logo from './assets/images/logo.png';
import bird from './assets/images/birds2.png';

function App() {

  const num = [1, 2, 3, 4, 5, 6, 7, 8, 9,10,11,12,13,14,15,16,17];
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
            <nav className="third-nav flex justify-content-space-between p-2">
              <p>Filter</p>

              <ul className="bg-nav-ul">
                <li className="nav-buttons ">Aves</li>
                <li className="nav-buttons nav-active ">Reptiles</li>
                <li className="nav-buttons ">Mammals</li>
                <li className="nav-buttons ">Amphibs</li>
                <li className="nav-buttons ">Anthropods</li>
                <li className="nav-buttons ">Aqua</li>
              </ul>

              <ul className="bg-nav-ul">
                <li className="nav-buttons ">Crown</li>
                <li className="nav-buttons ">Eyes</li>
                <li className="nav-buttons ">Mouth</li>
                <li className="nav-buttons ">Arms</li>
                <li className="nav-buttons ">Tail</li>
                <li className="nav-buttons ">Feet</li>
              </ul>

              <ul>
                <li className="egg"><input className="egg-input" type="checkbox" /><label>Egg</label></li>
                <li className="adult"><input className="adult-input" type="checkbox" /><label>Adult</label></li>
              </ul>

              <ul>
                <li className="clear">Clear<i class="fas fa-brush"></i></li>
              </ul>
            </nav>
            {/* end of all Nav */}


          </div>
        </section>

        {/* All navs end here */}

        <section className="collections grid grid-card-3">

          <div>
              
            </div>

          <div className="card-collections grid grid-3 gap-1">

          {/* bEGINING OF CARD */}
        {num.map((cd)=>{

         return  (<div className="card flex">
                      <img src={bird} className="bird"/>

                      <div className="card-body flex flex-column justify-content-center align-items-center">
                          
                            <h4>C.spawn</h4>
                            <p className="bar">.</p>
                            <div className="flex">
                      
                              <button className="btn btn-spawn"> <img src={bird} className="bird"/>balls</button>
                              <button className="btn btn-spawn transparent">.</button>
                              <button className="btn btn-spawn transparent">balls</button>

                            </div>
                          </div>
                          <p className="flex flex-column justify-content-center align-items-flex-end">
                            <h2>=0.518</h2>
                              <h4>$506</h4>
                            </p>
              </div>)

              })}

          {/* END OF CARD */}

              
          </div>

        


          <div className="flex flex-column justify-content-space-between align-items-flex-end">
          <p><i class="fas fa-caret-circle-up fa-2x"></i></p>

              <p><i class="fas fa-caret-circle-down fa-2x"></i></p>

            </div>

        </section>



      </>
  
  );
}

export default App;
