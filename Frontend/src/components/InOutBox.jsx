import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const dropInRiseOut = {
  hidden: { y: "-100vh", opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 15,
      duration: 0.2,
    },
  },
  exit: {
    y: "-100vh",
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

export default function InOutBox({text}) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);

    const timer = setTimeout(() => {
      setShow(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, [text]);

  return (
    <div className="flex flex-col items-center gap-4 mt-10">
      <AnimatePresence mode="wait">
        {show && (
          <motion.div
            key={text}
            variants={dropInRiseOut}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="px-4 py-2 rounded bg-blue-400"
          >
            {text}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
