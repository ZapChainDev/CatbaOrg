import type { Metadata } from "next";
import { MapPin, Clock, Facebook } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

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
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div>
            {/* Info Column */}
            <AnimatedSection direction="left">
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-black text-white mb-2">
                    Get in Touch
                  </h2>
                  <p className="text-zinc-400 leading-relaxed text-sm">
                    Have questions about our programs or courses? Want to speak
                    with a coach? Reach out to us on Facebook and we&rsquo;ll
                    respond as soon as possible.
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
