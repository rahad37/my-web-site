import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div id='contact'>
            <footer class="footer-container pt-5">
            <div class="container">
                <div class="row ">
                <div class="col-md-4 text-light text-center">
                <h4>Social Site...</h4>
                <a href="#">
                    <i class="fab fa-facebook sizing"></i>
                </a>
                <a href="https://www.linkedin.com/in/rahad-ahmed-778854109/">
                    <i class="fab fa-linkedin-in sizing"></i>
                </a>
                <a href="#">
                    <i class="fab fa-instagram sizing"></i>
                </a>
               
            </div>
            <div class="col-md-4 text-light">
                <h4>Contact Me...</h4>
                <div class="d-flex system">
                    <i class="fas fa-envelope mr-2 mt-1"></i>
                    <p>Gmail:</p>
                </div>
                    <a href="#">
                        <p class="text-light">rrahad7867@gmail.com</p>
                    </a>
                <div class="d-flex system">
                    <i class="fas fa-phone-alt mr-2 mt-1"></i>
                    <p>HotLine</p>
                </div>
                    <p>+8801789914078</p>
                    <p>+8801303052767</p>
               
            </div>
            <div class="col-md-4 text-light">
                <h4>Address...</h4>
                <p>Name: Rahad Ahmed</p>
                <p>Village: Chandpur</p>
                <p>City: Comilla-3500</p>
                <p>Country: Bangladesh</p>
            </div>
        </div>
    </div>
    <p className='text-center text-light pt-4'>CopyRight<i class="far fa-copyright"></i>_rahadAhmed_1 May 2021</p>
</footer>


        </div>
    );
};

export default Contact;