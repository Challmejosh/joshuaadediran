import { FaHome, FaMoon, FaPhoneAlt, FaSuitcase, FaSun, FaTools, FaUser} from 'react-icons/fa'
import {Link } from 'react-router-dom';
import {  motion } from 'framer-motion';
import { useContext, useState } from 'react';
import { AppContext } from '../Utilities/Context';


const Navbar = ()=>{
    const {show,handleShow,navVariants,linkVariants,handleBg,bg} = useContext(AppContext)
    const [home,setHome] = useState(false)
    const [skill,setSkill] = useState(false)
    const [project,setProject] = useState(false)
    const [contact,setContact] = useState(false)
    
    return(
        <div className={`hidden md:flex flex-col items-center h-full w-[200px] justify-center fixed top-7 right-7   `}>
           
            {/* PC NAV LINK */}
            <div className='hidden lg:flex flex-col gap-5 w-full items-center justify-center  '>
                    <motion.div className="p-1 w-[150px] h-fit gap-3 flex items-center justify-start  "
                    variants={navVariants}
                    initial="start"
                    animate="end"
                    whileHover="hover"
                    onHoverStart={()=>setHome(true)}
                    onHoverEnd={()=>setHome(false)}
                    >
                        <Link to="/" className={`${bg?"bg-[#E0E0E0] ":"bg-[#121212]"} transition-all flex items-center justify-center rounded-full w-[50px] h-[50px]`}>
                            <FaHome className={`${bg? "text-[#121212]" :"text-[#E0E0E0]"} transition-all`}   />
                        </Link> 
                            {home&&<motion.span className=''
                            initial={{opacity: 0,}}
                            animate={{opacity: 1}}
                            transition={{duration: 1}}
                            >Home</motion.span>}
                    </motion.div>

                    <motion.div className=" p-1 w-[150px] h-fit gap-3 flex items-center justify-start"
                    variants={navVariants}
                    initial="start"
                    animate="end"
                    whileHover="hover"
                    onHoverStart={()=>setSkill(true)}
                    onHoverEnd={()=>setSkill(false)}
                    >
                        <Link to="/skill" className={`${bg?"bg-[#E0E0E0] ":"bg-[#121212]"} transition-all flex items-center justify-center rounded-full w-[50px] h-[50px]`}>
                            <FaTools className={`${bg? "text-[#121212]" :"text-[#E0E0E0]"} transition-all`}   />
                        </Link>
                        {skill&&<motion.span className=' '
                            initial={{opacity: 0,}}
                            animate={{opacity: 1}}
                            transition={{duration: 1}}
                            >Skill</motion.span>}
                    </motion.div>

                    <motion.div className=" p-1 w-[150px] h-fit gap-3 flex items-center justify-start"
                    variants={navVariants}
                    initial="start"
                    animate="end"
                    whileHover="hover"
                    onHoverStart={()=>setProject(true)}
                    onHoverEnd={()=>setProject(false)}
                    >
                        <Link to="/projects" className={`${bg?"bg-[#E0E0E0] ":"bg-[#121212]"} transition-all flex items-center justify-center rounded-full w-[50px] h-[50px]`}>
                            <FaSuitcase className={`${bg? "text-[#121212]" :"text-[#E0E0E0]"} transition-all`}   />
                        </Link>
                        {project&&<motion.span className=''                      
                             initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            transition={{duration: 1.5}}
                            >Projects</motion.span>}
                    </motion.div>
                    <motion.div className="p-1 w-[150px] h-full gap-3 flex items-center justify-start"
                    variants={navVariants}
                    initial="start"
                    animate="end"
                    whileHover="hover"
                    onHoverStart={()=>setContact(true)}
                    onHoverEnd={()=>setContact(false)}
                    >
                        <Link to="/contact" className={`${bg?"bg-[#E0E0E0] ":"bg-[#121212]"} transition-all flex items-center justify-center rounded-full w-[50px] h-[50px]`}>
                            <FaPhoneAlt className={`${bg? "text-[#121212]" :"text-[#E0E0E0]"} transition-all`}   />
                        </Link>
                        {contact&&<motion.span className=''
                            initial={{opacity: 0,}}
                            animate={{opacity: 1}}
                            transition={{duration: 1}}
                            >Contact</motion.span>}
                    </motion.div>
                    {/* change background */}
                    <motion.div onClick={handleBg} className=" cursor-pointer mt-20 p-1 w-[150px] h-full gap-3 flex items-center justify-start"
                    variants={navVariants}
                    initial="start"
                    animate="end"
                    whileHover="hover"
                    >
                    {bg?(
                        <div className={`${bg?"bg-[#E0E0E0] ":"bg-[#121212]"} cursor-pointer transition-all flex items-center justify-center rounded-full w-[50px] h-[50px]`}>
                        <FaSun className={`${bg? "text-[#121212]" :"text-[#E0E0E0]"} transition-all`} />
                        </div>
                    ):(
                    <div className={`${bg?"bg-[#E0E0E0] ":"bg-[#121212]"} cursor-pointer transition-all flex items-center justify-center rounded-full w-[50px] h-[50px]`}>
                        <FaMoon className={`${bg? "text-[#121212]" :"text-[#E0E0E0]"} transition-all`}  />
                    </div>)}
                    </motion.div>
            </div>
               
               
        </div>
    )
}
export default Navbar;