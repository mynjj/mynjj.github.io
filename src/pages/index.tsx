import React from 'react';
import "../styles/index.scss";
import withNavbar from '../layout/with-navbar';
import DescriptionDisplay from '../components/description-display';
import 'simplebar/dist/simplebar.min.css';

const Index = () => (
    <>
        <div className="hero">
            <div className="hero-body">
                <div className="container">
                    <div className="welcome-text">
                        <span className="mr-2">Hi! I'm</span>
                        <h3 className="title is-3 has-text-right">
                            Joshua Martínez
                        </h3>
                        <span className="ml-2"> a </span>
                    </div>
                    <DescriptionDisplay className="has-text-centered block"/>
                </div>
            </div>
        </div>
    </>
);

export default withNavbar(Index);
