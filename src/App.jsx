import "./App.css";
import Carrosel3 from "./components/Carrosel3";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import fotos1 from './images/fotos1.jpeg';
import fotos2 from './images/fotos2.jpeg';
import fotos3 from './images/fotos3.jpeg';
import fotos4 from './images/fotos4.jpeg';
import fotos5 from './images/fotos5.jpeg';
import fotos6 from './images/fotos6.jpeg';
import fotos7 from './images/fotos7.jpeg';
import fotos8 from './images/fotos8.jpeg';

function App() {
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setHearts((prev) => [
        ...prev.filter((h) => h.y < window.innerHeight),
        {
          id: Math.random(),
          left: Math.random() * 100,
          size: Math.random() * 20 + 10,
          duration: Math.random() * 3 + 2,
          opacity: Math.random() * 0.5 + 0.3,
          y: 0,
        },
      ]);
    }, 300);
    return () => clearInterval(interval);
  }, []);

  const series = [
    { src: fotos1, title: "", description: "" },
    { src: fotos2, title: "", description: "" },
    { src: fotos3, title: "", description: "" },
    { src: fotos4, title: "", description: "" },
    { src: fotos5, title: "", description: "" },
    { src: fotos6, title: "", description: "" },
    { src: fotos7, title: "", description: "" },
    { src: fotos8, title: "", description: "" },
   

  ];

  return (
    <div className="app-wrapper">
      {/* Corações de fundo */}
      <div className="hearts-container">
        {hearts.map((heart) => (
          <motion.div
            key={heart.id}
            initial={{ y: "-10%", opacity: heart.opacity, x: `${heart.left}%` }}
            animate={{
              y: "100vh",
              opacity: heart.opacity,
              x: `${heart.left + (Math.random() * 10 - 5)}%`,
            }}
            transition={{ duration: heart.duration, ease: "linear" }}
            className="heart-item"
            style={{ fontSize: `${heart.size}px`, left: `${heart.left}%` }}
          >
            ❤️
          </motion.div>
        ))}
      </div>

      {/* Carrossel centralizado */}
      <div className="carrosel-wrapper">
        <Carrosel3 titulo="" videos={series} />
      </div>
    </div>
  );
}

export default App;