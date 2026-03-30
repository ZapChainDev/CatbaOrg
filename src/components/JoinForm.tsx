"use client";

import { useState } from "react";
import { signInWithPopup, signOut } from "firebase/auth";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import { auth, db, googleProvider } from "@/lib/firebase";
import { LogIn, LogOut, CheckCircle, Loader2, User } from "lucide-react";
import type { User as FirebaseUser } from "firebase/auth";

type Step = "sign-in" | "form" | "success";

interface FormData {
  fullName: string;
  age: string;
  location: string;
  fbLink: string;
}

export default function JoinForm() {
  const [step, setStep] = useState<Step>("sign-in");
  const [user, setUser] = useState<FirebaseUser | null>(null);
  const [loading, setLoading] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState<FormData>({
    fullName: "",
    age: "",
    location: "",
    fbLink: "",
  });

  async function handleGoogleSignIn() {
    setLoading(true);
    setError("");
    try {
      const result = await signInWithPopup(auth, googleProvider);
      setUser(result.user);
      setForm((prev) => ({
        ...prev,
        fullName: result.user.displayName ?? "",
      }));
      setStep("form");
    } catch {
      setError("Sign-in failed. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!user) return;

    const age = parseInt(form.age, 10);
    if (!form.fullName.trim() || !form.location.trim() || !form.fbLink.trim()) {
      setError("Please fill in all fields.");
      return;
    }
    if (isNaN(age) || age < 5 || age > 120) {
      setError("Please enter a valid age.");
      return;
    }

    setSubmitting(true);
    setError("");
    try {
      await setDoc(doc(db, "members", user.uid), {
        fullName: form.fullName.trim(),
        age,
        location: form.location.trim(),
        fbLink: form.fbLink.trim(),
        email: user.email,
        photoURL: user.photoURL,
        joinedAt: serverTimestamp(),
      });
      setStep("success");
    } catch {
      setError("Something went wrong saving your info. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  async function handleSignOut() {
    await signOut(auth);
    setUser(null);
    setStep("sign-in");
    setForm({ fullName: "", age: "", location: "", fbLink: "" });
    setError("");
  }

  if (step === "success") {
    return (
      <div className="flex flex-col items-center justify-center text-center py-12 gap-6">
        <div className="w-16 h-16 bg-orange-500/10 rounded-full flex items-center justify-center">
          <CheckCircle className="w-8 h-8 text-orange-400" />
        </div>
        <div>
          <h3 className="text-2xl font-black text-white mb-2">
            Welcome to CFA!
          </h3>
          <p className="text-zinc-400 text-sm leading-relaxed max-w-xs mx-auto">
            You&rsquo;re now registered. We&rsquo;ll reach out via Facebook to
            get you started. See you soon,{" "}
            <span className="text-orange-400 font-semibold">
              {form.fullName}
            </span>
            !
          </p>
        </div>
        <a
          href="https://www.facebook.com/profile.php?id=61580688798000"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-xl transition-all hover:scale-105 duration-200 shadow-lg shadow-orange-500/25 text-sm"
        >
          Visit our Facebook Page
        </a>
      </div>
    );
  }

  if (step === "sign-in") {
    return (
      <div className="flex flex-col items-center justify-center text-center py-10 gap-6">
        <div className="w-14 h-14 bg-orange-500/10 rounded-full flex items-center justify-center">
          <User className="w-7 h-7 text-orange-400" />
        </div>
        <div>
          <h3 className="text-xl font-black text-white mb-2">
            Step 1 of 2 — Sign in
          </h3>
          <p className="text-zinc-400 text-sm leading-relaxed max-w-xs mx-auto">
            Sign in with your Google account to continue your registration.
          </p>
        </div>
        {error && (
          <p className="text-red-400 text-sm bg-red-500/10 border border-red-500/20 px-4 py-2 rounded-lg">
            {error}
          </p>
        )}
        <button
          onClick={handleGoogleSignIn}
          disabled={loading}
          className="inline-flex items-center gap-3 bg-white hover:bg-zinc-100 text-zinc-900 font-semibold px-6 py-3 rounded-xl transition-all duration-200 hover:scale-105 shadow-lg text-sm disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
        >
          {loading ? (
            <Loader2 className="w-4 h-4 animate-spin" />
          ) : (
            <svg className="w-4 h-4" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
          )}
          {loading ? "Signing in…" : "Continue with Google"}
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Signed-in user pill */}
      <div className="flex items-center justify-between bg-zinc-800/60 border border-zinc-700 rounded-xl px-4 py-3">
        <div className="flex items-center gap-3">
          {user?.photoURL ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={user.photoURL}
              alt={user.displayName ?? ""}
              className="w-8 h-8 rounded-full"
            />
          ) : (
            <div className="w-8 h-8 bg-orange-500/20 rounded-full flex items-center justify-center">
              <User className="w-4 h-4 text-orange-400" />
            </div>
          )}
          <div>
            <p className="text-white text-xs font-semibold">
              {user?.displayName}
            </p>
            <p className="text-zinc-500 text-xs">{user?.email}</p>
          </div>
        </div>
        <button
          type="button"
          onClick={handleSignOut}
          className="text-zinc-500 hover:text-zinc-300 transition-colors"
          title="Sign out"
        >
          <LogOut className="w-4 h-4" />
        </button>
      </div>

      <div>
        <h3 className="text-lg font-black text-white mb-1">
          Step 2 of 2 — Your details
        </h3>
        <p className="text-zinc-500 text-xs">
          Fill in your info to complete registration.
        </p>
      </div>

      {error && (
        <p className="text-red-400 text-sm bg-red-500/10 border border-red-500/20 px-4 py-2 rounded-lg">
          {error}
        </p>
      )}

      {/* Full Name */}
      <div>
        <label className="block text-xs font-semibold text-zinc-400 uppercase tracking-widest mb-1.5">
          Full Name <span className="text-orange-500">*</span>
        </label>
        <input
          type="text"
          value={form.fullName}
          onChange={(e) => setForm((p) => ({ ...p, fullName: e.target.value }))}
          placeholder="e.g. Juan dela Cruz"
          required
          className="w-full bg-zinc-800 border border-zinc-700 focus:border-orange-500 text-white placeholder-zinc-600 rounded-xl px-4 py-3 text-sm outline-none transition-colors"
        />
      </div>

      {/* Age */}
      <div>
        <label className="block text-xs font-semibold text-zinc-400 uppercase tracking-widest mb-1.5">
          Age <span className="text-orange-500">*</span>
        </label>
        <input
          type="number"
          value={form.age}
          onChange={(e) => setForm((p) => ({ ...p, age: e.target.value }))}
          placeholder="e.g. 25"
          min={5}
          max={120}
          required
          className="w-full bg-zinc-800 border border-zinc-700 focus:border-orange-500 text-white placeholder-zinc-600 rounded-xl px-4 py-3 text-sm outline-none transition-colors"
        />
      </div>

      {/* Location */}
      <div>
        <label className="block text-xs font-semibold text-zinc-400 uppercase tracking-widest mb-1.5">
          Location / Barangay <span className="text-orange-500">*</span>
        </label>
        <input
          type="text"
          value={form.location}
          onChange={(e) => setForm((p) => ({ ...p, location: e.target.value }))}
          placeholder="e.g. Brgy. Payao, Catbalogan City"
          required
          className="w-full bg-zinc-800 border border-zinc-700 focus:border-orange-500 text-white placeholder-zinc-600 rounded-xl px-4 py-3 text-sm outline-none transition-colors"
        />
      </div>

      {/* Facebook Link */}
      <div>
        <label className="block text-xs font-semibold text-zinc-400 uppercase tracking-widest mb-1.5">
          Facebook Profile Link <span className="text-orange-500">*</span>
        </label>
        <input
          type="url"
          value={form.fbLink}
          onChange={(e) => setForm((p) => ({ ...p, fbLink: e.target.value }))}
          placeholder="https://facebook.com/yourprofile"
          required
          className="w-full bg-zinc-800 border border-zinc-700 focus:border-orange-500 text-white placeholder-zinc-600 rounded-xl px-4 py-3 text-sm outline-none transition-colors"
        />
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="w-full inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3.5 rounded-xl transition-all hover:scale-[1.02] duration-200 shadow-lg shadow-orange-500/25 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
      >
        {submitting ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            Submitting…
          </>
        ) : (
          <>
            <LogIn className="w-4 h-4" />
            Join the Association
          </>
        )}
      </button>
    </form>
  );
}
