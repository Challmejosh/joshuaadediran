import { motion} from 'framer-motion'
import { useContext } from 'react';
import { AppContext } from '../Utilities/Context';
import { Link } from 'react-router-dom';

const HomePage = () => {
    const visionText = "visions to life.";
    const {containerVariant} = useContext(AppContext)
    return ( 
        <motion.div className=" bg-transparent gap-10 w-full h-full flex flex-col items-center justify-center "
            variants={containerVariant}    
            initial="state"
            animate="animation"
            exit= "exit"
        >
            {/* Name and Title  */}
            <div className="flex w-full items-center justify-center flex-col ">
                <h1 className="font-bold text-blue-300 text-3xl sm:text-5xl flex items-center justify-center  ">
                    I'm Joshua Adediran 
                </h1>
                <h1 className="font-bold text-2xl sm:text-4xl flex items-center justify-center  ">
                    A frontend developer
                </h1>

            </div>
                {/* animated text that says what i do  */}

                
                {/* About */}
            <p className="text-center "
                
            >
                I'm a Frontend Developer with experience of <b>crafting responsive, user-friendly websites.</b> I'm in search of challenging myself and <b> making that challenge come through to life.</b> I love turning Ideas into <b>Interactive, beautiful web experiences. Clean code, intuitive design, and seamless functionality are my priorities.</b> I believe in honest communication and collaborating closely with clients to bring their {visionText.split('').map((item,index)=>(
                    <motion.b
                    initial={{width: 0,x:0}}
                    animate={{width:'100%',x:0}}
                    transition={{delay:index*0.1, ease: "easeIn", duration:3,repeat: Infinity}}
                    key={index}>{item}</motion.b>
                ))}<br/>
                Always <b>learning</b> and staying <b>updated</b> with new tech, I'm passionate about creating innovative, impactful <b>digital solutions.</b>
            </p>
            <div className="w-full sm:w-[400px] flex items-center justify-between  ">
                <motion.div className="  "
                    whileHover={{scale: 0.9,originX: 0}}
                    initial={{opacity: 0,scale: 0}}
                    animate={{opacity: 1,scale: 0.7}}
                    transition={{ duration: 3, type:"spring", stiffness:500}}
                    whileTap={{scale: 0.6}}
                >
                    <Link target="_blank" to="https://docs.google.com/document/d/1o3zknmyQSXyssn0w-YsOE83pqj2gHWD-i5c_yju8AKQ/edit?tab=t.0" className='flex p-3 bg-black/80 items-center justify-center text-lg cursor-pointer text-white shadow-lg shadow-blue-500 w-[150px] rounded-sm ' >View Resume</Link>
                </motion.div>

                <motion.div className=" "
                  whileHover={{scale: 0.9,originX: 0}}
                  initial={{opacity: 0,scale: 0}}
                  animate={{opacity: 1,scale: 0.7}}
                  transition={{ duration: 3, type:"spring", stiffness:500}}
                  whileTap={{scale: 0.6}}
                >
                    <Link target="_blank" to="https://github.com/Challmejosh" className='flex p-3 bg-black/80 items-center justify-center text-lg cursor-pointer text-white shadow-lg shadow-blue-500 w-[150px] rounded-sm '>Github</Link>
                </motion.div>
            </div>
            
        </motion.div>
     );
}
 
export default HomePage;