import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header className="bg-green-500 py-4">{/* Navigation Bar */}
        <nav className="flex justify-between items-center px-4">
          <div className="w-16 font-bold text">{/* Logo Section */}
              
          </div>
        </nav>
        
      </header>
    </>
  )
}

export default App
