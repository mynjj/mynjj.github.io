import React, { useState, useCallback } from 'react';
import LinksBar from '../components/LinksBar';
import {navigate} from 'gatsby';
import { useVerticalBehaviour, upConfig } from '../utils/vertical-behaviour';
import SEO from '../components/SEO';

import '../styles/hello.scss';

export default () => {
  const [leaving, setLeaving] = useState(false);
  const homePage = useCallback(()=>{
    setLeaving(true);
    setTimeout(()=>navigate('/'), 2200)
  }, []);
  const {containerProps} = useVerticalBehaviour({
    ...upConfig,
    callback: homePage
  });
  return (
    <>
      <SEO title="Software Developer"/>
      <div className={`prev-page ${leaving?'grow':''}`}/>
      <main className={`hello-page ${leaving?'leaving':''}`}
        {...containerProps}>
        <section className="description">
          <h1>Hi!</h1>
          <p>My name is Joshua 🇲🇽. </p>
          <p>I love thinking and creating with technology. </p>
          <p>I'm currently an MSc. student in Computer Science, at ITU, in Copenhagen 🇩🇰.</p>
          <p>Feel free to reach me! 💭🛠️💻</p>
        </section>
        <LinksBar />
      </main>
    </>
  );
};
