import React from 'react';

export default function Home() {
  return (
  <div className="">

    {/* Hero Image */}
    <div className="hero-image">
      <div className="hero-text">
        
        <h1 className="display-1">Welcome all</h1> 
        <p className="display-6">
         I'M JANELLE PHALON
        </p> 
        <p className="text-center">
        A designer and developer devoted to crafting beautiful web experiences focused on simplicity and purpose. 
        </p>
        <button onclick="#one-min" className="button"><em>Let's work together...</em></button>

        </div>
        </div>
        

    {/* Icons
    <div className="icons">
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
    </div> */}

    
    <div className="row">

    <div className="about-me-section">

      {/* About Me Header */}
      <h1 className="text-center about-me">GET TO KNOW ME IN</h1>
      <h1 className="text-center about-me-2">one minute or less</h1>

      <p className="one-min col-4">
      FAVORITE FICTION BOOK:<br/>
      <strong><em>The Lovely Bones</em> 
      <br/>
      by Alice Sebold</strong>
      </p>

      <p className="one-min col-4">
      FAVORITE FOOD:<br/>
      <strong>Penne Vodka
      <br/>
      or Cheeseburgers</strong>  
      </p>

      <p className="one-min col-4">
      FAVORITE QUOTE:<br/>
      <strong>"Tomorrow is a direct result of what you choose to do today"</strong>
      </p>

      <p className="one-min col-4">
      FAVORITE SEASON:<br/>
      <strong>Autumm
        <br/>
        or Spring
      </strong>
      </p>

      <p className="one-min col-4">
      FAVORITE HOBBY:<br/>
      <strong>Spending time
        <br/>
        outdoors
      </strong>
      </p>

      <p className="one-min col-4">
      FAVORITE SHOW:<br/>
      <strong>Sopranos
        <br/>
        or Breaking Bad 
      </strong>
      </p>

      </div>
 

    {/* From Teacher to Developer */}
    <div className="second-intro">

       <h1 className="second-header display-2 text-center">
        From Teacher to Developer
      </h1>

      <div className="">

      <p className="about-teaching text-justify">
        As someone who loves learning, pursuing a career education was an obvious choice. When delivering instruction, students' fed off my thirst for knowledge, creating a climate that not only motivated, but challenged all learners. When the pandemic struck, however, I found that I was lacking the resources necessary to create engaging lessons for my students - Hence, how I got here. 
        <br></br>
        <br></br>
        The scarcity of online teaching tools helped spark a new level of creativity within me. Motivated by the strength of my ideas, I enrolled in Columbia Engineering's Coding Bootcamp with one goal in mind - to develop innovative, simple solutions for everyday challenges. 
      </p>

      <div className="profile-photo center"></div>
      
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

  </div>
  );
}
