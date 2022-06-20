import { Fragment } from 'react';
import Header from './components/header/header';
import Navbar from './components/nav/nav';
import Home from './components/home/home.js';
import About from './components/about/about'
import Projects from './components/projects/projects';
import Contact from './components/contact/contact';
import Footer from './components/footer/footer';
function App() {
  return (
  <Fragment>
    <div className='bg-circle1'></div>
    <div className='bg-circle2'></div>
    <Header/>
    <Navbar/>
    <Home/>
    <About/>
    <Projects/>
    <Contact/>
    <Footer/>
  </Fragment>
  );
}

export default App;
