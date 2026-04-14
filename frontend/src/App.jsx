import { BrowserRouter, Routes, Route } from 'react-router-dom'

//TODO: import page components here
// import Dashboard from './pages/Dashboard'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div>Dashboard coming soon</div>} />
      </Routes>
    </BrowserRouter>
  )
}
