import './nav.css';
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BsFillLaptopFill} from 'react-icons/bs'
import {BiMessageRoundedDots} from 'react-icons/bi'
import {BsArrowDownCircle} from 'react-icons/bs'
import { Fragment, useEffect } from 'react';

function Navbar(){
    useEffect(() => {
        const Icons = document.querySelectorAll('.navigation .icon');
        Icons.forEach(icon => {
            icon.addEventListener('click', () => {
                changeActive();
                icon.classList.add('active-nav');
            })
        })

        const changeActive = () => {
            Icons.forEach(icon => {
                icon.classList.remove('active-nav');
            })
        }
    })
    return(
        <Fragment>
            <div className='navigation'>
                <a href='#home'>
                    <AiOutlineHome className='icon active-nav' />
                </a>
                <a href='#about'>
                    <AiOutlineUser className='icon'/>
                </a>
                <a href='#projects'>
                    <BsFillLaptopFill className='icon'/>
                </a>
                <a href='#contact'>
                    <BiMessageRoundedDots className='icon'/>
                </a>
                <a href='#footer'>
                    <BsArrowDownCircle className='icon'/>
                </a>
            </div>
        </Fragment>
    )
}

// const Icons = document.querySelectorAll('.navigation .icon');
// console.log(Icons)
// Icons.forEach(icon => {
//     console.log(1);
//     icon.addEventListener('click', () => {
//         console.log(123);
//         changeActive();
//         icon.classList.add('active-nav');
//     })
// })

// const changeActive = () => {
//     Icons.forEach(icon => {
//         icon.classList.remove('active-nav');
//     })
// }
// console.log(1);

export default Navbar