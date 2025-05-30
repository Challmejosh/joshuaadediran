import { useContext } from 'react';
import { AppContext } from '../Utilities/Context';
import { motion } from 'framer-motion';
const skills = [
    {image: "", name: 'HTML',  },
    {image: "", name: 'CSS',  },
    {image: "", name: 'JavaScript', },
    {image: "", name: 'React',  },
    // {image: "", name: 'TypeScript', },
    // {image: "", name: 'Redux', },
    // {image: "", name: 'Node.js', },
    {image: "", name: 'Git', },
    {image: "", name: 'NextJs', },
];

const Skill = () => {
    const {containerVariant} = useContext(AppContext)
    return (
        <motion.div className="w-full bg-transparent gap-10 flex flex-col items-center justify-center "
        variants={containerVariant}
        initial="initial"
        animate="animate"
        exit="exit"
        >
            <div className="text-center mb-8">
                <h1 className="text-4xl font-bold mb-4">Welcome to My Skills Page</h1>
                <p className="text-lg text-gray-600">
                    As a passionate and dedicated frontend developer, I have honed my skills in various technologies and frameworks. Below is a list of my key skills that I bring to every project.
                </p>
            </div>
            <div className="text-center">
                <h2 className="text-3xl font-semibold mb-6">My Skills</h2>
                <div className="flex flex-wrap justify-center">
                    {skills.map((skill, index) => (
                        <div key={index} className="bg-[#E0E0E0] text-[#121212] shadow-md rounded-lg m-4 p-6 w-64">
                            <h3 className="text-xl font-medium">{skill.name}</h3>
                            <p className="text-gray-700">{skill.image}</p>
                        </div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}

export default Skill;