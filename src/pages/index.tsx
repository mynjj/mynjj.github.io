import React, {useState, useEffect, useCallback, useRef} from 'react';
import TypingAnimation from '../components/TypingAnimation';
import SEO from '../components/SEO';
import LinksBar from '../components/LinksBar';
import cvPdf from '../public-cv.pdf';
import {MdEmail} from 'react-icons/md';
import {FaGithub, FaLinkedin} from 'react-icons/fa';
import {IoIosArrowDown} from 'react-icons/io';
import {navigate} from 'gatsby';
import {useVerticalBehaviour, downConfig} from '../utils/vertical-behaviour';

import "../styles/main.scss";

const idleTime = 700; // Pauses between typed messages
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

  const [leaving, setLeaving] = useState(false);
  const nextPage = useCallback(()=>{
    setLeaving(true);
    setTimeout(()=>navigate('/hello'), 2200); // should be enough time for the leaving animation
  }, []);

  const {containerProps} = useVerticalBehaviour({
    ...downConfig,
    callback: nextPage
  });

  return (
    <>
      <SEO title="Software Developer"/>
      <main className={`landing-page ${leaving?'leaving':''}`}
        {...containerProps}
      >
        <h1 className="header-message">
          <TypingAnimation
            message={messages[messageIndex]}
            onMessageTyped={nextMessage}
          />
        </h1>
        <LinksBar className={greetingFinished?'show':''} />
      </main>
      <div className={`scroll-more-bar ${greetingFinished?'glow':''}`}>
        <IoIosArrowDown onClick={nextPage} />
      </div>
      <div className={`next-page ${leaving?'grow':''}`}/>
    </>
  );
}
