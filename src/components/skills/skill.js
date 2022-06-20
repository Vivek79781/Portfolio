import './skill.css'
import { Fragment } from 'react'

function Skill(){
    return (
        <Fragment>
            <div>
                <span className='skill-text'>My Technical Skills</span>
                <div className='skills-container'>
                    <div className='skill'>
                        <div className='content html'></div>
                        <h1>HTML</h1>
                    </div>
                    <div className='skill'>
                        <div className='content css'></div>
                        <h1>CSS</h1>
                    </div>
                    <div className='skill'>
                        <div className='content javascript'></div>
                        <h1>Javascript</h1>
                    </div>
                    <div className='skill'>
                        <div className='content bootstrap'></div>
                        <h1>Bootstrap</h1>
                    </div>
                    <div className='skill'>
                        <div className='content react'></div>
                        <h1>React</h1>
                    </div>
                    <div className='skill'>
                        <div className='content c'></div>
                        <h1>C</h1>
                    </div>
                    <div className='skill'>
                        <div className='content c-plus-plus'></div>
                        <h1>C++</h1>
                    </div>
                    <div className='skill'>
                        <div className='content python'></div>
                        <h1>Python</h1>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Skill