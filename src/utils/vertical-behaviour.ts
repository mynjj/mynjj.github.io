import {useState, useCallback, useEffect} from 'react';

export const downConfig = {touchConfig: {dYThreshold: -150}, scrollConfig: {linesThreshold: 10, scrollTimeout: 100}};
export const upConfig = {touchConfig: {dYThreshold: 150}, scrollConfig: {linesThreshold: -10, scrollTimeout: 100}};

export const useVerticalBehaviour = ({callback, touchConfig: {dYThreshold}, scrollConfig: {linesThreshold, scrollTimeout}})=>{
  // Touch detection
  const [swiped, setSwiped] = useState(0);
  const [lastYTouch, setLastYTouch] = useState(null);
  const onTouchStart = useCallback((e)=>{
    const y = e.touches[0].clientY;
    setLastYTouch(y);
  }, []);
  const onTouchMove = useCallback((e)=>{
    const y = e.touches[0].clientY;
    setSwiped(s=>s+(y-lastYTouch));
    setLastYTouch(y);
  }, [lastYTouch]);
  const onTouchEnd = useCallback(()=>setSwiped(0), []);
  const triggeredTouch = useCallback((v)=>{
    if(dYThreshold>0){
      return v>dYThreshold;
    }
    return v<dYThreshold;
  }, [dYThreshold]);

  useEffect(()=>{
    if(triggeredTouch(swiped)){
      callback();
    }
  }, [swiped, callback, triggeredTouch]);


  // Scroll wheel detection
  const [scrolled, setScrolled] = useState(0);
  const onWheel = useCallback(e=>{
    const dY = e.deltaY;
    setScrolled(s=>s+dY);
  }, []);
  const triggeredScroll = useCallback((v)=>{
    if(linesThreshold>0){
      return v>linesThreshold;
    }
    return v<linesThreshold;
  }, [linesThreshold]);
  useEffect(()=>{
    if(triggeredScroll(scrolled)){
      callback();
    }
    const id = setTimeout(()=>setScrolled(0), scrollTimeout);
    return ()=>clearTimeout(id);
  }, [scrolled, callback]);



  return {
    containerProps: {
      onTouchStart,
      onTouchMove,
      onTouchEnd,
      onWheel
    }
  }
};
