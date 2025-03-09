import { motion} from 'framer-motion'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../Utilities/Context'

const ProjectPage = () => {
    const fun = "Fun Projects"
    const {projects,containerVariant,projectVariants,bg} = useContext(AppContext)
    return ( 
        <motion.div className=" flex items-center justify-center "
        variants={containerVariant}
        initial="state"
        animate="animation"
        exit="exit"
        >
            <div className=" flex flex-col h-full gap-3 items-center justify-center  ">
                    <div className="flex w-full items-center justify-start ">
                        {fun.split('').map((item,index)=>(
                            <motion.h1 key={index} className="text-4xl cursor-pointer text-blue-400 font-semibold "
                            animate={{scale: 1,color: ["#F6F7F9","yellow","pink"]}}
                            initial={{scale: 1.2,color: "#333"}}
                            transition={{duration:1,repeat:Infinity}}
                            whileHover={{fontSize: [50,60,80,50],
                                transition: {
                                    repeat: Infinity
                                }
                            }}
                            >{item}</motion.h1>
                        ))}
                    </div>
                <div className="flex w-full items-center  justify-start gap-5 ">
                    <p className=" w-full text-center flex items-center justify-start ">Whether it is a lazy sunday or a burst of late night inspiration, there is that project that interests you and fun for me. I will love for you to swing by and explore my works.</p>
                </div>
                <motion.div className="grid p-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 items-center justify-center "
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: 1.5}}
                >
                    {projects.map((project,index)=>(
                        <motion.div key={index} className={`flex flex-col shadow-md h-[400px] rounded-md w-[250px] sm:max-w-full sm:w-full gap-[30px] overflow-hidden cursor-pointer ${bg?"bg-[#E0E0E0] text-[#121212] ": "transparent"} `}
                        variants={projectVariants}
                        whileHover="hover"
                        >
                                <img src={project.image} alt="" className=' h-[150px] object-cover ' />
                                <div className="flex h-[200px] text-sm flex-col gap-10 items-start justify-center p-3  ">
                                    <div className="flex flex-col items-start justify-center gap-1  ">
                                        <h2 className="text-2xl font-bold">{project.title}</h2>
                                        <p className="">{project.description}</p>
                                    </div>
                                    <div className="flex flex-col h-[50%] items-start justify-center w-full gap-3 ">
                                        <div className="flex text-md  items-center justify-start">{project.skills}</div>
                                        <div className="flex w-[30%] p-1 items-center justify-between gap-5 ">
                                            <Link className="cursor-pointer text-md" to={project.github}>code</Link>
                                            <Link className="cursor-pointer text-md" to={project.demo}>demo</Link>
                                        </div>
                                    </div>
                                </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </motion.div>
     );
}
 
export default ProjectPage;