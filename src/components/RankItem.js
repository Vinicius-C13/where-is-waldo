import React from 'react';

export default function RankItem(props) {

    const styleCont ={
        display: 'flex',
        gap: '20px',
        paddingBlock: '20px',
        borderBottom: '1px solid #cbcbcb'
    }

    return (
        <li style={styleCont}>
            <p style={{marginRight: 'auto'}}>Nome</p>
            <span>100 s</span>
            <span>12/12/12</span>
        </li>
    )
}