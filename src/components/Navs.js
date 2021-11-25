import { useState } from 'react';
import logo from '../assets/images/cs-logo.png';


const Navs = () => {
    const [selected, setSelected] = useState(1)
    return (
        <>
        <section className="navbar">
          <div className="container flex">
            {/* First Nav */}
            <img className="logo" src={logo} alt="logo" />


            <nav className="flex justify-content-space-between ml-9">

              <ul className="">
                <li onClick={e=>setSelected(e.target.value)}
                 value={1}
                  className={
                    selected==1?"btn-market text-dim-white m-1":"text-dim-white m-1"}>
                      Dashboard
                      </li>


                <li onClick={e=>setSelected(e.target.value)}
                 value={2}
                  className={selected==2?"m-1 btn-market":"m-1"}>
                    <i class="fas fa-home text-dim-ash mr-1">
                      </i>Marketplace</li>
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
                <li className="nav-buttons nav-active">Crown<i class="fas fa-caret-down pl-1"></i></li>
                <li className="nav-buttons ">Eyes<i class="fas fa-caret-down pl-1"></i></li>
                <li className="nav-buttons ">Mouth<i class="fas fa-caret-down pl-1"></i></li>
                <li className="nav-buttons ">Arms<i class="fas fa-caret-down pl-1"></i></li>
                <li className="nav-buttons ">Tail<i class="fas fa-caret-down pl-1"></i></li>
                <li className="nav-buttons ">Feet<i class="fas fa-caret-down pl-1"></i></li>
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

        </>

    )
}

export default Navs