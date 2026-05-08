 "use client";

import { motion } from "framer-motion";
import Logo from "./Logo";

const AnimatedLetters = ({ strArray, idx = 1 }: { strArray: string[]; idx?: number }) => {
  return (
    <span>
      {strArray.map((char, i) => (
        <span 
          key={char + i} 
          className="blast inline-block"
          style={{ 
            animationDelay: `${(i + idx) / 10}s`,
            animationFillMode: 'both'
          }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </span>
  );
};

export default function Hero() {
  const nameArray = ['a', 'h', 'a', 'k'];
  const jobArray = ['S', 'o', 'f', 't', 'w', 'a', 'r', 'e', ' ', 'E', 'n', 'g', 'i', 'n', 'e', 'e', 'r'];

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 pb-20 px-8 md:px-12 lg:px-24 max-w-7xl mx-auto w-full">
      <div className="relative z-20 w-full flex justify-between items-center">
        {/* Left Side: Text */}
        <div className="max-w-3xl">
          <h1 className="text-white relative">
            <span className="tags h1-tag-top hidden md:block absolute -top-8 -left-4">&lt;h1&gt;</span>
          <AnimatedLetters strArray={['H', 'i', ',']} idx={10} />
          <br />
          <AnimatedLetters strArray={['I', "'", 'm']} idx={13} />
          {" "}
          <span className="relative inline-block mx-2 translate-y-1 group">
             <span className="text-[#fd2155] italic font-serif relative z-10 transition-transform duration-300 group-hover:scale-110 inline-block font-black">M</span>
             <span className="absolute inset-0 text-[#00ffa3] italic translate-x-[2px] translate-y-[2px] opacity-60 font-serif z-0 transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1 font-black">M</span>
             <span className="absolute inset-0 text-white italic -translate-x-[2px] -translate-y-[2px] opacity-0 group-hover:opacity-40 transition-all duration-300 font-serif z-0 font-black blur-[2px]">M</span>
          </span>
          <AnimatedLetters strArray={nameArray} idx={16} />
          <br />
          <AnimatedLetters strArray={jobArray} idx={22} />
          <span className="tags h1-tag-bottom hidden md:block absolute -bottom-8 -left-4">&lt;h1/&gt;</span>
        </h1>
        
        <motion.h2
          initial={{ opacity: 0, filter: "blur(10px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.5, delay: 3.5 }}
          className="text-gray-400 mt-8 text-sm tracking-[0.3em] font-light max-w-xl"
        >
          Full Stack Developer / DevOps Specialist / AI Engineer
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 4, ease: "backOut" }}
          className="mt-12"
        >
          <a href="#contact" className="contact-button group relative overflow-hidden inline-flex border-2 border-[#00ffa3] text-[#00ffa3] px-10 py-3 uppercase tracking-[0.2em] text-sm font-bold transition-all duration-300 hover:text-[#020617] hover:shadow-[0_0_20px_#00ffa3] rounded-md">
            <span className="relative z-10 transition-colors duration-300">CONTACT ME</span>
            <div className="absolute inset-0 bg-[#00ffa3] translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-out z-0" />
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300 ease-out z-0" />
          </a>
        </motion.div>
        </div>

      <div className="hidden lg:block relative w-[400px] h-[400px] z-0">
         <Logo />
      </div>
      </div>

      {/* Decorative Music Visualizer Tag - Top Right */}
      <div className="absolute top-12 right-12 flex flex-col items-end gap-2 opacity-80 z-50">
        <span className="tags !position-relative !inset-0">&lt;music&gt;</span>
        <div className="flex gap-1 h-6 items-end">
          {[0.3, 0.7, 0.4, 0.9, 0.5, 0.8].map((h, i) => (
            <motion.div 
              key={i}
              animate={{ height: [`${h*100}%`, `${(1-h)*100}%`, `${h*100}%`] }}
              transition={{ repeat: Infinity, duration: 0.8, delay: i * 0.1 }}
              className="w-1 bg-[#00ffa3]"
            />
          ))}
        </div>
        <span className="tags !position-relative !inset-0">&lt;music/&gt;</span>
      </div>
    </section>
  );
}
