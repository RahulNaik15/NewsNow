import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import News from './components/News'

function App() {
 
  const [category, setCategory] = useState("general");

  return (
    <>
      <NavBar setCategory={setCategory}></NavBar>
      <News category={category}></News>
    </>
  )
}

export default App
