import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { Favorites } from './pages/Favorites'
import { History } from './pages/History'
import { NotFound } from './pages/NotFound'

function App() {

  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/history" element={<History />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App
