import { ScaleLoader } from "react-spinners";
import { motion } from 'framer-motion';
import { useEffect, useState } from "react";


const LoadingScreen = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(false);
    }, 2500);
  }, []);

  return (
    <motion.div
      className="text-white fixed flex justify-center items-center top-0 left-0 right-0 bottom-0"
      animate={{ scale: isVisible ? 1 : 0 }}
      transition={{ duration: .3 }}
    >
      <ScaleLoader
        color="#ED2B2A"
      // size={90}
      />
    </motion.div>
  );
}

export default LoadingScreen;