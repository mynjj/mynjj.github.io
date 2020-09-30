import React from 'react';
import "../styles/index.scss";
import withNavbar from '../layout/with-navbar';
import DescriptionDisplay from '../components/description-display';

const Index = () => (
    <>
        <div className="parallax-container">
            <div className="hero">
                <div className="hero-body">
                    <div className="container">
                        <h3 className="title block is-3 has-text-right">
                            Joshua Martínez
                        </h3>
                        <DescriptionDisplay className="has-text-centered block"/>
                        <div className="scrollable">
                            <h1 className="subtitle is-1 has-text-centered">Work & Projects</h1>
                            <div className="tile is-ancestor">
                                <div className="tile is-vertical">
                                    <div className="tile">
                                        <div className="tile is-parent is-vertical">
                                            <div className="tile is-child box">
                                                <h3 className="title is-4">Coca-Cola promotional game</h3>
                                                <p>Game for marketing stands of Coca-Cola. Soccer video game with Python/Pygame controlled with a Wii controller running on Raspberry Pi's.</p>
                                            </div>
                                            <div className="tile is-child box dark-box">
                                                <h3 className="title is-4">Airport Lounge management software</h3>
                                                <p>Software spawning several operations of the company: payroll, restaurant management, warehouse. Frontend with React, backend with PHP/Symfony.</p>
                                            </div>
                                        </div>
                                        <div className="tile is-parent">
                                            <div className="tile is-child box">
                                                <h3 className="title is-4">IOT devices monitor</h3>
                                                <p>Central control of IOT devices for software updates, and remote control for technical support. Management of server SSH tunnels with Node.js.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tile is-parent">
                                        <div className="tile is-child box">
                                            <h3 className="title is-4">Airport Lounge App</h3>
                                            <p>Android and iOS app using React Native, to schedule services, track your flight, among other things. Integrating to an existing backend and new features added to a Backend-for-Frontend running on Node.js.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="tile is-parent is-4">
                                    <div className="tile is-child box dark-box">
                                        <h3 className="title is-4">Employee time clock</h3>
                                        <p>Raspberry pi's with multiple identification features, integrated to an existing payroll software. Continuously updating the server, but also capable of working offline.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="tile is-ancestor">
                                <div className="tile is-parent is-4">
                                    <div className="tile box is-child">
                                        <h3 className="title is-4">Restaurant software</h3>
                                        <p>Restaurant software with several custom requirements, integrating to ticket printers, map of the restaurant.</p>
                                    </div>
                                </div>
                                <div className="tile is-parent">
                                    <div className="tile box dark-box is-child">
                                        <h3 className="title is-4">Scotiabank's Virtual Pride Parade</h3>
                                        <p>Basic MMORPG resembling Mexico City streets for 2020's stay@home pride parade. WebSocket servers on Node.js running on several AWS EC2 instances for redundancy. </p>
                                    </div>
                                </div>
                            </div>
                            <div className="tile is-ancestor">
                                <div className="tile is-parent is-8">
                                    <div className="tile box dark-box is-child">
                                        <h3 className="title is-4">Vacation clubs payroll software</h3>
                                        <p>Integrating an existing sales system to calculate the commissions on the sales processes. PHP/Laravel backend with Vue.js </p>
                                    </div>
                                </div>
                                <div className="tile is-parent">
                                    <div className="tile box is-child">
                                        <h3 className="title is-4">Hotel inventory software</h3>
                                        <p>Solution to keep track of hotel assets. PHP/Laravel with an SQLServer db as backend and a jQuery frontend </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
);

export default withNavbar(Index);
