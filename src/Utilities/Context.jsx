import { createContext,useState } from "react";
import emailjs from '@emailjs/browser';
const AppContext = createContext()

const Context = ({children}) => {
    const [show,setShow] = useState(false)
    const [messageSent,setMessageSent] = useState(false)
    const [messageDecline,setMessageDecline] = useState(false)
    const [bg,setBg] = useState(false)
    const handleShow = ()=>{
        setShow(prev => !prev)
      }
    const handleBg = ()=>{
        setBg(prev => !prev)
      }
      const containerVariant = {
        initial: { 
            opacity: 0, 
            y: "-100vh",
        },
        animate: { 
            opacity: 1,   
            y: 0,    
            transition: {
                duration: 0.8, 
                type: "spring",
                stiffness: 50, 
                damping: 12, 
                when: "beforeChildren",
                staggerChildren: 0.3, 
                delay: 0.6
            }
        },
        exit: {   // When the component is removed
            opacity: 0,      // Fade out
            y: "-100vh",     // Move back up out of the viewport
            transition: {
                ease: "easeInOut", // Smooth ease-in-out transition
                duration: 0.6,     // Quick exit
            }
        }
    };
    
    const projectVariants = {
        hover:{
            scale: 1.1
        }
    }
    const navVariants = {
        start: {
        },
        end: {
            transition: {
                duration: 0.5,
    
            }
        },
        hover: {
            x:0,
            scale: 1.1,
            transition:{
                duration: 0.5,
                type: "spring",
                stagger: 3
            },
            originX: 0
        }
    }
    const linkVariants={
        start:{
            x: "100vw"
        },
        end:{
            x:0,
            transition: {
                duration: 0.5
            }
        },
        exit:{
            x: "100vw",
        }
    }
    const projects = [
        {title:"Mini E-commerce",image: "./Mini-Cart.jpg",description: "A modern and responsive mini e-commerce featuring product categories, seamless add-to-cart functionality and a smooth purchase experience",github: "https://github.com/Challmejosh/mini-cart",demo:"https://mini-cart-nine.vercel.app",skills: "React + Tailwind + Paystack ",type: "Demo"},
        {title:"GiveRise Support",image: "./crowdfunding.jpg",description: "Discover way to raise funds and bring your idea's to life through collective contribution ",github: "https://github.com/Challmejosh/GiveRise",demo:"https://give-rise-crowdfunding.vercel.app",skills: "React + Tailwind + Paystack + Firebase  ",type: "Demo"},
        {title:"Chatgem",image: "./ChatgemAI.png",description: "An adaptive AI that creates unique responses, content, and ideas based on user input. 🚀",github: "https://github.com/Challmejosh/chatbot",demo:"https://chatbot-lake-sigma.vercel.app/",skills: "NextJS + Tailwind + Gemini Api  ",type: "Demo"},
        {title:"Project Management",image: "./ProjectManagement.png",description: "Manage and keep track of your porjects while each task is completed 🚀",github: "https://github.com/Challmejosh/project-management",demo:"https://project-management-three-xi.vercel.app/",skills: "NextJS + Tailwind + ChartJS  ",type: "Demo"},
        {title:"Reown Store",image: "./ReownStore.png",description: "Shop your product for daily needs from clothes to shoes etc.",github: "https://github.com/Challmejosh/reown",demo:"https://reown-vert.vercel.app/",skills: "NextJS + Tailwind + OAuth + Paystack + Swiper ",type: "Demo"},       
    ]
    const skills = [
        {name: "ReactJS",image: ""},
        {name: "Tailwind",image: ""},
        {name: "CSS",image: ""},
        {name: "HTML",image: ""},
        {name: "Javascript",image: ""},
        {name: "Firebase",image: ""},
    ]
    const sendEmail = async (e,email,name,message) => {
        e.preventDefault();
       const form ={
            email,
            name,
            message
        }
        await emailjs.send('service_p9xvhab', 'template_z8vym07', form, {
            publicKey: 'WpVKGvWo3oQE711ha',
          })
          .then(
            () => {
              setMessageSent(true)
              setTimeout(() => {
                setMessageSent(false)
              }, 5000);
            },
            (error) => {
                setMessageDecline(true)
                setTimeout(() => {
                    setMessageDecline(false)
                }, 5000);
                console.log(error)
            },
          );
      };
    return ( 
        <AppContext.Provider value={{messageSent,messageDecline,linkVariants,sendEmail,navVariants,show,setShow,handleShow,containerVariant,projects,projectVariants,skills,bg,handleBg}} >
            {children}
        </AppContext.Provider>
     );
}
 
export {Context,AppContext};
