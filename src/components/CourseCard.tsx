"use client";

import { motion } from "framer-motion";
import { BookOpen, Clock, Users, ArrowRight } from "lucide-react";

export interface Course {
  id: number;
  title: string;
  category: string;
  lessons: number;
  duration: string;
  level: string;
  description: string;
  topics: string[];
}

interface CourseCardProps {
  course: Course;
  index: number;
}

const categoryStyles: Record<
  string,
  { label: string; class: string; bar: string }
> = {
  Foundation: {
    label: "Foundation",
    class: "text-emerald-400 bg-emerald-400/10",
    bar: "from-emerald-500 to-teal-600",
  },
  Nutrition: {
    label: "Nutrition",
    class: "text-sky-400 bg-sky-400/10",
    bar: "from-sky-500 to-blue-600",
  },
  Certification: {
    label: "Certification",
    class: "text-orange-400 bg-orange-400/10",
    bar: "from-orange-500 to-red-600",
  },
  Recovery: {
    label: "Recovery",
    class: "text-purple-400 bg-purple-400/10",
    bar: "from-purple-500 to-violet-600",
  },
};

export default function CourseCard({ course, index }: CourseCardProps) {
  const style = categoryStyles[course.category] ?? {
    label: course.category,
    class: "text-zinc-400 bg-zinc-800",
    bar: "from-zinc-600 to-zinc-700",
  };

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
      whileHover={{ y: -4 }}
      className="group flex flex-col bg-zinc-900 border border-zinc-800 hover:border-zinc-700 rounded-2xl overflow-hidden transition-all duration-300"
    >
      {/* Top accent */}
      <div
        className={`h-1 bg-gradient-to-r ${style.bar} opacity-70 group-hover:opacity-100 transition-opacity`}
      />

      <div className="flex flex-col flex-1 p-6">
        {/* Category */}
        <span
          className={`self-start inline-block text-xs font-semibold px-3 py-1.5 rounded-full mb-4 ${style.class}`}
        >
          {style.label}
        </span>

        <h3 className="text-lg font-bold text-white mb-2">{course.title}</h3>
        <p className="text-zinc-500 text-sm leading-relaxed mb-5 flex-1">
          {course.description}
        </p>

        {/* Meta */}
        <div className="flex flex-wrap gap-4 mb-5 text-xs text-zinc-600">
          <span className="flex items-center gap-1.5">
            <BookOpen className="w-3.5 h-3.5" />
            {course.lessons} lessons
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5" />
            {course.duration}
          </span>
          <span className="flex items-center gap-1.5">
            <Users className="w-3.5 h-3.5" />
            {course.level}
          </span>
        </div>

        {/* Topics */}
        <div className="flex flex-wrap gap-2 mb-6">
          {course.topics.map((topic) => (
            <span
              key={topic}
              className="text-xs text-zinc-500 bg-zinc-800 px-2.5 py-1 rounded-lg"
            >
              {topic}
            </span>
          ))}
        </div>

        {/* CTA */}
        <button className="group/btn w-full inline-flex items-center justify-center gap-2 bg-zinc-800 hover:bg-orange-500 text-zinc-300 hover:text-white text-sm font-semibold py-3 rounded-xl transition-all duration-200">
          Start Learning
          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
        </button>
      </div>
    </motion.div>
  );
}
