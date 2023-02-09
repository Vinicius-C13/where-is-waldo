import React from 'react';
import LevelsSelector from './LevelsSelector';
import Scoreboard from './Scoreboard';

export default function ScoreboardPage() {
    return (
        <div>
            <LevelsSelector scoreboard = {true} />
            <Scoreboard />
        </div>
    )
}