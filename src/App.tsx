import tw from 'twin.macro'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import twinLogo from './assets/twin.svg'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div tw='font-sans flex flex-col gap-6'>
      <div tw='flex items-center justify-center gap-6'>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://github.com/ben-rogerson/twin.macro" target="_blank">
          <img src={twinLogo} className="logo twin" alt="React logo" />
        </a>
      </div>
      <h1 tw='text-6xl font-semibold'>
        Vite + React + twin.macro
      </h1>
      <div className="card" tw='flex flex-col gap-4'>
        <button 
          tw='w-max px-5 py-2 rounded-xl bg-black/30 mx-auto'
          onClick={() => setCount((count) => count + 1)}
        >
          count is {count} {count > 0 && <span>Mississipi</span>}
        </button>
        <p>
          You can start adding all you want to <code>src</code> and save to test Usage
        </p>
        <p>Remember to add <code>import tw from "twin.macro"</code> at the start of each file</p>
      </div>
      <p className="read-the-docs">
        Click on the Vite, React and Twin macro logos to learn more
      </p>
    </div>
  )
}

export default App
