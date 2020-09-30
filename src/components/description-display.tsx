import React, {useMemo, useEffect, useState} from 'react';
import DescriptionDisplay from '../utils/description-display';

export default ({className}) => {
    const descriptionDisplay = useMemo(()=>new DescriptionDisplay(35), []);
    const [descriptionString, setDescriptionString] = useState('');
    useEffect(()=>{
        let timeout = null;
        const tick = ()=>{
            setDescriptionString(descriptionDisplay.getNextString());
            timeout = setTimeout(tick, Math.random()*300);
        };
        tick();

        return ()=>{
            if(timeout) clearTimeout(timeout);
        }
    }, []);

    return (
        <div className={`DescriptionDisplay ${className}`}>
            <p>{descriptionString}</p>
        </div>
    );
}
