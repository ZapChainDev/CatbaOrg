import type { Metadata } from "next";
import { MapPin, Clock, Users, Shield, Star } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import JoinForm from "@/components/JoinForm";

export const metadata: Metadata = {
  title: "Join Us",
  description:
    "Join Catbalogan Fitness Association in Catbalogan City, Samar. Sign up today and become part of our growing fitness community.",
  alternates: {
    canonical: "https://www.catbalogan-fitness.com/contact",
  },
  openGraph: {
    title: "Join Us | Catbalogan Fitness Association",
    description:
      "Join Catbalogan Fitness Association in Catbalogan City, Samar. Sign up today and become part of our growing fitness community.",
    url: "https://www.catbalogan-fitness.com/contact",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Join Catbalogan Fitness Association",
      },
    ],
  },
  twitter: {
    title: "Join Us | Catbalogan Fitness Association",
    description:
      "Join Catbalogan Fitness Association in Catbalogan City, Samar. Become part of our fitness community today.",
  },
};

const perks = [
  {
    Icon: Users,
    title: "Community Support",
    body: "Train alongside a welcoming group of Catbalogan residents who push each other to grow.",
  },
  {
    Icon: Shield,
    title: "Expert Guidance",
    body: "Get coached by our dedicated volunteer coaches who genuinely care about your progress.",
  },
  {
    Icon: Star,
    title: "Open to Everyone",
    body: "No experience needed. Whether you're a beginner or veteran, there's a place for you here.",
  },
  {
    Icon: MapPin,
    title: "Locally Rooted",
    body: "Based in Catbalogan City, Samar — built for and by the community we serve.",
  },
];

export default function JoinPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center">
            <span className="inline-block text-orange-400 text-sm font-semibold uppercase tracking-widest mb-6">
              Join Us
            </span>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.05] mb-6">
              Start your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                journey.
              </span>
            </h1>
            <p className="text-zinc-400 text-lg sm:text-xl max-w-xl mx-auto leading-relaxed">
              Become a member of Catbalogan Fitness Association. It only takes a
              minute to sign up.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Main Section */}
      <section className="pb-24 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            {/* Left: Perks */}
            <AnimatedSection direction="left">
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-black text-white mb-2">
                    Why join CFA?
                  </h2>
                  <p className="text-zinc-400 leading-relaxed text-sm">
                    We&rsquo;re a non-profit fitness organization dedicated to
                    making health accessible to everyone in Catbalogan City.
                    When you join, you become part of a movement.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {perks.map((perk) => (
                    <div
                      key={perk.title}
                      className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5 hover:border-orange-500/30 transition-colors"
                    >
                      <div className="w-9 h-9 bg-orange-500/10 rounded-lg flex items-center justify-center mb-3">
                        <perk.Icon className="w-4 h-4 text-orange-400" />
                      </div>
                      <h3 className="text-white font-bold text-sm mb-1">
                        {perk.title}
                      </h3>
                      <p className="text-zinc-500 text-xs leading-relaxed">
                        {perk.body}
                      </p>
                    </div>
                  ))}
                </div>

                {/* How it works */}
                <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
                  <h3 className="text-white font-bold mb-4 text-sm uppercase tracking-widest">
                    How it works
                  </h3>
                  <ol className="space-y-3">
                    {[
                      "Sign in with your Google account",
                      "Fill in your name, age, location & Facebook link",
                      "Submit — we\u2019ll reach out via Facebook to welcome you!",
                    ].map((step, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="w-6 h-6 bg-orange-500 rounded-lg flex items-center justify-center text-white text-xs font-black shrink-0 mt-0.5">
                          {i + 1}
                        </span>
                        <span className="text-zinc-400 text-sm leading-relaxed">
                          {step}
                        </span>
                      </li>
                    ))}
                  </ol>
                </div>

                <div className="flex items-center gap-2 bg-zinc-900/60 border border-zinc-800 rounded-xl px-4 py-3">
                  <Clock className="w-4 h-4 text-zinc-500 shrink-0" />
                  <span className="text-zinc-500 text-xs">
                    Open Mon–Sat · 5:00 AM – 10:00 PM · Catbalogan City, Samar
                  </span>
                </div>
              </div>
            </AnimatedSection>

            {/* Right: Form */}
            <AnimatedSection direction="right">
              <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
                <JoinForm />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Catbalogan Fitness Association in Catbalogan City, Samar. Reach us for questions about fitness programs, coaching schedules, and community wellness activities.",
  alternates: {
    canonical: "https://www.catbalogan-fitness.com/contact",
  },
  openGraph: {
    title: "Contact Us | Catbalogan Fitness Association",
    description:
      "Contact Catbalogan Fitness Association in Catbalogan City, Samar. Reach us for questions about fitness programs, coaching schedules, and community wellness activities.",
    url: "https://www.catbalogan-fitness.com/contact",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Catbalogan Fitness Association",
      },
    ],
  },
  twitter: {
    title: "Contact Us | Catbalogan Fitness Association",
    description:
      "Contact Catbalogan Fitness Association in Catbalogan City, Samar for questions about fitness programs and coaching.",
  },
};

