"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2 } from "lucide-react";

const inputClass =
  "w-full bg-zinc-800 border border-zinc-700 focus:border-orange-500 focus:ring-1 focus:ring-orange-500/20 text-white placeholder-zinc-600 rounded-xl px-4 py-3 text-sm outline-none transition-all duration-200";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate submission delay
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsLoading(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center text-center py-12 gap-5"
      >
        <div className="w-16 h-16 bg-green-500/10 border border-green-500/20 rounded-2xl flex items-center justify-center">
          <CheckCircle2 className="w-8 h-8 text-green-400" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-white mb-2">Message Sent!</h3>
          <p className="text-zinc-400 text-sm max-w-sm">
            Thank you for reaching out. Our team will get back to you within 24
            hours.
          </p>
        </div>
        <button
          onClick={() => {
            setIsSubmitted(false);
            setFormData({ name: "", email: "", subject: "", message: "" });
          }}
          className="text-orange-400 text-sm hover:text-orange-300 transition-colors font-medium"
        >
          Send another message →
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label
            htmlFor="name"
            className="block text-xs font-semibold text-zinc-400 uppercase tracking-widest mb-2"
          >
            Full Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="Juan dela Cruz"
            className={inputClass}
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-xs font-semibold text-zinc-400 uppercase tracking-widest mb-2"
          >
            Email Address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="juan@example.com"
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="subject"
          className="block text-xs font-semibold text-zinc-400 uppercase tracking-widest mb-2"
        >
          Subject
        </label>
        <textarea
          id="subject"
          name="subject"
          required
          value={formData.subject}
          onChange={handleChange}
          rows={2}
          placeholder="What is your message about?"
          className={`${inputClass} resize-none`}
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-xs font-semibold text-zinc-400 uppercase tracking-widest mb-2"
        >
          Your Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          value={formData.message}
          onChange={handleChange}
          rows={5}
          placeholder="Tell us about your fitness goals and how we can help..."
          className={`${inputClass} resize-none`}
        />
      </div>

      <motion.button
        type="submit"
        disabled={isLoading}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full bg-orange-500 hover:bg-orange-600 disabled:opacity-70 disabled:cursor-not-allowed text-white font-semibold py-4 rounded-xl transition-colors flex items-center justify-center gap-2 shadow-lg shadow-orange-500/20"
      >
        {isLoading ? (
          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
        ) : (
          <>
            <Send className="w-4 h-4" />
            Send Message
          </>
        )}
      </motion.button>
    </form>
  );
}
