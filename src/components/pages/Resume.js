import React from 'react';

import PDF from '../Images/updatedresume.png';

export default function Resume() {
  return (
    <section>

      {/* Hero Image and Text */}
      <div className="hero-image-secondary">
          <div className="hero-text">

          <h1 className="display-3">Past Relevant</h1>
          <p className="display-6">WORK EXPERIENCE</p> 

          </div>
        </div>

        <div className="col-7 center">
          <div className="card">

            <img
              src={PDF}
              alt="Resume PDF"
              class="card-img-top"
            />

            <div className="card-body">
              <a href="https://github.com/janellephalon" target="_blank" rel="noreferrer">
              <button className="button">GitHub</button>
              </a>
              
            </div>
          </div>
        </div>

<div className="padding-attempt">
{/* Skills Section */ }
<div className="skills-div">


<p>HTML</p>
<div class="skills-container">
  <div class="skills html">90%</div>
</div>
<br/>

<p>CSS</p>
<div class="skills-container">
  <div class="skills css">90%</div>
</div>
<br/>

<p>JavaScript</p>
<div class="skills-container">
  <div class="skills js">80%</div>
</div>
<br/>

<p>Node.js</p>
<div class="skills-container">
  <div class="skills node">75%</div>
</div>
<br/>

<p>SQL</p>
<div class="skills-container">
  <div class="skills sql">70%</div>
</div>
<br/>

</div>
</div>

{/* Footer */}
<footer className="footer">

<div className="icons center">
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
</footer>

    </section>
  );
}
