
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Nav from './components/nav'
import Book from './components/Book'

function App() {

  return (
    <>
      <BrowserRouter>
    <Nav />
    <Routes>
      <Route path="/reducer" element={<Book />} />
      <Route path="*" element={<p>Rien à voir ici</p>} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
