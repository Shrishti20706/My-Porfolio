import './App.scss';
import {Routes,Route,useLocation} from 'react-router-dom';
import Home from './containers/home'
import About from './containers/about'
import Resume from './containers/resume'
import Skills from './containers/skills'
import Portfolio from './containers/portfolio'
import Contact from './containers/contact'
import Navbar from './components/navBar';

import Particles from 'react-tsparticles';
import {loadFull} from 'tsparticles';
import particles from "./utils.js/particles"

function App() {

  const location=useLocation();
  console.log(location);


  const handleInit=async(main)=>{
    await loadFull(main)
  }

  const renderparticleJsInHomePage=location.pathname==='/';
  return (
    <div className="App">
      {/** particles js */}
      {/* to show particle on home page only renderparticleJsInHomePage */}
      {
        renderparticleJsInHomePage && 
        <Particles id="particles" options={particles} init={handleInit}/>

      }
      {/** navbar */}
      <Navbar/>

      {/** main page content */}
      <div className="App__main-page-content">
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/resume' element={<Resume/>}></Route>
        <Route path='/skills' element={<Skills/>}></Route>
        <Route path='/portfolio' element={<Portfolio/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
      </Routes>
      </div>
      

      
    </div>
  );
}

export default App;
