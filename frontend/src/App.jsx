import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import { Heading1 } from 'lucide-react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
       <Router>
           <Routes>
                <Route path="/" element={<Home/>} />               
           </Routes>
       </Router>
    </div>
  )
}

export default App
