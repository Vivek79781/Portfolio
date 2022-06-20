import { Fragment } from 'react'
import './contact.css'
import { AiOutlineMail } from 'react-icons/ai'
import { AiOutlineWhatsApp } from 'react-icons/ai'
import { AiOutlineGithub } from 'react-icons/ai'

function Contact(){
    return(
        <Fragment>
            <div className='container contact-container' id='contact'>
                <h1>Contact Me</h1>
                <div className='contact-links'>
                    <a href='mailto:vivekdbz248@gmail.com' className='contact gmail' target="_blank" rel="noopener noreferrer">
                        <AiOutlineMail className='icon'/>
                        <h2>Gmail <span>vivekdbz248@gmail.com</span></h2>
                    </a>
                    <a href='http://wa.me/+917978151838' className='contact whatsapp' target="_blank" rel="noopener noreferrer">
                        <AiOutlineWhatsApp className='icon'/>
                        <h2>WhatsApp <span>+91 797 815 1838</span></h2>
                    </a>
                    <a href='https://github.com/Vivek79781' className='contact github' target="_blank" rel="noopener noreferrer">
                        <AiOutlineGithub className='icon'/>
                        <h2>Github <span>Vivek79781</span></h2>
                    </a>
                </div>
            </div>
        </Fragment>
    )
}

export default Contact