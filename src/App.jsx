import "./App.css";
import { useEffect, useState } from "react";
import Cryptos from "./components/Cryptos";
import { motion } from "motion/react";

function App() {
  const [cargando, setCargando] = useState(true);
  useEffect(() => {
    setTimeout(() => setCargando(false), 3000);
  }, []);

  const cargaText = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
  };

  return cargando ? (
    <div className="d-flex flex-column justify-content-center align-items-center overflow-hidden w-100 h-100 min-vh-100 poppins-thin bg-dark">
      <div className="position-relative">
        <svg height="60" width="320" className="">
          <rect className="shape" height="60" width="250" />
        </svg>
        <motion.p
          variants={cargaText}
          initial="hidden"
          animate="visible"
          className="text"
        >
          Crypto Mon 💰
        </motion.p>
      </div>
    </div>
  ) : (
    <div className="container">
      <h1 className="text-center">Crypto Mon</h1>
      <Cryptos />
    </div>
  );
}

export default App;
