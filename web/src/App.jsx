import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import GalleryPage from './pages/GalleryPage'
import NotFoundPage from './pages/NotFoundPage'

// Add new pages here (for example /care or /warranty) as the site grows.
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/gallery" element={<GalleryPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}
