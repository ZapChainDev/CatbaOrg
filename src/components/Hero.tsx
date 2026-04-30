"use client";

import { motion, type Variants } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const stats = [
  { value: "2026", label: "Year Founded" },
  { value: "4", label: "Coaches" },
  { value: "Catbalogan", label: "City" },
  { value: "Nonprofit", label: "Organization" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-zinc-950">
      {/* Background glow effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-orange-500/8 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-orange-600/5 rounded-full blur-[100px]" />
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(to right, #ffffff 1px, transparent 1px)",
            backgroundSize: "72px 72px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full pt-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center gap-8"
        >
          {/* Badge */}
          <motion.div variants={itemVariants}>
            <span className="inline-flex items-center gap-1.5 sm:gap-2 bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs sm:text-sm font-medium px-3 sm:px-5 py-2 sm:py-2.5 rounded-full text-center">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-orange-500 rounded-full animate-pulse shrink-0" />
              Catbalogan&rsquo;s Premier Fitness Education Association
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-6xl lg:text-[96px] font-black text-white leading-[1.0] tracking-tight"
          >
            Learn.{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600">
              Train.
            </span>{" "}
            Transform.
          </motion.h1>

          {/* Subtext */}
          <motion.p
            variants={itemVariants}
            className="max-w-2xl text-lg sm:text-xl text-zinc-400 leading-relaxed"
          >
            Catbalogan Fitness Association is a non-profit organization
            dedicated to promoting health, fitness, and community wellness for
            everyone in Catbalogan City.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2.5 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 hover:scale-105 shadow-xl shadow-orange-500/25"
            >
              Get Involved
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-white/20 font-semibold px-8 py-4 rounded-xl transition-all duration-200"
            >
              Our Mission
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="w-full grid grid-cols-2 sm:grid-cols-4 gap-px mt-8 bg-zinc-800/40 rounded-2xl overflow-hidden border border-zinc-800/40"
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-zinc-950 px-3 sm:px-6 py-4 sm:py-6 text-center hover:bg-zinc-900/60 transition-colors min-w-0"
              >
                <div className="text-lg sm:text-3xl lg:text-4xl font-black text-white mb-1 leading-tight break-words">
                  {stat.value}
                </div>
                <div className="text-[10px] sm:text-sm text-zinc-500">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <ChevronDown className="w-6 h-6 text-zinc-700 animate-bounce" />
      </motion.div>
    </section>
  );
}
