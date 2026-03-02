"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <div className="space-y-32">

      {/* HERO SECTION */}
      <section className="min-h-[80vh] flex flex-col justify-center items-center text-center relative">

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold bg-linear-to-r from-primary to-accent bg-clip-text text-transparent"
        >
          Multi Agent Framework for Financial Recovery Systems
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-6 text-gray-400 max-w-2xl text-lg"
        >
          Leveraging Zero-Shot Learning to handle unseen market disruptions 
          and generalize financial distress scenarios without task-specific data.
        </motion.p>

        <div className="mt-10 flex gap-6">

          <Link
            href="/dashboard"
            className="bg-primary text-black px-6 py-3 rounded-xl font-semibold hover:scale-105 transition"
          >
            View Dashboard
          </Link>

          <a
            href="http://127.0.0.1:7860"
            target="_blank"
            className="border border-accent px-6 py-3 rounded-xl hover:bg-accent hover:text-white transition"
          >
            Launch Agent App
          </a>

        </div>

      </section>

      {/* PROBLEM VS SOLUTION */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="glass-card p-8"
        >
          <h2 className="text-2xl font-semibold text-red-400 mb-4">
            The Problem
          </h2>
          <p className="text-gray-400 leading-relaxed">
            Traditional financial recovery systems rely heavily on historical datasets 
            and predefined risk models. During unprecedented market crashes or novel 
            economic disruptions, these systems fail to generalize beyond past trends, 
            leading to inaccurate assessments and delayed recovery actions.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="glass-card p-8"
        >
          <h2 className="text-xl font-semibold text-emerald-400">
            The Solution
          </h2>
          <p className="text-gray-400 leading-relaxed">
            Our framework deploys a coalition of specialized AI agents powered by 
            Multimodal Transformers and Zero-Shot Learning. By generalizing financial 
            distress concepts across unseen scenarios, the system enables strategic 
            recovery planning without requiring task-specific training data.
          </p>
        </motion.div>

      </section>

      {/* ARCHITECTURE SECTION */}
      <section
        id="architecture"
        className="max-w-6xl mx-auto text-center space-y-16"
      >
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold bg-linear-to-r from-primary to-accent bg-clip-text text-transparent"
        >
          System Architecture
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">

          {/* Stage 1 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="glass-card p-8 space-y-4"
          >
            <h3 className="text-xl font-semibold text-accent">
              Multimodal Ingestion
            </h3>
            <p className="text-gray-400">
              Structured and unstructured financial inputs including 
              documents, balance sheets, market reports, and visual data 
              are processed into unified representations.
            </p>
          </motion.div>

          {/* Stage 2 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="glass-card p-8 space-y-4"
          >
            <h3 className="text-xl font-semibold text-primary">
              Zero-Shot Reasoning Layer
            </h3>
            <p className="text-gray-400">
              Five specialized agents perform analytical reasoning 
              without scenario-specific training data, enabling 
              adaptation to unseen economic disruptions.
            </p>
          </motion.div>

          {/* Stage 3 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="glass-card p-8 space-y-4"
          >
            <h3 className="text-xl font-semibold text-accent">
              Agent Collaboration & Strategy Synthesis
            </h3>
            <p className="text-gray-400">
              Agents engage in structured debate and consensus-building 
              to generate optimized recovery strategies tailored to 
              emerging financial crises.
            </p>
          </motion.div>

        </div>
      </section>

      {/* AGENTS SECTION */}
      <section className="max-w-6xl mx-auto space-y-16 text-center">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold bg-linear-to-r from-primary to-accent bg-clip-text text-transparent"
        >
          Specialized AI Agents
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">

          {[
            {
              title: "Document Analysis Agent",
              description:
                "Extracts and interprets structured and unstructured financial data from reports, contracts, and balance sheets using multimodal embeddings.",
            },
            {
              title: "Quantitative Reasoning Agent",
              description:
                "Performs numerical forecasting, liquidity modeling, and statistical risk evaluation without relying on prior crisis-specific training data.",
            },
            {
              title: "Risk Assessment Agent",
              description:
                "Evaluates systemic and scenario-based risk exposure by identifying hidden vulnerabilities across financial indicators.",
            },
            {
              title: "Recovery Strategy Agent",
              description:
                "Generates strategic intervention plans, restructuring proposals, and liquidity stabilization pathways.",
            },
            {
              title: "Synthesis Agent",
              description:
                "Aggregates insights from all agents through structured debate to produce a consensus-driven financial recovery blueprint.",
            },
          ].map((agent, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card p-8 text-left hover:scale-105 transition duration-300 hover:shadow-xl hover:shadow-primary/20"
            >
              <h3 className="text-xl font-semibold text-accent mb-3">
                {agent.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {agent.description}
              </p>
            </motion.div>
          ))}

        </div>
      </section>

    </div>
  );
}