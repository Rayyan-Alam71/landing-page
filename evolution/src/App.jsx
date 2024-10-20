
import { useEffect, useState } from 'react'
import Background from './Components/Background/Background';
import './App.css'
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';

function App() {
  
  const [playStatus, setPlayStatus] = useState(false);
  const [heroCount, setHeroCount] = useState(0);
// as per the current heroCount we'll display the respective heroData for more enhancement 
  let heroData=[
    {text1: "Dive into", text2: " what you love"},
    {text1: "Indulge", text2: " your passions"},
    {text1: "Give in to", text2: " your passions"}
  ]
  return(
  <>
    <Background playStatus={playStatus} heroCount={heroCount}/>
    <Navbar/>
    <Hero heroData={heroData[heroCount]} heroCount={heroCount} setHeroCount={setHeroCount} playStatus={playStatus} setPlayStatus={setPlayStatus} />
    </>
  )
}

// add the functionality of pressing space button to play and pause the video
// while the video is playing, it doesn't let the page chnaged while the buttons/dots are clicked. FIx this issue...
// adding the opacity while play and pause
export default App
