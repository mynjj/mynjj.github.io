import React, {useState, useEffect, useCallback} from 'react';
import TypingAnimation from '../components/TypingAnimation';
import SEO from '../components/SEO';
import cvPdf from '../public-cv.pdf';
import {MdEmail} from 'react-icons/md';
import {FaGithub, FaLinkedin} from 'react-icons/fa';

import "../styles/index.scss";

const idleTime = 700;
const messages = [
  'Hi!!!',
  "Hi... I'm Joshua.",
  "Hi... I'm Joshua!",
];

export default () => {
  const [messageIndex, setMessageIndex] = useState(0);
  const [greetingFinished, setGreetingFinished] = useState(false);
  const nextMessage = useCallback(()=>{
    if(messageIndex>=messages.length-1){
      setTimeout(()=>setGreetingFinished(true), idleTime);
    }
    else{
      setTimeout(
        ()=>setMessageIndex(i=>i<messages.length-1?i+1:i),
        idleTime
      );
    }
  }, [messageIndex]);
  return (
    <>
      <SEO title="Software Developer"/>
      <main>
        <h1 className="header-message">
          <TypingAnimation
            message={messages[messageIndex]}
            onMessageTyped={nextMessage}
          />
        </h1>
        <div className={`links-bar ${greetingFinished?'show':''}`}>
          <a href="https://github.com/mynjj" target="_blank">
            <div className="link-icon">
              <FaGithub/>
            </div>
          </a>
          <a target="_blank" href="https://www.linkedin.com/in/joshua-mart%C3%ADnez-941668145/">
            <div className="link-icon">
              <FaLinkedin/>
            </div>
          </a>
          <a target="_blank" href={cvPdf}>
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
      </main>
    </>
  );
}
