import React from 'react';

// GitHub Projects
import BudgetTracker from "../Images/Budget-Tracker.png";
import EComm from "../Images/E-Commerce-Backend.png";
import EmployeeTracker from "../Images/Employee-Tracker.png";
import NoteTaker from "../Images/Note-Taker.png";
import SpeedySocial from "../Images/Speedy-Socials.png";
import IdeaForA from "../Images/ideafora.png";
import BookBrowser from "../Images/book-browser.png";

 function Portfolio () {
   return (
     <section className="portfolio">

       {/* Hero Image and Text */}
       <div className="hero-image-secondary">
          <div className="hero-text">

          <h1 className="display-3">My Work</h1>
          <p className="display-6">PROFESSIONAL PORTFOLIO</p> 

          </div>
        </div>


      <div className="container">
      <div className="row">


      {/* ideafora Card */}
      <div className="col-5 center">
          <div className="card">

            <img
              src={IdeaForA}
              alt="ideafora"
              class="card-img-top"
            />

            <div className="card-body">
              <a href="https://github.com/becketbowes/ihaveanideafora" target="_blank" rel="noreferrer">
              <button className="button">GitHub</button>
              </a>
              <p className="card-body-text text-justify">
              This application is designed to bridge the gap of communication between developers and thinkers and make collaborations easy! The goal is to collaborate on a team to create a full-stack application. 
              </p>
            </div>
          </div>
        </div>

      {/* E-Commerce Card */}
        <div className="col-5 center">
          <div className="card">

            <img
              src={EComm}
              alt="E-Commerce"
              class="card-img-top"
            />

            <div className="card-body">
              <a href="https://github.com/janellephalon/backing-ecomm" target="_blank" rel="noreferrer">
                <button className="button">GitHub</button>
              </a>
              <p className="card-body-text text-justify">
              This application is designed to demonstrate an understanding of fundamental architecture of e-commerce websites. The goal is to configure Sequelize to interact with a MySQL database - building the back end of an e-commerce site.
              </p>
            </div>
          </div>
        </div>

        {/* Speedy Socials Card */}
        <div className="col-5 center">
          <div className="card">

            <img
              src={SpeedySocial}
              alt="Speedy-Socials"
              class="card-img-top"
            />

            <div className="card-body">
              <a href="https://github.com/janellephalon/speedy-socials" target="_blank" rel="noreferrer">
              <button className="button">GitHub</button>
              </a>
              <p className="card-body-text text-justify">
              This application is designed for users who are looking to share their thoughts, react to friends' thoughts, and create a friend list! The goal of this project is to demonstrate an understanding how to use Express.js for routing, a MonogoDB database, and the Mongoose ODM.
              </p>
            </div>
          </div>
        </div>

        {/* Book Browser Card */}
        <div className="col-5 center">
          <div className="card">

            <img
              src={BookBrowser}
              alt="Book-Browser"
              class="card-img-top"
            />

            <div className="card-body">
              <a href="https://github.com/glgberat/project1" target="_blank" rel="noreferrer">
              <button className="button">GitHub</button>
              </a>
              <p className="card-body-text text-justify">
              This application is designed for users who are seeking a new book. Users can search a title, ISBN number, author, or genre to help make an educated decision in their book hunt! The goal is to collaborate on a team to create a front-end application. 
              </p>
            </div>
          </div>
        </div>

      {/* Employee Tracker Card */}
        <div className="col-5 center">
          <div className="card">

            <img
              src={EmployeeTracker}
              alt="Employee-Tracker"
              class="card-img-top"
            />

            <div className="card-body">
              <a href="https://github.com/janellephalon/employee-depot" target="_blank" rel="noreferrer">
              <button className="button">GitHub</button>
              </a>
              <p className="card-body-text text-justify">
              This application is designed to demonstrate how to allow non-developers to easily view and interact with informations stored in databases. The goal is to build a command-line application from scratch to manage a company's employee database, using Node.js, Inquirer, and MySQL.
              </p>
            </div>
          </div>
        </div>

        {/* Buget Tracker Card */}
        <div className="col-5 center">
          <div className="card">

            <img
              src={BudgetTracker}
              alt="Budget-Tracker"
              class="card-img-top"
            />

            <div className="card-body">
              <a href="https://github.com/janellephalon/offline-budget-tracker" target="_blank" rel="noreferrer">
              <button className="button">GitHub</button>
              </a>
              <p className="card-body-text text-justify">
              This application is designed to give users a fast and easy way to track their money. The goal is to modify the starter code to allow for offline access and functionality.
              </p>
            </div>
          </div>
        </div>

      {/* Note Taker Card */}
        <div className="col-5 center">
          <div className="card">

            <img
              src={NoteTaker}
              alt="Note-Taker"
              class="card-img-top"
            />

            <div className="card-body">
              <a href="https://github.com/janellephalon/remind-me-note-taker" target="_blank" rel="noreferrer">
              <button className="button">GitHub</button>
              </a>
              <p className="card-body-text text-justify">
              The goal of this project is to modify the starter code to create an application called Note Taker, which uses Express.js backend to save and retreive note data from a JSON file. The application is designed to write, save, and delete notes - helping users stay organized and focused throughout their busy day(s)!
              </p>
            </div>
          </div>
        </div>

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

 export default Portfolio;
