import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header/Header'
import Blogs from './Components/Blogs/Blogs'
import Qna from './Components/Qna/Qna'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">

      {/* div for header */}
      <div>
        <Header></Header>
      </div>


        {/* div for blogs . blogs= blogs+bookmark*/}
        <div >
          <Blogs></Blogs>
        </div>

        <div>
          <Qna></Qna>
        </div>

    </div>


        

  )
}

export default App
