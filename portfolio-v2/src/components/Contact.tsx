 "use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="relative min-h-screen py-20 px-8 md:px-12 lg:px-24 max-w-7xl mx-auto w-full flex flex-col justify-center">
      <div className="w-full relative">
        <span className="tags h1-tag-top hidden md:block" style={{ top: '-1rem', left: '1rem' }}>&lt;h2&gt;</span>
        <h1 className="mb-12 text-white">Contact Me</h1>
        <span className="tags h1-tag-bottom hidden md:block" style={{ bottom: '-1rem', left: '1rem' }}>&lt;h2/&gt;</span>
        
        <p className="text-gray-400 leading-relaxed text-lg mb-8 font-light">
          I am interested in freelance opportunities - especially ambitious or large projects. 
          However, if you have other request or question, don't hesitate to use the form.
        </p>

        <form className="mt-12 space-y-6">
          <div className="flex flex-col md:flex-row gap-6">
            <input type="text" placeholder="Name" className="flex-1 bg-[#181818] border border-[#282828] text-white p-4 focus:outline-none focus:border-[#00ffa3] transition-colors" />
            <input type="email" placeholder="Email" className="flex-1 bg-[#181818] border border-[#282828] text-white p-4 focus:outline-none focus:border-[#00ffa3] transition-colors" />
          </div>
          <input type="text" placeholder="Subject" className="w-full bg-[#181818] border border-[#282828] text-white p-4 focus:outline-none focus:border-[#00ffa3] transition-colors" />
          <textarea rows={6} placeholder="Message" className="w-full bg-[#181818] border border-[#282828] text-white p-4 focus:outline-none focus:border-[#00ffa3] transition-colors resize-none" />
          
          <div className="flex justify-start pt-4">
            <button type="submit" className="px-10 py-3 border border-[#00ffa3] text-[#00ffa3] hover:bg-[#00ffa3] hover:text-black transition-all duration-300 tracking-[0.2em] font-bold uppercase text-sm">
              Send Message!
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
