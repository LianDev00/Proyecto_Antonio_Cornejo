import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ListFutbolistasComponent from './components/ListFutbolistasComponent.js'
import AddFutbolistaComponent from './components/AddFutbolistaComponent.js'

function App() {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path="/" element={<ListFutbolistasComponent />} />
          <Route path="/futbolistas" element={<ListFutbolistasComponent />} />
          <Route path="/add-futbolista" element={<AddFutbolistaComponent />} />
          <Route
            path="/edit-futbolista/:id"
            element={<AddFutbolistaComponent />}
          />
        </Routes>
      </div>
    </Router>
  )
}

export default App
