import React from 'react';

const Navbar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light">
    <div class="container-fluid">
        
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item mr-5">
          <a class="nav-link text-light" href="#project">Projects</a>
        </li>
        <li class="nav-item mr-5">
          <a class="nav-link text-light" href="#blog">Blog</a>
        </li>
        <li class="nav-item mr-5">
          <a class="nav-link text-light" href="#resume">Resume</a>
        </li>
        <li class="nav-item mr-5">
          <a class="nav-link text-light" href="#about">About</a>
        </li>
        <li class="nav-item mr-5">
          <a class="nav-link text-light" href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
        </div>
    );
};

export default Navbar;