import ContactPage from "./Pages/ContactPage"
import HomePage from "./Pages/HomePage"
import { Routes, Route, useLocation, Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Navbar from "./Components/NavigationBar"
import ProjectPage from "./Pages/ProjectPage"
import { FaTimes, FaBars, FaHome, FaTools, FaSuitcase, FaPhoneAlt, FaMoon, FaSun } from 'react-icons/fa'
import { useContext } from "react"
import { AppContext } from "./Utilities/Context"
// import SkillPage from "./Pages/SkillPage"
import Skill from "./Pages/skill"

function App() {
  const location = useLocation()
  const { navVariants, handleShow, linkVariants, show, bg, handleBg } = useContext(AppContext)

  return (
    <div className={`relative flex flex-col lg:flex-row lg:justify-start items-center gap-5 justify-center min-h-screen overflow-y-scroll [&::-webkit-scrollbar]:hidden scrollbar w-full ${bg ? "bg-[#121212] text-[#E0E0E0]" : "bg-[#F5F5F5] text-[#212121]"}`}>
       <div className={`${show ? "flex w-full cursor-pointer lg:hidden items-center justify-end ":" flex items-center justify-center lg:hidden "} z-10 ` }>
          {!show && <FaBars className='lg:hidden absolute top-3 h-fit right-3 flex cursor-pointer' size={34} onClick={handleShow}  />}
        </div>
      <AnimatePresence>
        {show && (
          <motion.div className={`${show?"flex flex-col items-start justify-between fixed bg-white lg:bg-yellow-300 p-10 h-full lg:hidden lg:w-0 w-[50vw] gap-10 right-0 top-0 z-10":"absolute right-[100vw] hidden"} ${bg ? " text-[#212121]" : "text-[#212121"}  `}
            variants={linkVariants}
            exit="exit"
            initial="start"
            animate="end"
          >
            <FaTimes className='lg:hidden flex cursor-pointer' size={34} onClick={handleShow} />
            <motion.div className="border-b w-full p-1"
              variants={navVariants}
              initial="start"
              animate="end"
              whileHover="hover"
            >
              <Link to="/" className="flex items-center gap-5 cursor-pointer justify-start">
                <FaHome />
                <span>Home</span>
              </Link>
            </motion.div>
            <motion.div className="border-b w-full p-1"
              variants={navVariants}
              initial="start"
              animate="end"
              whileHover="hover"
            >
              <Link to="/skill" className="flex items-center gap-5 cursor-pointer justify-start">
                <FaTools />
                <span>Skill</span>
              </Link>
            </motion.div>
            <motion.div className="border-b w-full p-1"
              variants={navVariants}
              initial="start"
              animate="end"
              whileHover="hover"
            >
              <Link to="/projects" className="flex items-center gap-5 cursor-pointer justify-start">
                <FaSuitcase />
                <span>Project</span>
              </Link>
            </motion.div>
            <motion.div className="border-b w-full p-1"
              variants={navVariants}
              initial="start"
              animate="end"
              whileHover="hover"
            >
              <Link to="/contact" className="flex items-center gap-5 cursor-pointer justify-start">
                <FaPhoneAlt />
                <span>Contact</span>
              </Link>
            </motion.div>
            <motion.div onClick={handleBg} className="border-b cursor-pointer mt-30 w-full p-1"
              variants={navVariants}
              initial="start"
              animate="end"
              whileHover="hover"
            >
              {bg? <FaSun className="cursor-pointer "/> : <FaMoon className="cursor-pointer "/>}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="flex my-auto p-3 items-center justify-center w-full lg:w-[70%] mt-10 ">
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
      
    </div>
  )
}

export default App
