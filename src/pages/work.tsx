import React from 'react';
import withNavbar from '../layout/with-navbar';

const employers = {
    tide: {
        name: 'TIDE',
        description: 'Mexican company focused on highly customized software solutions.',
        work: ''
    },
    vtsoftware: {
        name: 'VtSoftware'
    }
};

const projects = {
    vtinventory: {
        employer: 'vtsoftware',
        technologies: {
            php: '',
            laravel: '',
            jquery: ''
        }
    },
    vtemployees: {
        employer: 'vtsoftware',
        technologies: {
            php: '',
            laravel: '',
            vue: ''
        }
    },
    timetide: {
        employer: 'tide',
        technologies: {
            java: 'The ',
            c : '',
            rpi: '',
            linux: '',
            node: '',
            react: ''
        },
        description: 'An employee time clock, integrated to the payroll software.',
        work: 'I mainly integrated other sensors, more hardware, added more features.'
    },
    tgleapp: {
        employer: 'tide',
        technologies: {
            reactnative: '',
            sails: '',
            node: '',
            sysadmin: ''
        }
    },
    cocacolasoccer: {
        employer: 'tide',
        technologies: {
            python: '',
            rpi: ''
        },
        description: '',
        work: ''
    },
    iotmonitor: {
        employer: 'tide'
    },
    tgle: {
        employer: 'tide',
        description: 'General manteinance and implementation of features',
        technologies: {
            css: '',
            react: '',
            php: '',
            symfony: '',
        }
    },
    davinci: {
        employer: 'tide'
    },
    prideparade: {
        employer: 'tide',
        technologies: {
            phaser: '',
            node: '',
            typescript: '',
            aws: '',
            socketio: ''
        }
    }
};

const Work = () => (
    <div className="container">
        <h1 className="subtitle is-1">Projects</h1>
        <div className="tile is-ancestor">
        </div>
    </div>
);

export default withNavbar(Work);
