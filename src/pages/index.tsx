import React, {useState, useEffect, useCallback} from 'react';
import cvPdf from '../public-cv.pdf';
import {MdEmail} from 'react-icons/md';
import {FaGithub, FaLinkedin} from 'react-icons/fa';

import "../styles/index.scss";

const typeAction = (current, target)=>{
  let i=0;
  for(i=0; current[i]&&target[i]&&current[i]==target[i];i++);
  return {
    toKeep: current.substring(0,i),
    toDelete: current.substring(i, current.length),
    toAdd: target.substring(i, target.length)
  };
};

const Type = ({message}) => {
  const [typed, setTyped] = useState('');
  const [blinkingClass, setBlinkingClass] = useState('hidden');

  const blinkingInterval = useCallback(()=>{
    setBlinkingClass('');
  }, []);

  useEffect(()=>{
    const tId = setInterval(()=>{
      if(!blinkingClass){
        setBlinkingClass('hidden');
      }
      else {
        setBlinkingClass('');
      }
    }, 730);
    return ()=>{
      clearInterval(tId);
    };
  }, [blinkingClass]);

  const executeAction = useCallback(()=>{
    setTyped(t=>{
      const action = typeAction(t, message);
      if(action.toDelete){
        blinkingInterval();
        return t.slice(0, t.length-1);
      }
      if(action.toAdd){
        blinkingInterval();
        return t+action.toAdd[0];
      }
      return t;
    })
  }, [message, blinkingInterval]);
  useEffect(()=>{
    const tId = setTimeout(executeAction, 200);
    return ()=>clearTimeout(tId);
  }, [executeAction, typed]);
  return (
    <>{typed}<div className={`text-cursor ${blinkingClass}`}/></>
  );
};

export default () => (
  <main>
    <h1 className="header-message"><Type message="Hi... I'm Joshua!"/></h1>
    <div className="links-bar">
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
);
