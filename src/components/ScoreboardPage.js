import React from 'react';
import LevelsSelector from './LevelsSelector';
import Scoreboard from './Scoreboard';

export default function ScoreboardPage() {

    function checkLevel(level) {
        setSelectedLevel(level)
    }

    const [selectedLevel, setSelectedLevel] = React.useState('level 1')

    return (
        <div>
            <LevelsSelector scoreboard = {true} handleClick={checkLevel}/>
            <Scoreboard level={selectedLevel}/>
        </div>
    )
}