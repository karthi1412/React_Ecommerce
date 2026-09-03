import { Route, Routes } from 'react-router-dom'
import './App.css'
import './custom/Styles.css'
import './index.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Footer from './components/Footer'
import About from './pages/About'
import Courses from './pages/Courses'
import Instructors from './pages/Instructors'
import Pricing from './pages/Pricing'
import Blog from './pages/Blog'
import Error from './pages/Error'
import Events from './pages/Events'
import Contact from './pages/Contact'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/instructors" element={<Instructors />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/events" element={<Events />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
