import React from 'react';
import RankItem from './RankItem';

import { initializeApp } from 'firebase/app';

import {
    getFirestore,
    collection,
    addDoc,
    orderBy,
    limit,
    onSnapshot,
    setDoc,
    getDocs,
    updateDoc,
    doc,
    serverTimestamp,
    query,
} from 'firebase/firestore';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

initializeApp({
    apiKey: "AIzaSyCaf772nR5SYDKp_G5gEva7tsPshFEvpHI",
    authDomain: "where-is-waldo-9fdb8.firebaseapp.com",
    projectId: "where-is-waldo-9fdb8",
    storageBucket: "where-is-waldo-9fdb8.appspot.com",
    messagingSenderId: "890404723141",
    appId: "1:890404723141:web:03397722cc2c023b70d3ac"
})

export default function Scoreboard(props) {

    const [level, setLevel] = React.useState('scoreboard-l1')

    function getLevelScoreboard() {
        if(props.level == 'level 1') {
            setLevel('scoreboard-l1')
        } else if(props.level == 'level 2') {
            setLevel('scoreboard-l2')
        } else if(props.level == 'level 3') {
            setLevel('scoreboard-l3')
        } else {console.log('error to find level')}
    }

    React.useEffect(() => getLevelScoreboard(), [props.level])

    const rankingQuery = query(collection(getFirestore(), level), orderBy('time'))
    const [ranking] = useCollectionData(rankingQuery, {idField: 'id'});

    const styleCont = {
        backgroundColor: '#fafafa',
        marginBottom: '0px',
        paddingBottom: '20px'
    }

    return (
        <div className='scoreboard-container default-container' style={styleCont}>
            <h2 style={{paddingBlock: '30px', color: '#ec3d38', fontSize: '30px'}}>SCOREBOARD: {props.level}</h2>
            <ul>
                {ranking && ranking.map(
                    doc => {
                        return (
                            <RankItem 
                                key={doc.name} 
                                name={doc.name} 
                                time={doc.time} 
                                date={doc.date}
                            />
                        )
                    }
                )}
            </ul>
        </div>
    )
}