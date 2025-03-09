import { useContext } from "react";
import { AppContext } from "../Utilities/Context";
import { motion } from "framer-motion";

const skillVariants = {
    start: {
        scale: 1,
    },
    end: {
        scale: 1.2,
        transition: {
            duration: 1.5
        }
    },
    hover: {
        scale: 1,
    }
}

const SkillPage = () => {
    const { skills, containerVariant } = useContext(AppContext);
    return (
        <motion.div className=""
            variants={containerVariant}
            initial="state"
            animate="animation"
            exit="exit"
        >
            
        </motion.div>
    );
}

export default SkillPage;