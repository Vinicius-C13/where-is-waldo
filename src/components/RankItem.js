import React from 'react';

export default function RankItem(props) {

    const styleCont ={
        display: 'flex',
        gap: '20px',
        paddingBlock: '20px',
        borderBottom: '1px solid #cbcbcb'
    }

    function setDate() {
        const date = (new Date(props.date.seconds*1000));
        const formattedDate = `${date.getDay()}/${date.getMonth()}/${date.getFullYear()}`

        return formattedDate
    }

    return (
        <li style={styleCont}>
            <p style={{marginRight: 'auto'}}>{props.name}</p>
            <span style={{color: '#ec3d38'}}>{props.time}</span>
            <span>{setDate()}</span>
        </li>
    )
}