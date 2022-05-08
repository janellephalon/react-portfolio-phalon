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
  
    <div className="bio">

      {/* Profile Photo */}
      <div className="profile-photo"></div>

      {/* About Me Text */}
      <p className="about-me-text">
      Self-disciplined, enthusiastic full-stack developer with experience in designing and building web applications. Confident implementing a wide range of technologies and programming languages such as HTML, CSS, JavaScript, React, Node, etc. (see skills below). Expert in managing and leading groups of 25+ people. A forever learner who is looking to continue to grow and enhance front/back-end skills.
      </p>

    </div>

    {/* Icons */}
    <div className="icons">

      <i class="fa-brands fa-github fa-3x"></i>
      <i class="fa-brands fa-linkedin-in fa-3x"></i>
      <i class="fa-solid fa-at fa-3x"></i>

    </div>
    
</div>
  );
}
