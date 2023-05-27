import { useState } from 'react'
import {Header} from "./components/Header/Header.jsx";
import {Sidebar} from "./components/Sidebar/Sidebar.jsx";

import style from "./App.module.css"
import {Post} from "./components/Post/Post.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Header />
        <div className={style.wrapper}>
            <div className={style.container}>
                <Sidebar />
                <Post />
            </div>
        </div>
    </>
  )
}

export default App
