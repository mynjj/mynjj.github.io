import React, {useState, useEffect, useCallback} from 'react';

const blinkerMs = 730;
const toTypeMs = 120;
const toDeleteMs = 80;

const getAction = (current, target) => {
  let i=0;
  for(i=0; current[i]&&target[i]&&current[i]==target[i];i++);
  const toDelete = current.substring(i, current.length);
  if(toDelete){
    return {type: 'delete'};
  }
  const toAdd = target.substring(i, target.length);
  if(toAdd){
    return {type: 'add', value: toAdd[0]};
  }
  return {type: 'none'};
};

export default ({message, onMessageTyped})=>{
  const [typed, setTyped] = useState('');
  const [blinkerVisible, setBlinkerVisible] = useState(false);

  // Blinker effect
  useEffect(()=>{
    const id = setInterval(()=>{
      if(!blinkerVisible){
        setBlinkerVisible(true);
      }
      else {
        setBlinkerVisible(false);
      }
    }, blinkerMs);
    return ()=>clearInterval(id);
  }, [blinkerVisible]);

  const applyAction = useCallback((action)=>{
    setBlinkerVisible(true);
    if(action.type==="delete"){
      setTyped(t=>t.slice(0, t.length-1));
    }
    if(action.type==="add"){
      setTyped(t=>t+action.value);
    }
  }, []);

  // Typing effect
  useEffect(()=>{
    const action = getAction(typed, message);
    if(action.type==="none"){
      onMessageTyped();
      return;
    }
    let toWait = toTypeMs;
    if(action.type==="delete"){
      toWait = toDeleteMs;
    }
    setTimeout(()=>applyAction(action), toWait)
  }, [typed, applyAction, message]);


  const bClass = blinkerVisible?'':'hidden';
  return (
    <div className='typed-container'>{typed}<div className={`text-cursor ${bClass}`} /></div>
  )
}
