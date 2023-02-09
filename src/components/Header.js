import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {

    const logoImg = require('../assets/logo-waldo-sombra.png');

    const styleHeader = {
        height: '130px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginLeft: '-20px'
    }

    const styleLink = {
        color: 'white',
        padding: '8px 12px',
        textDecoration: 'none',
        borderRadius: '5px',
        fontWeight: 'bold',
        backgroundColor: '#0CABEB'
    }

    return (
        <header className='default-container' style={{backgroundColor: '#fafafa'}}>
            <div style={styleHeader}>
                <img src={logoImg} alt='logo' style={{maxHeight: '100%'}}/>
                <div style={{display: 'flex', gap: '20px'}}>
                    <Link to='/' style={styleLink}>Home </Link>
                    <Link to='/scoreboard' style={styleLink}>Scoreboard</Link>
                    <Link style={styleLink}>About</Link>
                </div>
            </div>
        </header>
    )
}