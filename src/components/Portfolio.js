import React from 'react';
import Project from './Project';

const Portfolio = () => {
  return (
    <div>
      <h1>Portfolio</h1>
      <div className="projects-grid">
        <Project
          title="Marvelous Rentals"
          description="A project for managing vacation rentals."
          githubLink="https://github.com/barosa19/marvelous-rental"
          deployedLink="https://barosa19.github.io/marvelous-rental/"
          imageSrc={`${process.env.PUBLIC_URL}/images/MarvRentals.jpg`}
        />
        <Project
          title="Password Generator"
          description="A tool for generating secure passwords."
          githubLink="https://github.com/PainPeddler/Challenge3"
          deployedLink="https://painpeddler.github.io/Challenge3/"
          imageSrc={`${process.env.PUBLIC_URL}/images/PassGen.jpg`}
        />
        <Project
          title="Zenify"
          description="A stress relief app for promoting relaxation."
          githubLink="https://github.com/Cmbailey089/zenify/tree/main/server"
          deployedLink="https://example.com/zenify"
          imageSrc={`${process.env.PUBLIC_URL}/images/Zenify.jpg`}
        />
        {/* Add more Project components for other projects */}
      </div>
    </div>
  );
};

export default Portfolio;
