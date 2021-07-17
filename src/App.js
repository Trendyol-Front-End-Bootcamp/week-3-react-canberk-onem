import './App.css';
import Filter from './components/Filter/Filter';
import  {useState, useEffect}  from "react"
import Header from './components/Header/Header'
import axios from "axios"
import CharacterCard from './components/CharacterCard/CharacterCard';


function App() {
  const [characterData, setCharacterData] = useState([])

useEffect(() => {
  const axiosData = async () => {
    const res = await axios("https://rickandmortyapi.com/api/character")
    setCharacterData(res.data.results)
 }
 axiosData();

 
}, [])

  return (

      <div className="background" >
      <Header/>
      <Filter filter={setCharacterData}/>
      <div className="cardContainer">
          {
            
            characterData.map((data) => {
              return (
                <CharacterCard key={data.id} data={data}/>)
            })
          }
        </div>
      </div>
  );
}

export default App;
