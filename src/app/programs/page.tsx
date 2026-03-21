import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeader from "@/components/SectionHeader";
import ProgramCard from "@/components/ProgramCard";
import { programs } from "@/lib/data";

export const metadata: Metadata = {
  title: "Programs",
  description:
    "Explore our structured training programs — from beginner foundations to advanced athletic conditioning.",
};

const faqs = [
  {
    q: "How do I choose the right program?",
    a: "Our coaches will assess your fitness level, goals, and experience during a free consultation session before recommending the best starting point.",
  },
  {
    q: "Can I switch programs mid-way?",
    a: "Yes, with coach approval. We assess your progress and readiness before any program transition to ensure you're ready for the next level.",
  },
  {
    q: "What equipment do I need?",
    a: "All programs use our well-equipped facilities. For home training supplements, your coach will provide specific recommendations based on your program.",
  },
  {
    q: "Is there a trial period?",
    a: "We offer a 1-week trial for new members so you can experience our coaching style and community before committing to a full program.",
  },
];

const steps = [
  {
    step: "01",
    title: "Free Consultation",
    desc: "Book a free 30-minute session with a coach to discuss your goals and current fitness level.",
  },
  {
    step: "02",
    title: "Program Matching",
    desc: "Your coach recommends the right program based on your assessment and specific goals.",
  },
  {
    step: "03",
    title: "Orientation Week",
    desc: "Get oriented to the facility, meet your community, and learn the foundational principles of your program.",
  },
  {
    step: "04",
    title: "Start Training",
    desc: "Begin your structured journey with ongoing support, education, and progress tracking every step.",
  },
];

export default function ProgramsPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center">
            <span className="inline-block text-orange-400 text-sm font-semibold uppercase tracking-widest mb-6">
              Training Programs
            </span>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.05] mb-6">
              Your path,{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                your pace.
              </span>
            </h1>
            <p className="text-zinc-400 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
              Three structured programs designed to meet you where you are and
              take you where you want to go. Each includes education, coaching,
              and community.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="pb-24 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {programs.map((program, i) => (
              <ProgramCard key={program.id} program={program} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* What's Included + Steps */}
      <section className="py-24 bg-zinc-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <AnimatedSection direction="left">
              <span className="inline-block text-orange-400 text-sm font-semibold uppercase tracking-widest mb-6">
                Every Program Includes
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-white mb-6">
                More than just a workout plan
              </h2>
              <p className="text-zinc-400 text-lg mb-8 leading-relaxed">
                Every CFA program combines structured training, ongoing
                education, and accountability support to ensure you don&rsquo;t
                just get results — you understand why they&rsquo;re happening.
              </p>
              <ul className="space-y-4">
                {[
                  "Personalized coach assignment",
                  "Weekly progress assessments",
                  "Nutrition guidance & meal timing education",
                  "Technique video library access",
                  "Community group chat & accountability",
                  "Monthly fitness education workshops",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-zinc-300 text-sm"
                  >
                    <CheckCircle2 className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-white mb-6">
                  How to get started
                </h3>
                <div className="space-y-6">
                  {steps.map((item) => (
                    <div key={item.step} className="flex gap-4">
                      <div className="w-10 h-10 bg-orange-500/10 border border-orange-500/20 rounded-xl flex items-center justify-center text-orange-400 font-black text-sm shrink-0">
                        {item.step}
                      </div>
                      <div>
                        <h4 className="text-white font-semibold text-sm mb-1">
                          {item.title}
                        </h4>
                        <p className="text-zinc-500 text-sm leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-zinc-950">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mb-12">
            <SectionHeader
              badge="FAQ"
              title="Common questions"
              subtitle="Everything you need to know before getting started."
            />
          </AnimatedSection>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <div className="bg-zinc-900 border border-zinc-800 hover:border-zinc-700 rounded-2xl p-6 transition-colors">
                  <h3 className="text-white font-semibold mb-3">{faq.q}</h3>
                  <p className="text-zinc-500 text-sm leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="mt-12 text-center">
            <p className="text-zinc-500 mb-3 text-sm">Still have questions?</p>
            <Link
              href="/contact"
              className="text-orange-400 hover:text-orange-300 font-semibold transition-colors"
            >
              Contact us directly →
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
