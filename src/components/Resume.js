import React from 'react';

const Resume = () => {
  return (
    <div>
      <h1>Resume</h1>
      <h2>Proficiencies</h2>
      <ul className="proficiencies-list">
        <li>Advanced mathematics understanding</li>
        <li>Worked with following languages and software:</li>
        <ul className="sub-list">
          <li>CSS</li>
          <li>Javascript</li>
          <li>HTML</li>
          <li>Assembly</li>
          <li>C</li>
          <li>Java</li>
          <li>MySQL</li>
          <li>MongoDB</li>
          <li>Express</li>
          <li>Node</li>
          <li>API usage</li>
          <li>MATLAB</li>
          <li>Excel spreadsheets</li>
          {/* Add more proficiencies */}
        </ul>
      </ul>
    </div>
  );
};

export default Resume;
