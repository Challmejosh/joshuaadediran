import { AnimatePresence, motion } from "framer-motion";
import { useContext, useState } from "react";
import { AppContext } from "../Utilities/Context";
import {
  FaCheck,
  FaGoogle,
  FaTiktok,
  FaTimes,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const ContactPage = () => {
  const { containerVariant, sendEmail, messageDecline, messageSent, changeMessageDecline } =
    useContext(AppContext);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [sendBtn, setSendBtn] = useState(true);
  const handleSubmit = async (e, email, name, message) => {
    setSendBtn(false);
    await sendEmail(e, email, name, message);
    setEmail("");
    setName("");
    setMessage("");
    setSendBtn(true);
  };
  return (
    <motion.div
      className=" flex gap-5 sm:flex-row sm:items-start flex-col h-full items-center justify-center w-full "
      variants={containerVariant}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div className="sm:w-1/2 w-full flex items-center h-full flex-col justify-center gap-5">
        <>
          <h2 className="text-2xl font-semibold">
            Want To work with me? Excited to hear from you!
          </h2>
          <div className="">
            <p className="text-justify">
              I'm open to exciting{" "}
              <b>opportunities-remote or onsite, fulltime or part time.</b> If
              you think I'd be a great fit for your team or project. <br />
              <br />
              Let's create something amazing together I'd love to hear about
              your idea's <b>fill out the form,</b> and I'll be in touch soon!
            </p>
          </div>
        </>
        <div className="flex flex-col w-full items-start justify-center">
          <h2 className="font-semibold"> Social Contact </h2>
          <div className="flex gap-3 items-center justify-start ">
            <div>challmejosh@gmail.com</div>
            <Link target="_blank" to="https://tiktok.com/@joshdevv">
              <FaTiktok size={24} />
            </Link>
            <Link target="_blank" to="https://x.com/@joshwebdevv">
              <FaTwitter size={24} />
            </Link>
          </div>
        </div>
      </div>
      <form
        onSubmit={(e) => handleSubmit(e, email, name, message)}
        action=""
        className="sm:w-1/2 max-w-[400px] flex flex-col items-start justify-center gap-5"
      >
        <label htmlFor="name">Send me a message</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          id="name"
          className="flex w-full p-5 items-center justify-center border rounded-md"
          required
          type="text"
          placeholder="Enter your Name"
        />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          id="email"
          className="flex w-full p-5 items-center justify-center border rounded-md"
          required
          type="email"
          placeholder="Enter your email"
        />
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          placeholder="Enter your message"
          name="message"
          id="message"
          className="border p-3 h-[150px] flex flex-col w-full rounded-md"
        ></textarea>
        {name && email && message && sendBtn && (
          <button
            type="submit"
            className="bg-blue-400 border border-white rounded-md cursor-pointer flex items-center justify-center text-white w-full p-3"
          >
            Send Message
          </button>
        )}
      </form>

      {/* Notifications */}

        <AnimatePresence mode="wait">
        {messageSent && (
            <motion.div
            className="z-20 flex flex-col items-center justify-center fixed top-0 left-0 w-full h-full bg-black/40 backdrop-blur-sm"
            initial={{ opacity: 0, y: "-100vh" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100vh" }}
            >
            <motion.div
                className="flex flex-col items-center justify-center gap-6 bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 shadow-2xl rounded-3xl p-8 sm:w-[400px] w-[90%] mx-auto border-4 border-white/80"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
            >
                <motion.div
                animate={{ rotate: [0, 20, -20, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                >
                <FaCheck
                    size={48}
                    className="text-white drop-shadow-lg bg-green-500 rounded-full p-2 shadow-lg"
                />
                </motion.div>
                <h1 className="font-extrabold text-3xl text-white text-center tracking-tight drop-shadow-lg">
                Message Sent! 🎉
                </h1>
                <p className="text-lg text-white/90 text-center font-medium">
                Thanks for reaching out,{" "}
                <span className="font-bold text-yellow-200">
                    you absolute legend
                </span>
                !<br />
                I’ll slide into your inbox soon 🚀
                </p>
                <div className="flex gap-2 items-center justify-center">
                <span className="text-2xl animate-bounce">✨</span>
                <span className="text-2xl animate-pulse">🙌</span>
                <span className="text-2xl animate-bounce">💌</span>
                </div>
                <em className="text-white/80 text-sm mt-2">
                Stay awesome, {name} ! 😎
                </em>
            </motion.div>
            </motion.div>
        )}
        </AnimatePresence>

        {/* message decline */}
        <AnimatePresence mode="wait">
        {messageDecline && (
            <motion.div
            className="z-20 flex flex-col items-center justify-center fixed top-0 left-0 w-full h-full bg-black/40 backdrop-blur-sm"
            initial={{ opacity: 0, y: "-100vh" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100vh" }}
            >
            <motion.div
                className="flex flex-col items-center justify-center gap-6 bg-gradient-to-br from-red-400 via-pink-400 to-yellow-300 shadow-2xl rounded-3xl p-8 sm:w-[400px] w-[90%] mx-auto border-4 border-white/80"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: 'spring', stiffness: 200, damping: 15 }}
            >
                <motion.div animate={{ rotate: [0, -20, 20, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
                <FaTimes onClick={changeMessageDecline} size={48} className="text-white cursor-pointer drop-shadow-lg bg-red-500 rounded-full p-2 shadow-lg" />
                </motion.div>
                <h1 className="font-extrabold text-3xl text-white text-center tracking-tight drop-shadow-lg">
                Oops! Message Not Sent 😬
                </h1>
                <p className="text-lg text-white/90 text-center font-medium">
                Something went wrong <span className="font-bold text-yellow-200">(blame the WiFi gods)</span>!<br />
                Try again in a bit or check your connection 🔌
                </p>
                <div className="flex gap-2 items-center justify-center">
                <span className="text-2xl animate-bounce">😅</span>
                <span className="text-2xl animate-pulse">📡</span>
                <span className="text-2xl animate-bounce">💔</span>
                </div>
                <em className="text-white/80 text-sm mt-2">Don’t worry, you got this! 💪</em>
            </motion.div>
            </motion.div>
        )}
        </AnimatePresence>
    </motion.div>
  );
};

export default ContactPage;
