import Link from "next/link";
import { Dumbbell, Instagram, Facebook, Youtube, Twitter } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/coaches", label: "Coaches" },
  { href: "/contact", label: "Contact" },
];

const socials = [
  { Icon: Instagram, label: "Instagram" },
  { Icon: Facebook, label: "Facebook" },
  { Icon: Youtube, label: "YouTube" },
  { Icon: Twitter, label: "Twitter" },
];

export default function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-5">
              <div className="w-9 h-9 bg-orange-500 rounded-xl flex items-center justify-center">
                <Dumbbell className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="font-black text-white text-base">
                  Catbalogan
                </span>
                <span className="font-black text-orange-500 text-base">
                  {" "}
                  FA
                </span>
              </div>
            </Link>
            <p className="text-zinc-500 text-sm leading-relaxed mb-6">
              A non-profit fitness organization dedicated to empowering the
              Catbalogan City community through health education and expert-led
              fitness coaching.
            </p>
            <div className="flex gap-2">
              {socials.map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-9 h-9 bg-zinc-800 hover:bg-orange-500 rounded-lg flex items-center justify-center transition-colors text-zinc-400 hover:text-white"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-xs uppercase tracking-widest">
              Navigation
            </h3>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-zinc-500 hover:text-orange-400 text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-xs uppercase tracking-widest">
              Contact
            </h3>
            <ul className="space-y-3 text-sm text-zinc-500">
              <li className="flex gap-2">
                <span>📍</span>
                <span>Catbalogan City, Samar, Philippines</span>
              </li>
              <li className="flex gap-2">
                <span>📧</span>
                <span>info@catbaloganfa.com</span>
              </li>
              <li className="flex gap-2">
                <span>📞</span>
                <span>+63 912 345 6789</span>
              </li>
              <li className="flex gap-2">
                <span>🕒</span>
                <span>Mon–Sat: 5:00 AM – 10:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-zinc-800/60 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-zinc-600 text-sm">
            © {new Date().getFullYear()} Catbalogan Fitness Academy. All rights
            reserved.
          </p>
          <p className="text-zinc-700 text-sm">
            Non-profit · Catbalogan City, Samar
          </p>
        </div>
      </div>
    </footer>
  );
}
