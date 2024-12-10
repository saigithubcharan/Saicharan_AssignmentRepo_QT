import React from 'react';

function Q4task() {
  return (
    <div className="w3-container">
      {/* Navigation Bar */}
      <div className="w3-bar w3-black">
        <a href="#" className="w3-bar-item w3-button">Home</a>
        <a href="#" className="w3-bar-item w3-button">Recipes</a>
        <a href="#" className="w3-bar-item w3-button">About</a>
        <a href="#" className="w3-bar-item w3-button">Contact</a>
        <a href="#" className="w3-bar-item w3-button w3-right">Search</a>
      </div>

      {/* Hero Section */}
      <div id='main' className="w3-display-container w3-wide w3-center">
        <img src="https://www.w3schools.com/w3images/chef.jpg" alt="Food" className="w3-image" />
        <div className="w3-display-middle w3-black w3-padding">Tasty Recipes for You</div>
      </div>

      {/* Main Content */}
      <div className="w3-row-padding w3-margin-top">
        <div className="w3-third">
          <div className="w3-card">
            <img src="https://www.w3schools.com/w3images/sandwich.jpg" alt="Recipe" className="w3-image" />
            <div className="w3-container">
              <h3>Recipe 1</h3>
              <p>Learn how to make this delicious dish with simple ingredients.</p>
              <button className="w3-button w3-black">Read More</button>
            </div>
          </div>
        </div>
        <div className="w3-third">
          <div className="w3-card">
            <img src="https://www.w3schools.com/w3images/steak.jpg" alt="Recipe" className="w3-image" />
            <div className="w3-container">
              <h3>Recipe 2</h3>
              <p>Discover the step-by-step process to make this tasty treat.</p>
              <button className="w3-button w3-black">Read More</button>
            </div>
          </div>
        </div>
        <div className="w3-third">
          <div className="w3-card">
            <img src="https://www.w3schools.com/w3images/cherries.jpg" alt="Recipe" className="w3-image" />
            <div className="w3-container">
              <h3>Recipe 3</h3>
              <p>Perfect for any occasion, learn how to make this delightful dish.</p>
              <button className="w3-button w3-black">Read More</button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="w3-container w3-black w3-center w3-padding-16">
        <p>&copy; 2024 Food Blog. All Rights Reserved.</p>
      </footer>

      {/* Embedded CSS */}
      <style jsx="true">
        {`
          .w3-bar {
            background-color: #000;
            margin-bottom: 20px;
          }
            #main{
            margin-bottom: 20px;
            }

          .w3-bar-item {
            color: #fff;
            padding: 10px;
            text-decoration: none;
            display: inline-block;
          }

          .w3-bar-item:hover {
            background-color: #575757;
          }

          .w3-display-container {
            position: relative;
            width: 100%;
            height: auto;
          }

          .w3-image {
            width: 100%;
            display: block;
          }

          .w3-display-middle {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            color: #fff;
            padding: 20px;
            border-radius: 8px;
            background-color: rgba(0, 0, 0, 0.7);
            font-size: 24px;
          }

          .w3-row-padding {
            display: flex;
            gap: 20px;
            justify-content: center;
          }

          .w3-card {
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
            border-radius: 8px;
            overflow: hidden;
            background-color: #fff;
            text-align: center;
          }

          .w3-card img {
            width: 100%;
            height: auto;
          }

          .w3-container {
            padding: 20px;
          }

          .w3-button {
            background-color: #000;
            color: #fff;
            border: none;
            border-radius: 4px;
            padding: 10px 20px;
            cursor: pointer;
          }

          .w3-button:hover {
            background-color: #575757;
          }

          footer {
            padding: 20px;
          }
        `}
      </style>
    </div>
  );
}

export default Q4task;
