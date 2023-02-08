import React from 'react';
import RankItem from './RankItem';

export default function Scoreboard() {

    const styleCont = {
        backgroundColor: '#fafafa',
        marginBottom: '0px',
        paddingBottom: '20px'
    }

    return (
        <div className='scoreboard-container default-container' style={styleCont}>
            <h2 style={{paddingBlock: '30px'}}>Scoreboard</h2>
            <ul>
                <RankItem />
                <RankItem />
                <RankItem />
                <RankItem />

            </ul>

        </div>
    )
}