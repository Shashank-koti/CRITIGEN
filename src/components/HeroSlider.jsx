import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Hero1 from "../assets/slide1.jpg"
import Hero2 from "../assets/slide2.jpg"
import Hero3 from "../assets/slide3.jpg"

const slides = [
  {
    title: "Making Essential Medicines",
    subtitle: "More Accessible.",
    desc: "A comprehensive portfolio of high-quality injectables and oral solid dosage formulations for hospitals worldwide.",
    btn: "View Portfolio",
    link: "/portfolio",
    img: Hero1
  },
  {
    title: "Driven by Science.",
    subtitle: "Built for Impact.",
    desc: "Our research and development efforts focus on creating safe, stable, and effective pharmaceutical products.",
    btn: "Our Science",
    link: "/science",
    img: Hero2
  },
  {
    title: "Partnering for",
    subtitle: "Better Healthcare.",
    desc: "We collaborate with global healthcare institutions to deliver reliable medicines where they matter most.",
    btn: "About Us",
    link: "about/critigen-pharma",
    img: Hero3
  }
];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => setCurrent(prev => (prev + 1) % slides.length), 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-[100dvh] w-full overflow-hidden bg-black">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <img
            src={slides[current].img}
            alt={slides[current].title}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />

          <div className="absolute inset-0 flex flex-col justify-center max-w-[1200px] mx-auto px-6">
            <motion.h1
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-3xl md:text-5xl font-bold text-accent mb-2"
            >
              {slides[current].title}
            </motion.h1>
            <motion.h2
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-2xl md:text-4xl font-light text-background"
            >
              {slides[current].subtitle}
            </motion.h2>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.7 }}
              className="mt-5 max-w-[520px] text-background/80 text-sm md:text-base leading-relaxed"
            >
              {slides[current].desc}
            </motion.p>

            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="mt-8"
            >
              <button
                onClick={() => navigate(slides[current].link)}
                className="bg-primary hover:bg-primary/90 text-background px-6 py-3 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 font-semibold tracking-wide text-sm transition-all duration-300"
              >
                {slides[current].btn}
              </button>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Slider Indicators */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-12 h-1 rounded-full transition-all duration-300 ${current === idx ? 'bg-secondary' : 'bg-background/30 hover:bg-background/50'
              }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
