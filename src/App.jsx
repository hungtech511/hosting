import { useState } from 'react'
import viteLogo from '/vite.svg'

import './App.scss'
import { CustomButton } from './Components/Button/Button';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>Vite + React</h1>
      <div className="card">
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <CustomButton />
    </div>
  )
}

export default App
