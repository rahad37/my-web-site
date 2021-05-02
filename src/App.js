import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import About from './Components/About/About';
import Blog from './Components/Blog/Blog';
import Contact from './Components/Contact/Contact';
import Resume from './Components/Resume/Resume';
import Header from './Components/Header/Header';
import Project from './Components/Project/Project';
import Skills from './Components/Skills/Skills';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path='/skills'>
            <Skills></Skills>
          </Route>
          <Route path='/about'>
            <About/>
          </Route>
          <Route path='/blog'>
            <Blog/>
          </Route>
          <Route path='/contact'>
            <Contact/>
          </Route>
          <Route path='/resume'>
            <Resume/>
          </Route>
          <Route path='/project'>
            <Project/>
          </Route>
          <Route path='/'>
            <Header/>
          </Route>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;



{/* <div className='col-md-4'>
                        <h5>HTML5</h5>
                        <div class="progress">
                        <div class="progress-bar bg-success" role="progressbar" style={{width: '100%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>

                        <h5>CSS</h5>
                        <div class="progress">
                        <div class="progress-bar bg-danger" role="progressbar" style={{width: '90%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>

                        <h5>Bootstrap</h5>
                        <div class="progress">
                        <div class="progress-bar bg-warning" role="progressbar" style={{width: '90%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                        </div> 

                        <h5>Material UI</h5>
                        <div class="progress">
                        <div class="progress-bar bg-info" role="progressbar" style={{width: '80%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>                     
                    </div> */}

                    {/* <div className='col-md-4'>
                        <h5>JavaScript</h5>
                        <div class="progress">
                        <div class="progress-bar bg-info" role="progressbar" style={{width: '75%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>

                        <h5>Firebase</h5>
                        <div class="progress">
                        <div class="progress-bar bg-warning" role="progressbar" style={{width: '70%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                        </div> 

                        <h5>MongoDB</h5>
                        <div class="progress">
                        <div class="progress-bar bg-danger" role="progressbar" style={{width: '75%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>                      
                    </div> */}

                    {/* <div className='col-md-4'>              
                        <h5>React.js</h5>
                        <div class="progress">
                        <div class="progress-bar bg-danger" role="progressbar" style={{width: '75%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>

                        <h5>Node.js</h5>
                        <div class="progress">
                        <div class="progress-bar bg-info" role="progressbar" style={{width: '70%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                        </div> 

                        <h5>Express.js</h5>
                        <div class="progress">
                        <div class="progress-bar bg-warning" role="progressbar" style={{width: '75%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>                   
                    </div>             */}