import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
   useEffect(() => {
        AOS.init({duration:1000});
    })

  return (
    <></>
  )
}

export default App
