import React from 'react';

export default function Home() {
  return (
  <div className="">

    {/* Hero Image */}
    <div className="hero-image">
      <div className="hero-text">
        
        <h1 className="display-1">Janelle Phalon</h1>
        <p className="display-4">Full-Stack Web Developer</p> 

      </div>
    </div>

    {/* Icons */}
    <div className="icons col-5 container">
      <ul>

        <li className="github">
          <a href="https://github.com/janellephalon"> <i class="fa-brands fa-github fa-3x github"></i></a>
        </li>
        <li className="linkedin">
          <a href="https://www.linkedin.com/in/janelle-phalon-7b743a157/"> <i class="fa-brands fa-linkedin-in fa-3x linkedin"></i></a>
        </li>
        <li className="email">
          <a href="http://mailto:janellephalon@gmail.com"> <i class="fa-solid fa-at fa-3x email"></i></a>
        </li>

      </ul>
    </div>
  
    <div className="row">

      {/* Profile Photo */}
      <div className="profile-photo col-5 img-fluid"></div>

      
      {/* About Me Text */}
      <p className="about-me-text col-4 text-justify">
      Self-disciplined, enthusiastic full-stack developer with experience in designing and building web applications. Confident implementing a wide range of technologies and programming languages such as HTML, CSS, JavaScript, React, Node, etc. Expert in managing and leading groups of 25+ people. A forever learner who is looking to continue to grow and enhance front/back-end skills.
      </p>
    

  </div>
  <footer className="footer">
  <h3>React Portfolio</h3>
  <br></br>
  <h4>Janelle Phalon</h4>
  </footer>

  </div>
  );
}
