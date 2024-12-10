import React, { useEffect } from 'react';

function Task() {
  useEffect(() => {
    const handleScroll = () => {
      const featuresSection = document.getElementById('features');
      const whatsappIcon = document.querySelector('.whatsapp-icon');

      const featuresPosition = featuresSection.getBoundingClientRect();
      if (featuresPosition.top <= 80) {
        whatsappIcon.style.display = 'flex';
      } else {
        whatsappIcon.style.display = 'none';
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <style>
        {`
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }

          body {
            font-family: Arial, sans-serif;
            display: grid;
            grid-template-rows: auto 1fr auto;
            grid-template-columns: 1fr;
            padding-top: 70px;
          }

          header {
            position: fixed;
            top: 0%;
            left: 0%;
            width: 100%;
            grid-row: 1;
            grid-column: 1 / -1;
            background-color: whitesmoke;
            padding: 15px 0px;
          }

          .navbar {
            max-width: 1200px;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            align-items: center;
          }

          .brands h2 {
            font-size: 30px;
            color: black;
          }

          .brands p {
            font-size: 14px;
            color: grey;
          }

          nav {
            flex: 1;
          }

          ul.navigations {
            list-style: none;
            display: flex;
            justify-content: flex-end;
          }

          ul.navigations li {
            margin-left: 40px;
          }

          ul.navigations a {
            text-decoration: none;
            color: black;
            font-weight: 100;
            font-size: 16px;
          }

          ul.navigations a:hover {
            color: blue;
          }

          .headline {
            grid-row: 2;
            grid-column: 1 / -1;
            color: white;
            text-align: center;
            padding-top: 50px;
            padding-bottom: 30px;
            height: 250px;
            background-image: url('https://cdn.prod.website-files.com/602a043d17d7780d1cce562e/64c9df28bf51008297d9cec9_64c9de598fa2f2b147ff7e49_63c7b68cc43aef8c126294f8_1.webp');
            background-size: cover;
            background-position: center;
          }

          .headline h1 {
            font-size: 36px;
            margin-bottom: 20px;
            font-weight: 400;
          }

          .headline p {
            font-size: 15px;
            max-width: 650px;
            margin: 0 auto 28px;
          }

          .headline .readmore {
            padding: 12px 12px;
            background-color: blue;
            color: white;
            text-decoration: none;
            border-radius: 20px;
          }

          .headline .readmore:hover {
            background-color: grey;
          }

          .Features {
            grid-row: 3;
            grid-column: 1 / -1;
            background-color: white;
            padding: 40px;
            text-align: center;
          }

          .Features h2 {
            font-size: 32px;
            margin-bottom: 40px;
          }

          .Feature-cards {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 20px;
          }

          .Feature {
            background-color: whitesmoke;
            padding: 20px;
            border-radius: 8px;
            text-align: center;
          }

          .Feature i {
            font-size: 40px;
          }

          .Feature h3 {
            margin: 20px 0;
            font-size: 20px;
            font-weight: 400;
          }

          .Feature p {
            color: gray;
            margin-bottom: 15px;
          }

          .Feature a {
            color: #007bff;
            text-decoration: none;
          }

          .stats {
            grid-row: 4;
            grid-column: 1 / -1;
            background-color: black;
            color: white;
            padding: 30px 50px 40px 50px;
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            text-align: center;
            gap: 20px;
          }

          .stat h3 {
            font-size: 36px;
            margin: 15px 0;
            font-weight: lighter;
          }

          .stat p {
            color: white;
          }

          .stat i {
            font-size: 40px;
            margin-bottom: 10px;
          }

          footer {
            grid-row: 5;
            grid-column: 1 / -1;
            background-color: whitesmoke;
            padding: 40px 0;
          }

          .container {
            width: 90%;
            max-width: 1200px;
            margin: 0 auto;
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 20px;
          }

          .about, .recentposts, .galleries {
            padding: 0 20px;
          }

          .about p, .recentposts ul {
            padding-top: 20px;
          }

          .recentposts ul li {
            list-style: none;
            padding-left: 10px;
            margin-bottom: 10px;
          }

          .gallery-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 10px;
          }

          .gallery-grid img {
            width: 100%;
            height: auto;
          }

          .whatsapp-icon {
            display: none;
            position: fixed;
            right: 20px;
            bottom: 20px;
            background-color: green;
            color: white;
            font-size: 30px;
            padding: 20px;
            border-radius: 100%;
            text-align: center;
            z-index: 1;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            text-decoration: none;
          }

          .whatsapp-icon i {
            color: white;
            font-size: 40px;
          }

          .whatsapp-icon span {
            font-size: 12px;
            color: white;
            margin-top: 5px;
          }

          .whatsapp-icon:hover {
            background-color: #128C7E;
            cursor: pointer;
          }
        `}
      </style>

      <header>
        <div className="navbar">
          <div className="brands">
            <h2>Flex Business Pro</h2>
            <p>Clean and Modern Business Theme</p>
          </div>
          <nav>
            <ul className="navigations">
              <li><a href="#">Home</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Styleguide</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <div className="headline">
        <h1>Your Awesome Business Theme</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
        </p>
        <a href="#" className="readmore">Read More</a>
      </div>

      <section className="Features" id="features">
        <h2>Our Features</h2>
        <div className="Feature-cards">
          <div className="Feature">
            <i className="icon">💻</i>
            <h3>Fully Responsive</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            <a href="#">Read More</a>
          </div>
          <div className="Feature">
            <i className="icon">👤</i>
            <h3>Trusted Author</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            <a href="#">Read More</a>
          </div>
          <div className="Feature">
            <i className="icon">♻️</i>
            <h3>Reusable Elements</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            <a href="#">Read More</a>
          </div>
        </div>
      </section>

      <section className="stats">
        <div className="stat">
          <i className="icon">&#127942;</i>
          <h3>22</h3>
          <p>Awards Winning</p>
        </div>
        <div className="stat">
          <i className="icon">&#128193;</i>
          <h3>145</h3>
          <p>Finished Projects</p>
        </div>
        <div className="stat">
          <i className="icon">&#9936;</i>
          <h3>349</h3>
          <p>Products Sold</p>
        </div>
        <div className="stat">
          <i className="icon">&#128038;</i>
          <h3>2456</h3>
          <p>Twitter Fans</p>
        </div>
      </section>

      <footer>
        <div className="container">
          <div className="about">
            <h3>About Flex Business Pro</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
            </p>
          </div>
          <div className="recentposts">
            <h3>Recent Posts</h3>
            <ul>
              <li>
                <p style={{ fontSize: 'medium' }}>Fly to London</p> September 18, 2018
              </li>
              <li>
                <p style={{ fontSize: 'medium' }}>Stair Communication</p> September 18, 2018
              </li>
              <li>
                <p style={{ fontSize: 'medium' }}>Do you want to be a robot</p> September 18, 2018
              </li>
            </ul>
          </div>
          <div className="galleries">
            <h3>Galleries</h3>
            <div className="gallery-grid">
              <img src="https://via.placeholder.com/256" alt="Gallery" />
              <img src="https://via.placeholder.com/256" alt="Gallery" />
              <img src="https://via.placeholder.com/256" alt="Gallery" />
              <img src="https://via.placeholder.com/256" alt="Gallery" />
              <img src="https://via.placeholder.com/256" alt="Gallery" />
              <img src="https://via.placeholder.com/256" alt="Gallery" />
            </div>
          </div>
        </div>
      </footer>

      <a href="https://wa.me/yournumber" className="whatsapp-icon">
        <i className="fab fa-whatsapp"></i>
        <span>Chat</span>
      </a>
    </div>
  );
}

export default Task;
