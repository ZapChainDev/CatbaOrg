import type { Metadata } from "next";
import Link from "next/link";
import { BookOpen, Users, Target, Zap } from "lucide-react";
import Hero from "@/components/Hero";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeader from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: {
    absolute: "Catbalogan Fitness Association | Learn. Train. Transform.",
  },
  description:
    "Join Catbalogan Fitness Association — a non-profit fitness organization in Catbalogan City, Samar. Community coaching, fitness education & wellness programs for all ages and levels.",
  alternates: {
    canonical: "https://www.catbalogan-fitness.com",
  },
  openGraph: {
    title: "Catbalogan Fitness Association | Learn. Train. Transform.",
    description:
      "Join Catbalogan Fitness Association — a non-profit fitness organization in Catbalogan City, Samar. Community coaching, fitness education & wellness programs for all ages.",
    url: "https://www.catbalogan-fitness.com",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Catbalogan Fitness Association – Learn. Train. Transform.",
      },
    ],
  },
  twitter: {
    title: "Catbalogan Fitness Association | Learn. Train. Transform.",
    description:
      "Join Catbalogan Fitness Association — a non-profit fitness organization in Catbalogan City, Samar. Open to all ages and fitness levels.",
  },
};

const features = [
  {
    Icon: BookOpen,
    title: "Fitness Education",
    description:
      "We share knowledge about proper movement, healthy habits, and wellness so every community member can make informed choices about their health.",
  },
  {
    Icon: Users,
    title: "Community First",
    description:
      "We are a welcoming, inclusive community where everyone — regardless of age or fitness level — belongs and is supported.",
  },
  {
    Icon: Target,
    title: "Accessible to All",
    description:
      "As a non-profit, CFA aims to keep activities as accessible as possible. Personal coaching rates apply — community activities are at the coaches\' discretion.",
  },
  {
    Icon: Zap,
    title: "Volunteer-Led",
    description:
      "Our coaches and staff are passionate volunteers who give their time to uplift the health of Catbalogan City.",
  },
];

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Why CFA Section */}
      <section className="py-24 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mb-16">
            <SectionHeader
              badge="Who We Are"
              title="A community, not a business"
              subtitle="Catbalogan Fitness Association is a non-profit dedicated to making health and fitness accessible to everyone in Catbalogan City. Activity fees are at the coaches' discretion — personal coaching rates apply."
            />
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {features.map((feature, i) => (
              <AnimatedSection key={feature.title} delay={i * 0.1}>
                <div className="flex flex-col bg-zinc-900 border border-zinc-800 hover:border-orange-500/30 rounded-2xl p-6 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/5 h-full group">
                  <div className="w-12 h-12 bg-orange-500/10 group-hover:bg-orange-500/20 rounded-xl flex items-center justify-center mb-5 transition-colors">
                    <feature.Icon className="w-6 h-6 text-orange-400" />
                  </div>
                  <h3 className="text-white font-bold mb-2">{feature.title}</h3>
                  <p className="text-zinc-500 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Are For Section */}
      <section className="py-24 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mb-16">
            <SectionHeader
              badge="Who We're For"
              title="Open to everyone"
              subtitle="Catbalogan Fitness Association was built for the people of Catbalogan City — open to everyone regardless of age, background, or fitness level."
            />
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                heading: "Beginners welcome",
                body: "Never exercised before? That's exactly who we're here for. Our coaches meet you where you are and guide you at your own pace.",
                icon: "🌱",
              },
              {
                heading: "All ages, all backgrounds",
                body: "From students to seniors, from athletes to those just starting out — CFA is a space for every resident of Catbalogan City.",
                icon: "🤝",
              },
              {
                heading: "Open to everyone",
                body: "CFA welcomes all residents of Catbalogan City. Community activities vary — personal coaching has a fee. Reach out to ask about current rates.",
                icon: "💚",
              },
            ].map((card, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 h-full flex flex-col">
                  <div className="text-3xl mb-4">{card.icon}</div>
                  <h3 className="text-white font-bold mb-3">{card.heading}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed flex-1">
                    {card.body}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="py-24 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mb-12">
            <SectionHeader
              badge="Coming Soon"
              title="More exciting things ahead"
              subtitle="We're working on some big things for the CFA community. Stay tuned."
            />
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-2xl mx-auto">
            {[
              {
                icon: "👕",
                title: "Merch Soon",
                desc: "Official CFA gear is on the way. Represent the community.",
              },
              {
                icon: "🎉",
                title: "More Surprises",
                desc: "Exciting updates, events, and more coming your way.",
              },
            ].map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="flex flex-col items-center text-center bg-zinc-900 border border-zinc-800 rounded-2xl p-8 h-full">
                  <div className="text-5xl mb-4">{item.icon}</div>
                  <h3 className="text-white font-bold text-lg mb-2">
                    {item.title}
                  </h3>
                  <p className="text-zinc-500 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                  <span className="mt-4 inline-block text-xs font-semibold uppercase tracking-widest text-orange-400 border border-orange-500/30 rounded-full px-3 py-1">
                    Coming Soon
                  </span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-24 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="relative bg-zinc-900 border border-orange-500/20 rounded-3xl p-8 sm:p-12 lg:p-16 text-center overflow-hidden">
              {/* Glow effects */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-64 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute bottom-0 right-1/4 w-64 h-32 bg-orange-600/5 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10">
                <span className="inline-block text-orange-400 text-sm font-semibold uppercase tracking-widest mb-6">
                  Start Your Journey
                </span>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
                  Be part of our
                  <br />
                  community.
                </h2>
                <p className="text-zinc-400 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
                  Catbalogan Fitness Association is open to everyone. Join us
                  and move, connect, and grow alongside your neighbors.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link
                    href="/contact"
                    className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-xl transition-all hover:scale-105 duration-200 shadow-xl shadow-orange-500/25"
                  >
                    Get Involved
                  </Link>
                  <Link
                    href="/about"
                    className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200"
                  >
                    Our Mission
                  </Link>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
