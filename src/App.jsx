import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  const [count, setCount] = useState(0)
   useEffect(() => {
        AOS.init({duration:1000});
    })

  return (
    <div></div>
  )
}

export default App
