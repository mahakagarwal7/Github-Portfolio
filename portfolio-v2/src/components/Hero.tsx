"use client";

import { motion } from "framer-motion";

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
  const jobArray = ['A', 'I', ' ', 'E', 'n', 'g', 'i', 'n', 'e', 'e', 'r'];

  return (
    <section id="home" className="page-container home-page">
      <div className="text-zone">
        <h1>
          <span className="h1-tag-top">&lt;h1&gt;</span>
          <AnimatedLetters strArray={['H', 'i', ',']} idx={10} />
          <br />
          <AnimatedLetters strArray={['I', "'", 'm']} idx={13} />
          {" "}
          <span className="text-[#00ffa3]">
            <AnimatedLetters strArray={['M']} idx={16} />
          </span>
          <AnimatedLetters strArray={['a', 'h', 'a', 'k', ',']} idx={17} />
          <br />
          <AnimatedLetters strArray={jobArray} idx={22} />
          <span className="h1-tag-bottom">&lt;h1/&gt;</span>
        </h1>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 3.5 }}
        >
          <h2 className="mt-8 text-text-grey font-light tracking-[0.3em] uppercase text-xs">
            Systems-focused AI Engineer / Full-Stack Architect
          </h2>

          <div className="mt-12">
            <a
              href="#contact"
              className="px-10 py-3 border border-[#00ffa3] text-[#00ffa3] hover:bg-[#00ffa3] hover:text-black transition-all duration-300 tracking-[0.4em] font-bold uppercase text-[11px]"
            >
              Contact me!
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
