import './task5.css'
import React, { useState } from 'react';

function Q5task() {
  const [isLoginFormVisible, setIsLoginFormVisible] = useState(false);

  const handleSignUpClick = () => {
    setIsLoginFormVisible(false); // Show signup form
  };

  const handleLoginClick = () => {
    setIsLoginFormVisible(true); // Show login form
  };

  return (
    <div>
      {!isLoginFormVisible && (
        <div id='1'>
          <h2>Sign Up for Free</h2>
          <input type="text" placeholder="First Name*" />
          <input type="text" placeholder="Last Name*" />
          <input type="email" placeholder="Email Address*" />
          <input type="password" placeholder="Set A Password*" />
          <button onClick={handleSignUpClick}>GET STARTED</button>
          <button onClick={handleLoginClick}>Log In</button>
        </div>
      )}

      {isLoginFormVisible && (
        <div>
          <h2>Log In</h2>
          <input type="email" placeholder="Email Address*" />
          <input type="password" placeholder="Password*" />
          <button>Log In</button>
          <button onClick={handleSignUpClick}>Sign Up</button>
        </div>
      )}
    </div>
  );
}

export default Q5task;