import React from 'react'
import styles from "./charactercard.module.css";



function CharacterCard({data}) {
    console.log(data)
    return (
        <div className={styles.card}>
            <div>
                <img src={data.image} alt={data.name}/>
                <h2>{data.name}</h2>
            </div>
            <div className={styles.cardInfo}>
                <p>Status: {data.status}</p>
                <p>Species: {data.species}</p>
                <p>Location: {data.location.name}</p>
                <p>Origin: {data.origin.name}</p>
            </div>
            
            
        </div>
    )
}

export default CharacterCard