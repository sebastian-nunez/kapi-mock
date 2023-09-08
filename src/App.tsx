import Footer from "./components/Footer"
import { Routes, Route } from "react-router-dom"
import NotFound from "./components/NotFound"
import Home from "./components/Home"
import NavBar from "./components/NavBar"
import Survey from "./components/Survey"

const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />

      <main className="flex-1 pb-24">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/file" element={<Survey />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
    </div>
  )
}

export default App
