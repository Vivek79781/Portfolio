import './about.css'
import Skill from '../skills/skill'
import { Fragment } from 'react'

function About(){
    return(
        <Fragment>
            <div id='about' className='container about-container'>
                <Skill/>
            </div>
        </Fragment>
    )
}

export default About