import React from 'react';
import Scoreboard from './Scoreboard';
import LevelsSelector from './LevelsSelector';
import { Link } from 'react-router-dom';
 
export default function MainPage() {

    const styleLink = {
        color: 'white',
        padding: '8px 12px',
        textDecoration: 'none',
        borderRadius: '5px',
        fontWeight: 'bold',
        backgroundColor: '#0CABEB'
    }

    const styleScrBrd = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fafafa',
        padding: '60px 30px',
        borderRadius: '5px'
    }


    return (
        <div>
            <LevelsSelector />
            <div className="default-container">
                <div className="go-to-scoreboard" style={styleScrBrd}>
                    <h1>
                        Are you good at find Waldo?<br/>
                        <span style={{color: '#ec3d38'}}>View the leaderboard</span>
                    </h1>
                    <Link to='/scoreboard' style={{...styleLink, backgroundColor: '#ec3d38', height: 'fit-content', fontSize: '24px'}}>Scoreboard</Link>
                </div>
            </div>
        </div>
    )
}