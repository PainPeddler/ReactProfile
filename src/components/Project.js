import React, { useState } from 'react';

const Project = ({ title, description, githubLink, deployedLink, imageSrc }) => {
  const [isHighlighted, setIsHighlighted] = useState(false);

  const handleImageClick = () => {
    window.open(deployedLink, '_blank');
  };

  const handleMouseEnter = () => {
    setIsHighlighted(true);
  };

  const handleMouseLeave = () => {
    setIsHighlighted(false);
  };

  return (
    <div className="project">
      <h3>{title}</h3>
      <div className={`project-image ${isHighlighted ? 'highlighted' : ''}`} onClick={handleImageClick} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <img src={imageSrc} alt={title} />
      </div>
      <p>{description}</p>
      <a href={githubLink}>GitHub Repository</a>
    </div>
  );
};

export default Project;






