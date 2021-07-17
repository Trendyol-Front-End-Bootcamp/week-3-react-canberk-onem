import React, {useState, useEffect} from 'react'
import styles from "./characterdetails.module.css"

import {
    BrowserRouter as Router,
    useParams,
    Link
  } from "react-router-dom";

function CharacterDetails() {
    const { id } = useParams()
    const [characterData, setCharacterData] = useState([])
    const [episodes, setEpisodes] = useState([])

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${id}`)
          .then(res => res.json())
          .then(
            (result) => {
              setCharacterData(result);
              setEpisodes(result.episode)
            },  
          )
      }, [])





    return (
        <div className={styles.detailContainer}>
            <Link to="/"><button className={styles.homeBtn}>BACK HOME</button></Link>

            <h1>{characterData.name}</h1>
            <div>
                <img src={characterData.image} alt={characterData.name}/>
            </div>

            
            <ul>
                <li>Status: {characterData.status}</li>
                <li>Species: {characterData.species}</li>
                <li>Gender: {characterData.gender}</li>
                <li>Origin: {{...characterData.origin}.name}</li>
                <li>Location: {{...characterData.location}.name}</li>
           
            </ul>
            <p>Last episodes:</p>
            {/* <ul>
            <li>{episodes}</li>
            </ul> */}
        </div>
    )
}

export default CharacterDetails
