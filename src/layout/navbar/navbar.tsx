import React, {useState, useCallback} from 'react';
import {Link} from 'gatsby';
import githubLogo from './github.png';
import linkedInLogo from './linkedin.png';
import "./navbar.scss";
import cvPdf from "../../public-cv.pdf";

const Github = ({className=''}) => (
    <a className={className} target="_blank" href="https://github.com/mynjj">
        <img src={githubLogo}/>
    </a>
);

const LinkedIn = ({className=''}) => (
    <a className={className} target="_blank" href="https://www.linkedin.com/in/joshua-mart%C3%ADnez-941668145/">
        <img src={linkedInLogo}/>
    </a>
);


const Navbar = () => {
    const [navOpen, setNavOpen] = useState(false);
    const toggleNavigation = useCallback(()=>setNavOpen(o=>!o), []);
    return (
        <nav className="Navbar navbar is-transparent" role="navigation">
            <div className="navbar-brand">
                <a className="navbar-item" href="/">
                    <h4 className="subtitle is-4">
                        mynjj
                    </h4>
                </a>
                <h4 className="navbar-item is-hidden-desktop is-size-6 has-text-weight-semibold">Software Developer</h4>
                <a className={`navbar-burger ${navOpen&&'is-active'}`} onClick={toggleNavigation}>
                    <span></span>
                    <span></span>
                    <span></span>
                </a>
            </div>
            <div className={`navbar-menu animate__animated animate__slideInDown animate__faster ${navOpen&&'is-active'}`}>
                <div className="navbar-start is-hidden-touch">
                    <h4 className="navbar-item is-size-6 has-text-weight-semibold">Software Developer</h4>
                    <Github className="navbar-item" />
                    <LinkedIn className="navbar-item" />
                </div>
                <div className="navbar-end has-text-centered">
                    <div className="navbar-item is-hidden-desktop is-flex mobile-links">
                        <Github/>
                        <LinkedIn className="ml-2" />
                    </div>
                    <div className="navbar-item">
                        <a target="_blank" href="mailto:djoshuamartinezpineda@gmail.com">Contact</a>
                    </div>
                    <div className="navbar-item">
                        <a target="_blank" href={cvPdf}>CV</a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
