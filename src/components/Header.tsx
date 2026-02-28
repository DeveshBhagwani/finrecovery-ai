"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/60 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        
        <Link href="/" className="text-2xl font-bold text-accent">
          FinRecovery AI
        </Link>

        <nav className="hidden md:flex gap-8 text-gray-300">
          <Link href="/">Home</Link>
          <Link href="#architecture">Architecture</Link>
          <Link href="#team">Team</Link>
        </nav>

        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="http://127.0.0.1:7860"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-primary text-black font-semibold px-5 py-2 rounded-xl shadow-lg hover:shadow-primary/50 transition"
        >
          Launch Agent App
        </motion.a>

      </div>
    </header>
  );
}