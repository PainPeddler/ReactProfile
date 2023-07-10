import React from 'react';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-text">
        <h1>About Me</h1>
        <p>
          Hello, I am John! With a background in electrical engineering, I am quite familiar with technology and proficient in mathematics. My hobbies include running, animals, and playing multiplayer video games.
          I pride myself in my ability to learn and adapt from all experiences, especially when I feel I can optimize something or do it more efficiently in the future.
          This applies both in coding and day-to-day activities.
        </p>
      </div>
      <div className="about-photo">
        <img
          src="https://cottagelife.com/wp-content/uploads/2022/04/shutterstock_120357457.jpg"
          alt="My Photo"
          style={{ maxWidth: '70%', height: 'auto' }}
        />
        <p className="italic-text">
          A cormorant, one of my favorite animals
        </p>
      </div>
    </div>
  );
};

export default About;






