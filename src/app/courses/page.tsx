import type { Metadata } from "next";
import Link from "next/link";
import { GraduationCap, BookMarked, Award } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeader from "@/components/SectionHeader";
import CourseCard from "@/components/CourseCard";
import { courses } from "@/lib/data";

export const metadata: Metadata = {
  title: "Courses",
  description:
    "Explore our fitness education courses — from foundational exercise science to professional certification pathways.",
};

const highlights = [
  {
    Icon: GraduationCap,
    title: "Expert-Designed Content",
    description:
      "All courses are created and reviewed by certified fitness professionals with extensive real-world coaching experience.",
  },
  {
    Icon: BookMarked,
    title: "Self-Paced Learning",
    description:
      "Access course materials on your schedule. Complete lessons between training sessions at your own pace, on any device.",
  },
  {
    Icon: Award,
    title: "Recognized Certificates",
    description:
      "Earn certificates upon completion that validate your knowledge in specific fitness education domains.",
  },
];

export default function CoursesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center">
            <span className="inline-block text-orange-400 text-sm font-semibold uppercase tracking-widest mb-6">
              Education Hub
            </span>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.05] mb-6">
              Knowledge is your
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600">
                best training tool.
              </span>
            </h1>
            <p className="text-zinc-400 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
              Our structured courses teach the science and principles behind
              effective fitness. Learn at your own pace with expert-designed
              content that complements your training.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Highlights */}
      <section className="pb-16 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {highlights.map((h, i) => (
              <AnimatedSection key={h.title} delay={i * 0.1}>
                <div className="flex gap-4 bg-zinc-900 border border-zinc-800 rounded-2xl p-6 h-full">
                  <div className="w-10 h-10 bg-orange-500/10 rounded-xl flex items-center justify-center shrink-0">
                    <h.Icon className="w-5 h-5 text-orange-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">{h.title}</h3>
                    <p className="text-zinc-500 text-sm leading-relaxed">
                      {h.description}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-16 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mb-12">
            <SectionHeader
              badge="Available Courses"
              title="Start learning today"
              subtitle="Choose a course that aligns with your fitness goals and deepen your understanding."
            />
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {courses.map((course, i) => (
              <CourseCard key={course.id} course={course} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Certification CTA */}
      <section className="py-24 bg-zinc-900/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="bg-zinc-900 border border-orange-500/20 rounded-3xl p-12 sm:p-14 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-orange-500/5 to-transparent pointer-events-none" />
              <div className="relative z-10">
                <div className="w-14 h-14 bg-orange-500/10 border border-orange-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Award className="w-7 h-7 text-orange-400" />
                </div>
                <span className="inline-block text-orange-400 text-sm font-semibold uppercase tracking-widest mb-4">
                  Get Certified
                </span>
                <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
                  Turn your passion into expertise
                </h2>
                <p className="text-zinc-400 max-w-xl mx-auto mb-8 leading-relaxed">
                  Our certification pathway can take you from fitness enthusiast
                  to certified fitness professional. Talk to us about the full
                  certification track available at CFA.
                </p>
                <Link
                  href="/contact"
                  className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-xl transition-all hover:scale-105 duration-200 shadow-xl shadow-orange-500/25"
                >
                  Learn About Certifications
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
