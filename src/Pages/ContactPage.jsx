import { AnimatePresence, motion } from 'framer-motion'
import { useContext, useState } from 'react';
import { AppContext } from '../Utilities/Context';
import { FaCheck, FaGoogle, FaTiktok, FaTimes, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ContactPage = () => {
    const { containerVariant,sendEmail,messageDecline,messageSent } = useContext(AppContext)
    const [email,setEmail] = useState('')
    const [name,setName] = useState('')
    const [message,setMessage] = useState('')
    const [sendBtn,setSendBtn] = useState(true)
    const handleSubmit = async (e,email,name,message)=>{
        setSendBtn(false)
        await sendEmail(e,email,name,message)
            setEmail('')
            setName('')
            setMessage('')
            setSendBtn(true)
        }
    return (
        <motion.div className=" flex gap-5 sm:flex-row sm:items-start flex-col h-full items-center justify-center w-full "
            variants={containerVariant}
            initial="state"
            animate="animation"
            exit="exit"
        >
            <div className="sm:w-1/2 w-full flex items-center h-full flex-col justify-center gap-5">
                <>
                    <h2 className="text-2xl font-semibold">Want To work with me? Excited to hear from you!</h2>
                    <div className="">
                        <p className="text-justify">I'm open to exciting <b>opportunities-remote or onsite, fulltime or part time.</b> If you think I'd be a great fit for your team or project. <br /><br />
                            Let's create something amazing together I'd love to hear about your idea's <b>fill out the form,</b> and I'll be in touch soon!
                        </p>
                    </div>
                </>
                <div className="flex flex-col w-full items-start justify-center">
                    <h2 className="font-semibold"> Social Contact </h2>
                    <div className="flex gap-3 items-center justify-start ">
                        <div>
                            challmejosh@gmail.com
                        </div>
                        <Link target='_blank' to="https://tiktok.com/@joshdevv">
                            <FaTiktok size={24} />
                        </Link>
                        <Link target='_blank' to="https://x.com/@joshwebdevv">
                            <FaTwitter size={24} />
                        </Link>
                    </div>
                </div>
            </div>
            <form onSubmit={(e)=>handleSubmit(e,email,name,message)} action="" className='sm:w-1/2 max-w-[400px] flex flex-col items-start justify-center gap-5'>
                <label htmlFor="name">Send me a message</label>
                <input value={name} onChange={(e)=>setName(e.target.value)} id="name" className='flex w-full p-5 items-center justify-center border rounded-md' required type="text" placeholder='Enter your Name' />
                <input value={email} onChange={(e)=>setEmail(e.target.value)} id="email" className='flex w-full p-5 items-center justify-center border rounded-md' required type="email" placeholder='Enter your email' />
                <textarea value={message} onChange={(e)=>setMessage(e.target.value)} required placeholder='Enter your message' name="message" id="message" className="border p-3 h-[150px] flex flex-col w-full rounded-md"></textarea>
                {name && email && message && sendBtn &&
                <button type="submit" className='bg-blue-400 border border-white rounded-md cursor-pointer flex items-center justify-center text-white w-full p-3'>Send Message</button>
                }
            </form>
            <AnimatePresence mode="wait">
            {messageSent && 
            <motion.div className='z-10 text-lg flex flex-col p-3 top-0 items-center justify-center w-full sm:w-[400px] sm:rounded-lg bg-white fixed shadow-md  '
            initial={{opacity:0,y:'-100vh'}}
            animate={{opacity:1,y:0}}
            exit={{opacity:0,y:'-100vh'}}
            >
                <h1 className='font-semibold flex flex-col gap-3 items-center justify-center text-2xl'> <FaCheck size={34} className='text-green-600' /> Message Sent Succesfully</h1>
                <em className='font-semibold text-green-500 '>I will reach to in no time</em>
            </motion.div>
            }
            </AnimatePresence>
            <AnimatePresence mode="wait">
            {messageDecline && 
            <motion.div className='z-10 text-lg flex flex-col p-3 top-0 items-center justify-center w-full sm:w-[400px] sm:rounded-lg bg-white fixed shadow-md  '
            initial={{opacity:0,y:'-100vh'}}
            animate={{opacity:1,y:0}}
            exit={{opacity:0,y:'-100vh'}}
            >
                <h1 className='font-semibold flex flex-col items-center justify-center gap-3 text-2xl' > <FaTimes size={34} className='text-red-600' /> Message Not Sent </h1>
                <em className='font-semibold text-red-500 '>Check your connection</em>
            </motion.div>
            }
            </AnimatePresence>
        </motion.div>
    );
}

export default ContactPage;