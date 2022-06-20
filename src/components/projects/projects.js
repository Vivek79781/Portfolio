import { Fragment } from 'react';
import './projects.css';

function Projects(){
    return(
        <Fragment>
            <div id='projects' className='container projects-container'>
                <h1 className='project-text'>Major Projects</h1>
                <div className='project project-1'>
                    <div className='project-img'></div>
                    <div className='project-info'>
                        <h1 className='name'>YelpCamp</h1>
                        <h3 className='languages'>NodeJS, MongoDB, ExpressJS and EJS</h3>
                        <h4 className='about'>
                            An user interactive website which describes different campgrounds from different places and 
                            an authorised user can add a campground, edit or delete it. 
                            It also allows an authorised user to add a reviews, edit or delete it.
                        </h4>
                        <div className='links'>
                            <a href='http://yelpcamp-vivek.herokuapp.com/' className='link deployed-link' target="_blank" rel="noopener noreferrer">
                                <span>Website</span>
                            </a>
                            <a href='https://github.com/Vivek79781/YelpCamp' className='link code-link' target="_blank" rel="noopener noreferrer">
                                <span>Code</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className='project project-2'>
                    <div className='project-info'>
                        <h1 className='name'>SSFDS</h1>
                        <h3 className='languages'>NodeJS, MongoDB, ExpressJS and EJS</h3>
                        <h4 className='about'>
                            A Platform for onboarded NGOs to bulk order leftovers from restaurants and also allows registered individuals to buy/donate leftovers from restaurants.
                        </h4>
                        <div className='links'>
                            <a href='http://ssfds-20cs100x7.herokuapp.com/' className='link deployed-link' target="_blank" rel="noopener noreferrer">
                                <span>Website</span>
                            </a>
                            <a href='https://github.com/Vivek79781/NPO' className='link code-link' target="_blank" rel="noopener noreferrer">
                                <span>Code</span>
                            </a>
                        </div>
                    </div>
                    <div className='project-img'></div>
                </div>
                <div className='project project-3'>
                    <div className='project-img'></div>
                    <div className='project-info'>
                        <h1 className='name'>DEV Connect</h1>
                        <h3 className='languages'>MongoDB, ExpressJS, React and NodeJS</h3>
                        <h4 className='about'>
                            A discussion forum where developers can post their development queries and have discussion with fellow developers for the solution.
                        </h4>
                        <div className='links'>
                        <a href='https://dev-connect-vivek.herokuapp.com/' className='link deployed-link' target="_blank" rel="noopener noreferrer">
                            <span>Website</span>
                        </a>
                        <a href='https://github.com/Vivek79781/Dev-Connect' className='link code-link' target="_blank" rel="noopener noreferrer">
                            <span>Code</span>
                        </a>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Projects