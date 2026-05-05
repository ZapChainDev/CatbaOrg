import type { Metadata } from "next";
import AnimatedSection from "@/components/AnimatedSection";
import CoachCarousel from "@/components/CoachCard";
import { coaches } from "@/lib/data";

export const metadata: Metadata = {
  title: "Our Coaches",
  description:
    "Meet the coaches of Catbalogan Fitness Association in Catbalogan City, Samar. Dedicated volunteer coaches delivering expert fitness guidance and community wellness programs.",
  alternates: {
    canonical: "https://www.catbalogan-fitness.com/coaches",
  },
  openGraph: {
    title: "Our Coaches | Catbalogan Fitness Association",
    description:
      "Meet the coaches of Catbalogan Fitness Association in Catbalogan City, Samar. Dedicated expert coaches delivering community fitness and wellness programs.",
    url: "https://www.catbalogan-fitness.com/coaches",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Coaches of Catbalogan Fitness Association",
      },
    ],
  },
  twitter: {
    title: "Our Coaches | Catbalogan Fitness Association",
    description:
      "Meet the coaches of Catbalogan Fitness Association — dedicated experts delivering community fitness programs in Catbalogan City, Samar.",
  },
};

export default function CoachesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center">
            <span className="inline-block text-orange-400 text-sm font-semibold uppercase tracking-widest mb-6">
              Our Coaches
            </span>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.05] mb-6">
              Learn from
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600">
                the best.
              </span>
            </h1>
            <p className="text-zinc-400 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
              Built on experience, driven by passion. Our coaches are hands-on
              practitioners committed to helping every individual in Catbalogan
              move better and feel stronger.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Coaches Carousel */}
      <section className="pb-12 bg-zinc-950">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <CoachCarousel coaches={coaches} />
        </div>
      </section>

      {/* Team Members */}
      <section className="pb-24 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mb-10">
            <span className="inline-block text-orange-400 text-sm font-semibold uppercase tracking-widest mb-3">
              Team Members
            </span>
            <h2 className="text-2xl font-black text-white">
              Behind the scenes
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-2xl">
            {[
              {
                name: "Marissa Espares",
                role: "Coach & Founder",
                initials: "ME",
                color: "from-orange-500 to-red-600",
              },
              {
                name: "Mike Espela",
                role: "Coach",
                initials: "Mi",
                color: "from-blue-500 to-cyan-600",
              },
              {
                name: "Carl Jead Pacanan",
                role: "Coach",
                initials: "CJ",
                color: "from-green-500 to-teal-600",
              },

              {
                name: "John Mark Papelirin",
                role: "Coach",
                initials: "JM",
                color: "from-purple-500 to-violet-600",
              },
              {
                name: "Jade Vasquez",
                role: "Community Member",
                initials: "JV",
                color: "from-pink-500 to-rose-600",
              },
            ].map((member, i) => (
              <AnimatedSection key={member.name} delay={i * 0.1}>
                <div className="flex items-center gap-4 bg-zinc-900 border border-zinc-800 rounded-2xl p-5">
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${member.color} flex items-center justify-center shrink-0`}
                  >
                    <span className="text-white text-sm font-black">
                      {member.initials}
                    </span>
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm">
                      {member.name}
                    </p>
                    <p className="text-zinc-500 text-xs">{member.role}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Coaching Philosophy */}
      <section className="py-24 bg-zinc-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left">
              <span className="inline-block text-orange-400 text-sm font-semibold uppercase tracking-widest mb-6">
                Our Philosophy
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-white mb-6">
                Coaches who teach,
                <br />
                not just instruct
              </h2>
              <p className="text-zinc-400 leading-relaxed mb-6">
                Every CFA coach is selected for their ability to connect with
                people, communicate clearly, and genuinely care about the
                community they serve.
              </p>
              <p className="text-zinc-400 leading-relaxed">
                While CFA is a non-profit organization, a small coaching fee
                applies to help cover operational costs and keep the association
                running sustainably for the community. All fees go directly back
                into CFA.
              </p>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "4", label: "Coaches" },
                  { value: "2026", label: "Year Founded" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 text-center"
                  >
                    <div className="text-4xl font-black text-white mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-zinc-500">{stat.label}</div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
