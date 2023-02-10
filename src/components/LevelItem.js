import React from 'react';

export default function LevelItem(props) {

    const styleCont = {
        display: 'flex',
        flexDirection: 'column',
        borderRadius: '10px',
        overflow: 'hidden',
        backgroundColor: '#fafafa',
    }

    const styleImg = {
        width: '100%',
    }

    const styleP = {
        padding: '20px 0px'
    }

    const levelImg = require(`../assets/${props.img}`);
    const goalImg = require(`../assets/waldo-icon.png`);

    if(props.scoreboard) {
        return (
            <div onClick = {() => props.handleClick(props.level)} style={{...styleCont, width: '80%', justifySelf: 'center'}}>
                <img style={styleImg} src={levelImg} alt='level'/>
                <div style={{display: 'flex', justifyContent: 'space-between', paddingInline: '5px'}}>
                    <p style={styleP}>{props.level || 'level'}</p>
                </div>
            </div>
        )
    }

    return (
        <div style={styleCont}>
            <img style={styleImg} src={levelImg} alt='level'/>
            <div style={{display: 'flex', justifyContent: 'space-between', paddingInline: '5px'}}>
                <p style={styleP}>{props.level || 'level'}</p>
                <ul style={{display: 'flex', gap: '3px'}}>
                    <li ><img src={goalImg} style={{maxHeight: '30px'}}/></li>
                    <li ><img src={goalImg} style={{maxHeight: '30px'}}/></li>
                    <li ><img src={goalImg} style={{maxHeight: '30px'}}/></li>
                    {/*{props.levelGoals.map((item) => {
                        return <li><img src={item.img} style={{maxHeight: '30px'}}/></li>
                    })}*/}
                </ul> 
            </div>
        </div>
    )
}