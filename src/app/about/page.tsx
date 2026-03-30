import type { Metadata } from "next";
import Link from "next/link";
import { Target, Eye, Heart, Shield, Flame, Users } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeader from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Catbalogan Fitness Association's mission and values. A non-profit empowering Catbalogan City, Samar with accessible fitness education, coaching, and community wellness.",
  alternates: {
    canonical: "https://www.catbalogan-fitness.com/about",
  },
  openGraph: {
    title: "About Us | Catbalogan Fitness Association",
    description:
      "Learn about Catbalogan Fitness Association's mission and values. A non-profit empowering Catbalogan City, Samar with accessible fitness education and community wellness.",
    url: "https://www.catbalogan-fitness.com/about",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "About Catbalogan Fitness Association",
      },
    ],
  },
  twitter: {
    title: "About Us | Catbalogan Fitness Association",
    description:
      "Learn about Catbalogan Fitness Association's mission and values. A non-profit empowering Catbalogan City, Samar.",
  },
};

const values = [
  {
    Icon: Shield,
    title: "Safety Above All",
    description:
      "Proper form and injury prevention are non-negotiable. We educate every member on safe training fundamentals from day one.",
  },
  {
    Icon: Flame,
    title: "Passion for Progress",
    description:
      "We believe every person has untapped potential. Our coaches are relentless in helping you unlock yours.",
  },
  {
    Icon: Heart,
    title: "Community Care",
    description:
      "CFA is more than a gym — it's a family. We celebrate every milestone and support through every challenge.",
  },
  {
    Icon: Users,
    title: "Inclusive Environment",
    description:
      "Fitness is for everyone. We design our programs and spaces to welcome beginners and advanced athletes alike.",
  },
];

const milestones = [
  {
    year: "2026",
    event: "CFA Founded",
    description:
      "Catbalogan Fitness Association was established by Coach Marissa Espares with a vision to promote health, fitness, and wellness for the people of Catbalogan City.",
  },
  {
    year: "2026",
    event: "Team Comes Together",
    description:
      "Coaches Mike Espela and Carl Jead Pacanan joined the team, bringing energy, experience, and dedication to the growing organization.",
  },
  {
    year: "2026",
    event: "The Journey Begins",
    description:
      "CFA opens its doors to the community. This is just the beginning — we are committed to growing alongside the people of Catbalogan City.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="max-w-3xl">
              <span className="inline-block text-orange-400 text-sm font-semibold uppercase tracking-widest mb-6">
                About CFA
              </span>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.05] mb-8">
                We educate,
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600">
                  then we train.
                </span>
              </h1>
              <p className="text-zinc-400 text-lg sm:text-xl leading-relaxed max-w-2xl">
                Catbalogan Fitness Association was founded on a simple belief:
                the most effective fitness journey starts with education. When
                you understand your body, training becomes smarter, safer, and
                more sustainable.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-zinc-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <AnimatedSection direction="left">
              <div className="bg-zinc-900 border border-zinc-800 hover:border-orange-500/30 rounded-2xl p-8 h-full transition-colors">
                <div className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center mb-6">
                  <Target className="w-6 h-6 text-orange-400" />
                </div>
                <h2 className="text-2xl font-black text-white mb-4">
                  Our Mission
                </h2>
                <p className="text-zinc-400 leading-relaxed">
                  To empower every individual in Catbalogan City with the
                  knowledge, encouragement, and community support needed to live
                  a healthier, more active life. We provide fitness activities
                  and guidance to people of all ages and backgrounds.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div className="bg-zinc-900 border border-zinc-800 hover:border-orange-500/30 rounded-2xl p-8 h-full transition-colors">
                <div className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center mb-6">
                  <Eye className="w-6 h-6 text-orange-400" />
                </div>
                <h2 className="text-2xl font-black text-white mb-4">
                  Our Vision
                </h2>
                <p className="text-zinc-400 leading-relaxed">
                  To become the most trusted community fitness organization in
                  Eastern Visayas — a place where every resident of Catbalogan
                  has a safe, welcoming space to move, connect, and grow
                  together, regardless of their background or ability.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mb-16">
            <SectionHeader
              badge="Core Values"
              title="What drives everything we do"
              subtitle="These aren't just words on a wall — they're the principles behind everything we do and every person we welcome."
            />
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((value, i) => (
              <AnimatedSection key={value.title} delay={i * 0.1}>
                <div className="bg-zinc-900 border border-zinc-800 hover:border-orange-500/30 rounded-2xl p-6 transition-all duration-300 h-full group">
                  <div className="w-10 h-10 bg-orange-500/10 group-hover:bg-orange-500/20 rounded-xl flex items-center justify-center mb-4 transition-colors">
                    <value.Icon className="w-5 h-5 text-orange-400" />
                  </div>
                  <h3 className="text-white font-bold mb-2">{value.title}</h3>
                  <p className="text-zinc-500 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-zinc-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mb-16">
            <SectionHeader
              badge="Our Story"
              title="How we got here"
              subtitle="We are just getting started. Here is how Catbalogan Fitness Association came to be in 2026."
            />
          </AnimatedSection>

          <div className="max-w-3xl mx-auto">
            {milestones.map((m, i) => (
              <AnimatedSection key={m.event} delay={i * 0.1}>
                <div className="flex gap-6 mb-10">
                  <div className="flex flex-col items-center">
                    <div className="w-14 h-14 bg-orange-500 rounded-2xl flex items-center justify-center text-white font-black text-sm shrink-0 shadow-lg shadow-orange-500/20">
                      {m.year}
                    </div>
                    {i < milestones.length - 1 && (
                      <div className="w-px flex-1 bg-zinc-800 mt-3 min-h-8" />
                    )}
                  </div>
                  <div className="pt-3 pb-8">
                    <h3 className="text-white font-bold mb-2">{m.event}</h3>
                    <p className="text-zinc-500 text-sm leading-relaxed">
                      {m.description}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-zinc-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center">
              <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">
                Be part of our community
              </h2>
              <p className="text-zinc-400 text-lg mb-8 leading-relaxed max-w-xl mx-auto">
                Join the Catbalogan Fitness Association and start your
                education-first fitness journey today.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-xl transition-all hover:scale-105 duration-200 shadow-xl shadow-orange-500/25"
                >
                  Get in Touch
                </Link>
                <Link
                  href="/coaches"
                  className="bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200"
                >
                  Meet Our Coaches
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
