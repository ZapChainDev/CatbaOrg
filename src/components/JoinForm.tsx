import { Facebook } from "lucide-react";

const FB_URL = "https://www.facebook.com/profile.php?id=61580688798000";

export default function JoinForm() {
  return (
    <div className="flex flex-col items-center justify-center text-center py-12 gap-6">
      <div className="w-16 h-16 bg-orange-500/10 rounded-full flex items-center justify-center">
        <Facebook className="w-8 h-8 text-orange-400" />
      </div>
      <div>
        <h3 className="text-2xl font-black text-white mb-2">
          Join CFA on Facebook
        </h3>
        <p className="text-zinc-400 text-sm max-w-xs mx-auto leading-relaxed">
          Message us on Facebook to get started. We&rsquo;ll welcome you and let
          you know when and where our next session is.
        </p>
      </div>
      <a
        href={FB_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3.5 rounded-xl transition-all hover:scale-105 duration-200 shadow-lg shadow-orange-500/25"
      >
        <Facebook className="w-4 h-4" />
        Message us on Facebook
      </a>
    </div>
  );
}
