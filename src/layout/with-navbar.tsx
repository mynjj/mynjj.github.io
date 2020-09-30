import React from 'react';
import withDefaultWrapper from './with-default-wrapper';
import Navbar from './navbar/navbar';

export default Page=> withDefaultWrapper(() => (
    <>
        <Navbar />
        <Page />
    </>
));
