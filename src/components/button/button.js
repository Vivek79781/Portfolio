import './button.css';
import { Fragment } from 'react';

function Buttons(){
    return(
        <Fragment>
            <div className='container button-container'>
                <a href='#about' className='btn pri'>Learn More</a>
                <a href='#contact' className='btn sec'>Get in Touch</a>
            </div>
        </Fragment>
    )
}

export default Buttons