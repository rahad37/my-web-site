import React from 'react';
import photo1 from '../../image/nice.jpg';
import resume from '../../image/RAHAD AHMED RESUME.pdf';

const Resume = () => {
    return (
        <div  style={{background: '#d1d8e0'}} id='resume'>
        <div className='container pb-5' id='blog'>
        <h2 className='font-italic text-dark pt-5 pb-5' style={{fontWeight: 'bold'}}>Resume</h2>
        <div className='row'>
            <div className='col-md-6 text-justify'>
                {/* <h3 style={{color: 'blue', fontStyle: 'italic'}}>Myself</h3> */}
                {/* <h6 style={{color: 'tomato', fontWeight: 'bold'}}>A life changing course</h6> */}
                <p style={{color: '#2d3436', fontSize: '20px', fontWeight: 'bold', fontStyle: 'italic'}}>As a creative and enthusiastic developer with hands-on skills in a wide range of Programming
                Language, Tools and Software, I am very good positioned to leverage my abilities and
                qualifications to thrive as a Front-end Developer.
                Over 2 years, as a Front-end Developer, I have developed, modified and customized, highly
                responsive websites and e-commerce solutions using advanced technologies. In addition, I have
                consistently met client expectations and project milestones while working effectively in
                deadline-driven environments.</p>
                <a href={resume} className='btn btn-danger' download>Download My Resume <i class="fas fa-download"></i></a>
            </div>
            <div className='col-md-6'>
                <img style={{borderRadius: '10px'}} className='w-100' src={photo1} alt=''></img>
            </div>
        </div>
        
    </div>
    </div>
    );
};

export default Resume;