import { Fragment } from 'react'
import './footer.css'
import { BsMouse, BsInstagram, BsFacebook, BsGithub } from 'react-icons/bs'

function Footer(){
    return(
        <Fragment>
            <div id='footer' className='container footer-container'>
                <h1>
                    That's all
                    <a href='#home'>
                        <h2>
                            <BsMouse/> - scroll up -  
                        </h2>
                    </a>
                </h1>
                <div className='social-links'>
                    <a href='https://www.instagram.com/__vivek__jaiswal__/' target="_blank" rel="noopener noreferrer">
                        <BsInstagram className='social'/>
                    </a>
                    <a href='https://www.facebook.com/profile.php?id=100025241181969' target="_blank" rel="noopener noreferrer">
                        <BsFacebook className='social'/>
                    </a>
                    <a href='https://github.com/Vivek79781' target="_blank" rel="noopener noreferrer">
                        <BsGithub className='social'/>
                    </a>
                </div>
            </div>
        </Fragment>
    )
}

export default Footer