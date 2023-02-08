import React from 'react';
import Scoreboard from './Scoreboard';
import LevelsSelector from './LevelsSelector';
import { Link } from 'react-router-dom';
 
export default function MainPage() {

    const logoImg = require('../assets/logo-waldo-sombra.png');

    const styleHeader = {
        height: '130px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginLeft: '-20px'
    }

    return (
        <div>
            <header className='default-container' style={{backgroundColor: '#fafafa'}}>
                <div style={styleHeader}>
                    <img src={logoImg} alt='logo' style={{maxHeight: '100%'}}/>
                    <div style={{display: 'flex', gap: '20px'}}>
                        <Link>Scoreboard</Link>
                        <Link>About</Link>
                    </div>
                </div>
            </header>
            <LevelsSelector />
            < Scoreboard />
        </div>
    )
}