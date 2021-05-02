import React from 'react';
import About from '../About/About';
import Blog from '../Blog/Blog';
import Contact from '../Contact/Contact';
import Project from '../Project/Project';
import Resume from '../Resume/Resume';
import Skills from '../Skills/Skills';
// import Navbar from '../Shared/Navbar';
import HeaderMain from './HeaderMain';

const Header = () => {
    return (
        <div>
            {/* <Navbar></Navbar> */}
            <HeaderMain></HeaderMain>
            <Skills></Skills>
            <Project></Project>
            <Blog></Blog>
            <About></About>
            <Resume></Resume>
            <Contact></Contact>
        </div>
    );
};

export default Header;