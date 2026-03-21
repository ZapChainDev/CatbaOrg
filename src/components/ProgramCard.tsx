"use client";

import { motion } from "framer-motion";
import { Clock, Calendar, CheckCircle2, ArrowRight } from "lucide-react";

export interface Program {
  id: number;
  title: string;
  level: string;
  duration: string;
  sessions: string;
  description: string;
  highlights: string[];
  icon: string;
}

interface ProgramCardProps {
  program: Program;
  index: number;
}

const levelStyles: Record<string, string> = {
  Beginner: "text-emerald-400 bg-emerald-400/10 border-emerald-400/25",
  Intermediate: "text-sky-400 bg-sky-400/10 border-sky-400/25",
  Advanced: "text-orange-400 bg-orange-400/10 border-orange-400/25",
};

export default function ProgramCard({ program, index }: ProgramCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ y: -6 }}
      className="group relative flex flex-col bg-zinc-900 border border-zinc-800 hover:border-orange-500/40 rounded-2xl p-8 transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/5"
    >
      {/* Top accent bar */}
      <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-orange-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Icon */}
      <div className="text-5xl mb-6 leading-none">{program.icon}</div>

      {/* Level badge */}
      <span
        className={`self-start inline-block text-xs font-semibold px-3 py-1.5 rounded-full border mb-4 ${
          levelStyles[program.level] ??
          "text-zinc-400 bg-zinc-800 border-zinc-700"
        }`}
      >
        {program.level}
      </span>

      <h3 className="text-xl font-bold text-white mb-3">{program.title}</h3>
      <p className="text-zinc-400 text-sm leading-relaxed mb-6 flex-1">
        {program.description}
      </p>

      {/* Meta info */}
      <div className="flex gap-4 mb-6">
        <div className="flex items-center gap-1.5 text-xs text-zinc-500">
          <Clock className="w-3.5 h-3.5 text-zinc-600" />
          {program.duration}
        </div>
        <div className="flex items-center gap-1.5 text-xs text-zinc-500">
          <Calendar className="w-3.5 h-3.5 text-zinc-600" />
          {program.sessions}
        </div>
      </div>

      {/* Highlights */}
      <ul className="space-y-2.5 mb-6">
        {program.highlights.map((h) => (
          <li key={h} className="flex items-start gap-2 text-sm text-zinc-400">
            <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
            {h}
          </li>
        ))}
      </ul>

      {/* CTA */}
      <div className="pt-6 border-t border-zinc-800">
        <button className="group/btn w-full inline-flex items-center justify-center gap-2 bg-orange-500/10 hover:bg-orange-500 border border-orange-500/30 hover:border-orange-500 text-orange-400 hover:text-white text-sm font-semibold py-3 rounded-xl transition-all duration-200">
          Enroll in Program
          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
        </button>
      </div>
    </motion.div>
  );
}
