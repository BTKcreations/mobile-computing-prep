import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import SubjectPage from './pages/SubjectPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/subject/:subjectId" element={<SubjectPage />} />
      <Route path="/subject/:subjectId/:viewMode" element={<SubjectPage />} />
      <Route path="/subject/:subjectId/topic/:topicId" element={<SubjectPage />} />
    </Routes>
  )
}

export default App
