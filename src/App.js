import './App.css';
import {useState, useEffect} from "react"
import GiphDisplay from './components/GiphDisplay';
import Button from "./components/Button"
import Giphs from "./components/Giphs"

function App() {

  const apiKey = "rNvqgLSsDD4f1b4VKCLC0vSGyyajfHys"

  const [giph, setGiph] = useState(null)

  const getGiph= async() =>{
    const giphUrl=`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
    
    const response = await fetch(giphUrl)
    const json = await response.json()
    setGiph(json.data)
  }
  console.log(giph)

  return (
    <div className="App">
      <GiphDisplay/>
      <div className='button'><Button getGiphFromApp={getGiph}/></div>
      
      {giph ? <Giphs giph={giph}/> : <h2>Use Giphy to pull some giphs</h2>}
    </div>
  );
}

export default App;
