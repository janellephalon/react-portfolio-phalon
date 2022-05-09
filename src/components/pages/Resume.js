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

            <h1 className="Resume-Header col-1 font-weight-bold">Education</h1>
            <p>
              <ul>
                <li>
                FULL-STACK DEVELOPER | CERT. <br></br>
                Columbia University School of Engineering, New York, New York
                </li>
                <br></br>
                <li>
                ENGLISH LIT. and SECONDARY EDUCATION | B.A <br></br>
                William Paterson University, New York, New York
                </li>
            </ul>
            </p>

            <h1 className="Resume-Header col-1 font-weight-bold">Work Experience</h1>
            <p>
            READING and WRITING TEACHER <br></br>
            Memorial Middle School | Elmwood Park, New Jersey <br></br> 
            September 2018 - June 2022 
            <br></br>
            <br></br>
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
