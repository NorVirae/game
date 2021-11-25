import './App.css';
import {Routes, Route} from 'react-router-dom';
import bird from './assets/images/birds2.png';
import Navs from './components/Navs';

function App() {

  const num = [1, 2, 3, 4, 5, 6, 7, 8, 9,10,11,12,13,14,15,16,17];
  return (
    
      <>
        {/* All Navs */}
        <Navs/>
        {/* Nav Ends */}

        <main>
        
        <section className="collections">


              <div className="card-container card-collections grid grid-3 gap-1">

                      {/* bEGINING OF CARD */}
                    {num.map((cd)=>{

                    return  (
                    
                              <div className="card flex">
                                  <img src={bird} className="bird"/>

                                  <div className="card-body flex flex-column justify-content-center align-items-center">
                                      
                                        <h4>C.spawn</h4>
                                        <p className="bar">.</p>
                                        <div className="flex">
                                  
                                          <button className="btn"> <img src={bird} className="bird"/>balls</button>
                                          <button className="btn transparent">.</button>
                                          <button className="btn transparent">balls</button>

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
              
                  <p className="arrow-up"><i class="fad text-purple fa-caret-circle-up mx-1 px-2 fa-2x "></i></p>
                  <p className="arrow-down"><i class="fad text-purple fa-caret-circle-down mx-1 px-2 fa-2x "></i></p>
                </div>

          </section>

        </main>

        <section className="footer">
          <div class={"container flex justify-content-center align-items-center p-1"}>
          <i class="fas fa-caret-left bg-dark mx-1 px-2 fa-2x smooth"></i>
            <h4 class="page-tile mx-1">page</h4>
            <h4 className="current-page mx-1 p-1">20</h4>
            <h4 className="max-page mx-1">5656</h4>
          <i class="fas fa-caret-right bg-dark mx-1 fa-2x px-2 smooth"></i>
          </div>
        </section>



      </>
  
  );
}

export default App;
