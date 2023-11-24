import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Top from "./pages/Top"
import Nav from "./pages/Nav"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route path="/about" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/top" element={<Top />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
