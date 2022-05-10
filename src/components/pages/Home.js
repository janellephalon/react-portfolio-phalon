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
      <p className="about-me-text col-4 text-justify font-weight-bold">
      Self-disciplined, enthusiastic full-stack developer with experience in designing and building web applications. Confident implementing a wide range of technologies and programming languages such as HTML, CSS, JavaScript, React, Node, etc. Expert in managing and leading groups of 25+ people. A forever learner who is looking to continue to grow and enhance front/back-end skills.
      </p>
  
    {/* Divider */}
    <hr className="divider"></hr>

    {/* How did I get here? */}
    <div className="second-intro">

      <h1 className="second-header display-4">
        How did I get here?
      </h1>

      <p className="about-teaching text-justify">
        As someone who loves learning, pursuing a career in education was an obvious choice. Students feed off my thirst for knowledge, creating a climate that not only motivates, but challenges all learners. When the pandemic struck, I found that I was lacking the resources necessary to create engaging lessons for my students - Hence, how I got here. 
        <br></br>
        <br></br>
        I enrolled in Columbia Engineering's Coding Bootcamp with the idea that I will create applications to foster growth in education. Although still a long-term goal, my mindset has shifted after falling in love with challenges of web development. I am hungry to obtain a position that will fuel my passion for learning and growing as a developer.   
      </p>

    </div>


    
  
  </div>

  {/* Footer */}
  <footer className="footer">

    <h3>React Portfolio</h3>
    <br></br>
    <h4>Janelle Phalon</h4>

  </footer>

  </div>
  );
}
