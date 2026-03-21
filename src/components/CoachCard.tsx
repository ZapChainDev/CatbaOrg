"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

export interface Coach {
  id: number;
  name: string;
  title: string;
  specialization: string;
  experience: string;
  certifications: string[];
  bio: string;
  initials: string;
  color: string;
  image?: string;
}

interface CoachCarouselProps {
  coaches: Coach[];
}

export default function CoachCarousel({ coaches }: CoachCarouselProps) {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [paused, setPaused] = useState(false);

  const go = useCallback(
    (next: number) => {
      setDirection(next > current ? 1 : -1);
      setCurrent(next);
    },
    [current],
  );

  const prev = () => {
    setPaused(true);
    go((current - 1 + coaches.length) % coaches.length);
  };
  const next = useCallback(
    () => go((current + 1) % coaches.length),
    [current, coaches.length, go],
  );

  // Auto-advance every 4 seconds, pause on hover/manual interaction
  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => {
      setDirection(1);
      setCurrent((c) => (c + 1) % coaches.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [paused, coaches.length]);

  const coach = coaches[current];

  const variants = {
    enter: (d: number) => ({ x: d > 0 ? 80 : -80, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d: number) => ({ x: d > 0 ? -80 : 80, opacity: 0 }),
  };

  return (
    <div
      className="relative w-full"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="overflow-hidden rounded-3xl bg-zinc-900 border border-zinc-800">
        <AnimatePresence custom={direction} mode="wait">
          <motion.div
            key={coach.id}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col lg:flex-row"
          >
            {/* Photo */}
            <div className="relative w-full lg:w-1/2 aspect-[4/3] lg:aspect-auto lg:min-h-[520px] shrink-0">
              {coach.image ? (
                <Image
                  src={coach.image}
                  alt={coach.name}
                  fill
                  className="object-cover"
                  priority
                />
              ) : (
                <div
                  className={`w-full h-full min-h-[320px] bg-gradient-to-br ${coach.color} flex items-center justify-center`}
                >
                  <span className="text-white text-8xl font-black opacity-40">
                    {coach.initials}
                  </span>
                </div>
              )}
              {/* Gradient overlay on photo */}
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/60 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-zinc-900/40" />
              {/* Prev / Next arrows — anchored to the photo so they stay in the image on all screen sizes */}
              <button
                onClick={prev}
                className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-zinc-900/80 border border-zinc-700 hover:border-orange-500 hover:text-orange-400 text-zinc-400 flex items-center justify-center transition-all backdrop-blur-sm z-10"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={next}
                className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-zinc-900/80 border border-zinc-700 hover:border-orange-500 hover:text-orange-400 text-zinc-400 flex items-center justify-center transition-all backdrop-blur-sm z-10"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Info */}
            <div className="flex flex-col justify-center p-8 sm:p-12 lg:p-14">
              <span className="text-orange-400 text-xs font-semibold uppercase tracking-widest mb-3">
                {coach.specialization}
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-white mb-2">
                {coach.name}
              </h2>
              <p className="text-orange-400 font-medium mb-6">{coach.title}</p>
              <p className="text-zinc-400 leading-relaxed mb-8">{coach.bio}</p>

              {/* Dots */}
              <div className="flex items-center gap-2 mt-auto">
                {coaches.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      setPaused(false);
                      go(i);
                    }}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      i === current
                        ? "w-6 bg-orange-500"
                        : "w-2 bg-zinc-700 hover:bg-zinc-500"
                    }`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
