import React, { useState } from 'react';
import { checkPassword, validateEmail } from '../utils/helpers';

function Form() {
  
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    
    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'userName') {
      setUserName(inputValue);
    } else if (inputType === 'password') {
      setPassword(inputValue);
    }
  }

  const handleFormSubmit = (e) => {
    
    e.preventDefault();

    
    if (!validateEmail(email) || !userName) {
      setErrorMessage('Email or username is invalid');
      return;
    }
    if (!checkPassword(password)) {
      setErrorMessage(
        `Choose a more secure password for the account: ${userName}`
      );
      return;
    }

    setUserName('');
    setPassword('');
    setEmail('');
    alert(`Hello ${userName}`);
  };

  return (
    
    <section>

      {/* Hero Image and Text */}
      <div className="hero-image-secondary">
          <div className="hero-text">

          <h1 className="display-3">Contact</h1>
          <p className="display-6">Form</p> 

          </div>
        </div>

    <div className="form-style container">

      <h1 className="display-3 text-center">Let's chat...</h1>
      <form className="form">
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="email"
        />
        <input
          value={userName}
          name="userName"
          onChange={handleInputChange}
          type="text"
          placeholder="username"
        />
        <input 
          value={password}
          name="password"
          type="text"
          placeholder="text"
          onChange={handleInputChange}
        />
        <button className="gallery-button-1" type="button" onClick={handleFormSubmit} >
          Submit
        </button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
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
    </section>
  );
}

export default Form;


