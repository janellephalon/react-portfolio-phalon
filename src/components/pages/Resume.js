import React from 'react';

export default function Resume() {
  return (
    <section>

      {/* Hero Image and Text */}
      <div className="hero-image-secondary">
          <div className="hero-text">

          <h1 className="display-3">Professional</h1>
          <p className="display-6">Resume</p> 

          </div>
        </div>

        {/* Resume */}
        <div className="resume-div font-weight-bold container text-justify">
          <div className="row">

            <h1 className="col-1 font-weight-bold resume-header display-1">Education</h1>
            <p>
              <ul>
                <li>
                <h3 className="resume-title">FULL-STACK DEVELOPER | CERT. </h3>
                <p className="resume-text">Columbia University School of Engineering, New York, New York</p>
                </li>
                <br></br>
                <li>
                <h3 className="resume-title">ENGLISH LIT. and SECONDARY EDUCATION | B.A </h3>
                <p className="resume-text">William Paterson University, New York, New York</p>
                </li>
            </ul>
            </p>

            <h1 className="resume-header col-1 font-weight-bold display-1">Experience</h1>
            <h3 className="resume-title">READING and WRITING TEACHER</h3>
            <p className="resume-text">Memorial Middle School | Elmwood Park, New Jersey | September 2018 - June 2022 </p>
              <p className="resume-text">
              <ul>
                <li>
                Uses data to assess and monitor the progress of 150+ students throughout the school year and works
                closely with staff to efficiently plan and coordinate work. 
                </li>
                <li>
                Facilitates cooperative learning activities that develop a collaborative classroom culture.
                </li>
                <li>
                Integrates technology into the curriculum to promote student engagement and enhance learning pportunities according to the Danielson model.
                </li>
                <li>
                Differentiates instruction to maximize learning opportunities at varying cognitive levels.
                </li>
                <li>
                Effectively communicates with families regarding instructional programs and individual student progress.
                </li>
                <li>
                Earned proficient and accomplished scores in all Danielson Framework standards - 2022 Summative Review rated Highly Effective.
                </li>
              </ul>
              </p>

          </div>
        </div>





    </section>
  );
}
