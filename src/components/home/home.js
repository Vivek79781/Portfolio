import './home.css'
import Buttons from '../button/button';
import { BsMouse } from 'react-icons/bs';
import { Fragment } from 'react';
import img from '../props/me.jpeg'
import { useState } from 'react';
function Home(){
    const [activeToggle,toggleActive] = useState(false);
    return(
        <Fragment>
            <div id='home' className='container home-container'>
                <div className='logo'>
                    <div className={activeToggle ? 'main-img active' : 'main-img' } onClick={e => toggleActive(!activeToggle)}>
                        <span className='circle'></span>
                        <span className='circle'></span>
                        <span className='circle'></span>
                        <span className='circle'></span>
                        <span className='circle'></span>
                        <span className='circle'></span>
                        <span className='circle'></span>
                        <span className='circle'></span>
                    </div> 
                    <img src={img} alt='...'/>
                </div>
                <a className='scroll-down' href='#footer'>
                    <hr/>
                    <h5>scroll down</h5>
                    <BsMouse className='scroll'/>
                    <hr/>
                </a>
                <h2>
                    <span>About Me</span> <br/>
                    <p>
                        <div className='container button-container'>
                            <a href='https://vivek79781.github.io/Resume/' className='btn tert' target="_blank" rel="noopener noreferrer">Resume</a>
                        </div>
                    </p>
                </h2>
                <Buttons/>
            </div>
        </Fragment>
    )
}

export default Home;