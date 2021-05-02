import React from 'react';
import Navbar from '../Shared/Navbar';
import './HeaderMain.css';
import picture from '../../image/ooo.png';
import picture2 from '../../image/color01.jpg';

const HeaderMain = () => {
    return (
        <div className='header'  style={{background: '#596275'}}>
            <div className='design bg' style={{background: '#d1d8e0'}}>
                <div className='header-container'>
                    <Navbar></Navbar>
                    <div className='d-flex justify-content-center style'>
                        <div>
                            <h1 className='text-light font-italic mr-5'>Hey, This is me <br/> Rahad Ahmed</h1>
                            {/* <button className='btn btn-secondary mr-3'  style={{fontWeight: 'bold'}}>My Projects</button> */}
                            {/* <button className='btn btn-secondary' style={{fontWeight: 'bold'}}>Hire Me</button> */}
                        </div>                      
                        <img src={picture} className='rounded' alt='' style={{width: '400px', height: '465px', boxShadow: '0px 0px 20px white'}}/>
                    </div>
                        <div className='row'>
                            <div className='col-md-5'>
                                <img src={picture2} alt='' style={{width: '400px', height: '300px', marginTop: '-80px', borderRadius: '0 10px 10px 0'}}></img>
                            </div>
                            <div className='col-md-7 text-center mt-3'>
                                <h2 className='text-danger font-italic' style={{fontWeight: 'bold'}}>Who Am I?</h2>
                                <h3 className='mt-5 mb-3' style={{fontWeight: 'bold'}}>A Full Stack Web Developer...</h3>
                                {/* <h6 style={{fontWeight: 'bold'}}>Expert in JavaScript, React, mongoDB</h6> */}
                                 {/* <button className='btn btn-secondary' style={{fontWeight: 'bold'}}>More Details</button> */}
                                 <a href='#skills' className='btn btn-secondary'>More Details</a>
                            </div>
                        </div>
                          
                          
                </div>
            </div>
        </div>
       
       
    );
};

export default HeaderMain;