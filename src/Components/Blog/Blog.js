import React from 'react';
import photo from '../../image/hero1.png';

const Blog = () => {
    return (
        <div style={{background: '#d1d8e0'}}>
        <div className='container pb-5' id='blog'>
            <h2 className='font-italic text-dark pt-5 pb-5' style={{fontWeight: 'bold'}}>Blogs</h2>
            <div className='row'>
                <div className='col-md-6'>
                    <img style={{borderRadius: '10px'}} className='w-100' src={photo} alt=''></img>
                </div>
                <div className='col-md-6 text-justify'>
                    <h3 style={{color: 'blue', fontStyle: 'italic'}}>Programming Hero</h3>
                    <h5 style={{color: 'tomato', fontWeight: 'bold'}}>A life changing course</h5>
                    <p  style={{fontWeight: 'bold'}}>The Lorem ipsum text is derived from sections 1.10.32 and 1.10.33 of Cicero's 'De finibus bonorum et malorum'.[7][8] The physical source may have been the 1914 Loeb Classical Library edition of De finibus, where the Latin text, presented on the left-hand (even) pages, breaks off on page 34 with "Neque porro quisquam est qui do-" and continues on page 36 with "lorem ipsum ...", suggesting that the galley type of that page was mixed up to make the dummy text seen today. The discovery of the text's origin is attributed to Richard McClintock, a Latin scholar at Hampden–Sydney College. </p>
                </div>
            </div>          
        </div>
        </div>
    );
};

export default Blog;