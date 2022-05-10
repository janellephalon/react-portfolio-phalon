import React from 'react';

import BudgetTracker from "../Images/Budget-Tracker.png";
import EComm from "../Images/E-Commerce-Backend.png";
import EmployeeTracker from "../Images/Employee-Tracker.png";
import NoteTaker from "../Images/Note-Taker.png";

 function Portfolio () {
   return (
     <section className="portfolio">

       {/* Hero Image and Text */}
       <div className="hero-image-secondary">
          <div className="hero-text">

          <h1 className="display-3">Professional</h1>
          <p className="display-6">Portfolio</p> 

          </div>
        </div>


      <div className="container">
      <div className="row">

        {/* Buget Tracker Card */}
        <div className="col-5">
          <div className="card">

            <img
              src={BudgetTracker}
              alt="Budget-Tracker"
              class="card-img-top"
            />

            <div className="card-body">
              <a href="https://github.com/janellephalon/offline-budget-tracker" target="_blank" rel="noreferrer">
                <button className="gallery-button-1">GitHub</button>
              </a>
              <p className="card-body-text text-justify font-weight-bold">
              This application is designed to give users a fast and easy way to track their money. The goal is to modify the starter code to allow for offline access and functionality.
              </p>
            </div>
          </div>
        </div>

      {/* E-Commerce Card */}
        <div className="col-5">
          <div className="card">

            <img
              src={EComm}
              alt="E-Commerce"
              class="card-img-top"
            />

            <div className="card-body">
              <a href="https://github.com/janellephalon/backing-ecomm" target="_blank" rel="noreferrer">
                <button className="gallery-button-2">GitHub</button>
              </a>
              <p className="card-body-text text-justify font-weight-bold">
              This application is designed to demonstrate an understanding of fundamental architecture of e-commerce websites. The goal is to configure Sequelize to interact with a MySQL database - building the back end of an e-commerce site.
              </p>
            </div>
          </div>
        </div>

      {/* Employee Tracker Card */}
        <div className="col-5">
          <div className="card">

            <img
              src={EmployeeTracker}
              alt="Employee-Tracker"
              class="card-img-top"
            />

            <div className="card-body">
              <a href="https://github.com/janellephalon/employee-depot" target="_blank" rel="noreferrer">
                <button className="gallery-button-3">GitHub</button>
              </a>
              <p className="card-body-text text-justify font-weight-bold">
              This application is designed to demonstrate how to allow non-developers to easily view and interact with informations stored in databases. The goal is to build a command-line application from scratch to manage a company's employee database, using Node.js, Inquirer, and MySQL.
              </p>
            </div>
          </div>
        </div>

      {/* Note Taker Card */}
        <div className="col-5">
          <div className="card">

            <img
              src={NoteTaker}
              alt="Note-Taker"
              class="card-img-top"
            />

            <div className="card-body">
              <a href="https://github.com/janellephalon/remind-me-note-taker" target="_blank" rel="noreferrer">
                <button className="gallery-button-4">GitHub</button>
              </a>
              <p className="card-body-text text-justify font-weight-bold">
              The goal of this project is to modify the starter code to create an application called Note Taker, which uses Express.js backend to save and retreive note data from a JSON file. The application is designed to write, save, and delete notes - helping users stay organized and focused throughout their busy day(s)!
              </p>
            </div>
          </div>
        </div>

      </div>
      </div>

    {/* Footer */}
    <footer className="footer">

      <h3>React Portfolio</h3>
      <br></br>
      <h4>Janelle Phalon</h4>

    </footer>
     </section>
     
   );
 }

 export default Portfolio;
