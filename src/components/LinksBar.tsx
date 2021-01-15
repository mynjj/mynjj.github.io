import React from 'react';
import {MdEmail} from 'react-icons/md';
import {FaGithub, FaLinkedin} from 'react-icons/fa';
import cvPdf from '../public-cv.pdf';

export default ({className=''}) => (
  <div className={`links-bar ${className}`}>
    <a href="https://github.com/mynjj">
      <div className="link-icon">
        <FaGithub/>
      </div>
    </a>
    <a href="https://www.linkedin.com/in/joshua-mart%C3%ADnez-941668145/">
      <div className="link-icon">
        <FaLinkedin/>
      </div>
    </a>
    <a href={cvPdf}>
      <div className="text-icon">
        CV
      </div>
    </a>
    <a href="mailto:djoshuamartinezpineda@gmail.com">
      <div className="link-icon">
        <MdEmail/>
      </div>
    </a>
  </div>
);
