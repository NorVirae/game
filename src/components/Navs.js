import { useState } from 'react';
import logo from '../assets/images/cs-logo.png';


const Navs = () => {
    const [selectedTopNav, setSelectedTopNav] = useState(2)
    const [selectedMiddleNav, setSelectedMiddleNav] = useState(1)

    return (
        <>
        <section className="navbar">
          <div className="container flex">


            {/* Top Nav */}
            <img className="logo" src={logo} alt="logo" />


            <nav className="flex justify-content-space-between ml-9">

              <ul className="">
                <li onClick={e=>setSelectedTopNav(e.target.value)}
                 value={1}
                  className={
                    selectedTopNav==1?"btn-market text-dim-white m-1":"text-dim-white m-1"}>
                      Dashboard
                      </li>


                <li onClick={e=>setSelectedTopNav(e.target.value)}
                 value={2}
                  className={selectedTopNav==2?"m-1 btn-market":"m-1"}>
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



            {/* Middle Nav */}
            <nav className="flex justify-content-space-around ">
              <ul className="justify-self-start p-1 justify-content-space-between">
                <li onClick={e=>setSelectedMiddleNav(e.target.value)} value={1} className={selectedMiddleNav==1?"p-2 mr-2 selected-spawn":"p-2 mr-2"}>Cyberspawns</li>
                <li onClick={e=>setSelectedMiddleNav(e.target.value)} value={2} className={selectedMiddleNav==2?"p-2 mr-2 selected-spawn":"p-2 mr-2"}>Cyberskins</li>

                <li onClick={e=>setSelectedMiddleNav(e.target.value)} value={3} className={selectedMiddleNav==3?"p-2 mr-2 selected-spawn":"p-2 mr-2"}>Avater Wears</li>
                <li onClick={e=>setSelectedMiddleNav(e.target.value)} value={4} className={selectedMiddleNav==4?"p-2 mr-2 selected-spawn":"p-2 mr-2"}>Avater Skins</li>

              </ul>
              <ul>

              </ul>
            </nav>
            {/* end of Nav */}

            </div>
            </section>

            <section className="navbar bg-purple">
          <div className="container flex">



            {/* Bottom Nav */}
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