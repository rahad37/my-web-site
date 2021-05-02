import React from 'react';
// import image from '../../image/nice.jpg';
import photo from '../../image/bg3.png';

const About = () => {
    return (
        <div style={{background: '#bdc3c7'}}>
        <div className='container pb-5' id='about'>
            <h2 className='font-italic text-right text-dark pt-5 pb-5' style={{fontWeight: 'bold'}}>About</h2>
            <div className='d-flex justify-content-center'>

            <div>
                    <img style={{borderRadius: '10px', width: '350px', border: '2px solid black', marginRight: '30px', background: '#01a3a4'}} src={photo} className='ok' alt=''></img>
                </div>
               
                <div className='text-justify mt-3'>
                    
                    <p  style={{fontWeight: 'bold', width: '450px', fontSize: '20px'}}>The Lorem ipsum text is derived from sections 1.10.32 and 1.10.33 of Cicero's 'De finibus bonorum et malorum'.[7][8] The physical source may have been the 1914 Loeb Classical Library edition of De finibus, where the Latin text, presented on the left-hand (even) pages, breaks off on page 34 with "Neque porro quisquam est qui do-" and continues on page 36 with "lorem ipsum ...", suggesting that the galley type of that page was mixed up to make the dummy text seen today. The discovery of the text's origin is attributed to Richard McClintock, a Latin scholar at Hampden–Sydney College. </p>
                </div>
                <div className=''></div>
            </div>          
        </div>
        </div>
    );
};

export default About;