const contactInfo = [
  {
    Icon: MapPin,
    label: "Location",
    value: "Catbalogan City, Samar, Philippines",
  },
  {
    Icon: Clock,
    label: "Hours",
    value: "Mon–Sat: 5:00 AM – 10:00 PM",
  },
];

const socials = [
  {
    Icon: Facebook,
    label: "Facebook",
    handle: "Catbalogan Fitness Association",
    href: "https://www.facebook.com/profile.php?id=61580688798000",
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center">
            <span className="inline-block text-orange-400 text-sm font-semibold uppercase tracking-widest mb-6">
              Contact Us
            </span>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.05] mb-6">
              Let&rsquo;s talk{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                fitness.
              </span>
            </h1>
            <p className="text-zinc-400 text-lg sm:text-xl max-w-xl mx-auto leading-relaxed">
              Whether you&rsquo;re ready to enroll or just have questions, our
              team is here to help you take the next step.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Section */}
      <section className="pb-24 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Info Column */}
            <AnimatedSection direction="left">
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-black text-white mb-2">
                    Get in Touch
                  </h2>
                  <p className="text-zinc-400 leading-relaxed text-sm">
                    Have questions about our programs or courses? Want to speak
                    with a coach? Fill out the form and we&rsquo;ll respond
                    within 24 hours.
                  </p>
                </div>

                {/* Contact Cards */}
                <div className="space-y-3">
                  {contactInfo.map((info) => (
                    <div
                      key={info.label}
                      className="flex items-center gap-4 bg-zinc-900 border border-zinc-800 rounded-xl p-4"
                    >
                      <div className="w-10 h-10 bg-orange-500/10 rounded-lg flex items-center justify-center shrink-0">
                        <info.Icon className="w-5 h-5 text-orange-400" />
                      </div>
                      <div>
                        <p className="text-xs text-zinc-600 uppercase tracking-widest mb-0.5">
                          {info.label}
                        </p>
                        <p className="text-zinc-300 text-sm font-medium">
                          {info.value}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Social Links */}
                <div>
                  <h3 className="text-white font-semibold mb-3 text-sm">
                    Follow Us
                  </h3>
                  <div className="flex flex-col gap-2">
                    {socials.map(({ Icon, label, handle, href }) => (
                      <a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 text-zinc-400 hover:text-white text-sm px-4 py-3 rounded-xl transition-all duration-200"
                      >
                        <Icon className="w-4 h-4 text-orange-400" />
                        <span className="font-medium">{label}</span>
                        <span className="text-zinc-600 text-xs ml-auto">
                          {handle}
                        </span>
                      </a>
                    ))}
                  </div>
                </div>

                {/* Map Placeholder */}
                <div className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden h-44 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-8 h-8 text-zinc-700 mx-auto mb-2" />
                    <p className="text-zinc-600 text-sm">
                      Catbalogan City, Samar
                    </p>
                    <p className="text-zinc-700 text-xs mt-1">
                      Eastern Visayas, Philippines
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Form Column */}
            <AnimatedSection direction="right">
              <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
                <h2 className="text-xl font-bold text-white mb-2">
                  Send a Message
                </h2>
                <p className="text-zinc-500 text-sm mb-6">
                  We typically reply within one business day.
                </p>
                <ContactForm />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Quick FAQ */}
      <section className="py-16 bg-zinc-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mb-10">
            <h2 className="text-2xl font-black text-white text-center">
              Quick answers
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                q: "How do I get involved?",
                a: "Fill out the contact form above or visit us in person. There's no formal sign-up — just reach out and we'll let you know when and where our next session is.",
              },
              {
                q: "Is it really free?",
                a: "Community activities are at the coaches' discretion and may be free or low-cost. Personal coaching has a fee. Contact us directly to ask about current rates.",
              },
              {
                q: "Who can join?",
                a: "Anyone! We welcome all residents of Catbalogan City regardless of age, fitness level, or background. Just show up — you are already welcome.",
              },
            ].map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
                  <h3 className="text-white font-semibold mb-2 text-sm">
                    {item.q}
                  </h3>
                  <p className="text-zinc-500 text-sm leading-relaxed">
                    {item.a}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
