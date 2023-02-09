import React from 'react';
import LevelItem from './LevelItem';

export default function LevelsSelector(props) {

    const style ={
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
        justifyContent: 'center',
        columnGap: '20px',
        rowGap: '20px'
    }

    let items = [
        {
            img: 'waldo-praia.png',
            level: 'level 1'
        },
        {
            img: 'waldo-neve.jpg',
            level: 'level 2'
        },
        {
            img: 'waldo-pista.jpg',
            level: 'level 3'
        }
    ]

    return (
        <div className="default-container">
            <div className='levels-selector' style={style}>
                {items.map((item) => {
                    return <LevelItem key={item.level} img={item.img} level={item.level} scoreboard = {props.scoreboard} />
                })}
            </div>
        </div>
    )
}