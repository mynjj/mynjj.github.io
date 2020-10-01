import React from 'react';
import {Helmet} from 'react-helmet';
import "animate.css";
import "../styles/general.scss";

export default Page => () => {
    return (
        <>
            <Helmet>
                <title>Joshua Martínez</title>
            </Helmet>
            <Page/>
        </>
    );
};

