"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="page-container contact-page">
      <div className="text-zone">
        <h1>
          <span className="h1-tag-top">&lt;h2&gt;</span>
          Contact Me
          <span className="h1-tag-bottom">&lt;h2/&gt;</span>
        </h1>
        
        <p>
          I am interested in freelance opportunities - especially ambitious or large projects. 
          However, if you have other request or question, don't hesitate to use the form.
        </p>

        <form className="mt-12 space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <input type="text" placeholder="Name" className="flex-1" />
            <input type="email" placeholder="Email" className="flex-1" />
          </div>
          <input type="text" placeholder="Subject" />
          <textarea rows={4} placeholder="Message" className="resize-none" />
          
          <div className="flex justify-end">
            <button type="submit" className="px-10 py-3 border border-[#00ffa3] text-[#00ffa3] hover:bg-[#00ffa3] hover:text-black transition-all duration-300 tracking-[0.4em] font-bold uppercase text-[11px]">
              Send Message!
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
