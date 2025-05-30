import ContactPage from "./Pages/ContactPage"
import HomePage from "./Pages/HomePage"
import { Routes, Route, useLocation, Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Navbar from "./Components/NavigationBar"
import MobileNav from "./Components/MobileNav"
import ProjectPage from "./Pages/ProjectPage"
import { useContext } from "react"
import { AppContext } from "./Utilities/Context"
// import SkillPage from "./Pages/SkillPage"
import Skill from "./Pages/skill"

function App() {
  const location = useLocation()
  const { bg, } = useContext(AppContext)

  return (
    <div className={`relative flex w-full items-center gap-5 justify-center min-h-dvh ${bg ? "bg-[#121212] text-[#E0E0E0]" : "bg-[#F5F5F5] text-[#212121]"}`}>
      <div className="flex p-3 items-center justify-center w-full lg:mx-56 ">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.key}>
            <Route exact path="/" element={<HomePage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="/projects" element={<ProjectPage />} />
            {/* <Route path="/skill" element={<SkillPage />} /> */}
            <Route path="/skill" element={<Skill />} />
          </Routes>
        </AnimatePresence>
      </div>
      <Navbar />
      <MobileNav />
    </div>
  )
}

export default App
