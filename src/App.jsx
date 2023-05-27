import { useState } from 'react'
import {Header} from "./components/Header/Header.jsx";
import { Home } from "./components/Home/Home.jsx"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Header />
        <Home />
    </>
  )
}

export default App
