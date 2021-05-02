import React from 'react';
// import Navbar from '../Shared/Navbar';
import './Project.css';
// import photo from '../../image/nice.jpg';
import shop from '../../image/daily-shop.png';
import travel from '../../image/travelling.png';
import team from '../../image/team.png';

const Project = () => {
    return (
        <div className='project-container' id='project'>
            
            <div className='container'>
            <div className='art'>
                <h2 className='text-right text-white font-italic pt-5' style={{fontWeight: 'bold'}}>Projects</h2>
             <div class="mt-5 d-flex">

                <div className=' text-dark text-justify shape w-30 m-5'>
                    <a href="#" style={{textDecoration: 'none'}}>
                    <h4 className='font-italic text-danger'>Daily Shop</h4>
                     <img src={shop} style={{width: '100%', borderRadius: '10px', padding: '10px 0'}} alt=''/>
                     <p className='text-dark'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </a>
                </div>

                <div className=' text-dark text-justify shape okay'>
                     <a href="#" style={{textDecoration: 'none'}}>
                     <h4 className='font-italic text-danger'>Cricket Team Selection</h4>
                     <img src={team} style={{width: '100%', borderRadius: '10px', padding: '20px 0'}} alt=''/>
                     <p className='text-dark'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                     </a>                    
                </div>

                <div className=' text-dark text-justify shape w-30 m-5'>
                    <a href="#" style={{textDecoration: 'none'}}>
                    <h4 className='font-italic text-danger'>Travelling-World</h4>
                     <img src={travel} style={{width: '100%', borderRadius: '10px', padding: '10px 0'}} alt=''/>
                     <p className='text-dark'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </a>
                </div>
                 
                </div>
            </div>
            </div>
        </div>
    );
};

export default Project;