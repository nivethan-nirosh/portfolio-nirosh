import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { FaCheck, FaEnvelope, FaGithub, FaLinkedin, FaPaperPlane, FaPhone } from "react-icons/fa";

const contacts = [
  { icon: <FaEnvelope />, label: "Email", value: "nivethanrajendran@gmail.com", href: "mailto:nivethanrajendran@gmail.com" },
  { icon: <FaLinkedin />, label: "LinkedIn", value: "nivethan-rajendran", href: "https://linkedin.com/in/nivethan-rajendran15" },
  { icon: <FaGithub />, label: "GitHub", value: "nivethan-nirosh", href: "https://github.com/nivethan-nirosh" },
  { icon: <FaPhone />, label: "Phone", value: "+94 70 52 33 414", href: "tel:+94705233414" },
];

export default function Contact() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    const form = e.currentTarget;
    try {
      await fetch("https://formspree.io/f/mjkaebdj", {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      setIsSubmitted(true);
      form.reset();
    } catch { /* */ }
    setIsSubmitting(false);
  };

  return (
    <section id="contact" ref={sectionRef} className="py-16 md:py-24 lg:py-32 relative">
      <div className="container">
        {/* Header */}
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title text-2xl sm:text-3xl md:text-4xl">
            Get in <span className="text-[#00d4ff]">Touch</span>
          </h2>
          <p className="section-subtitle text-sm md:text-base">
            Let's discuss your next project
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="glass-card p-5 md:p-6 lg:p-8"
          >
            {isSubmitted ? (
              <div className="text-center py-6 md:py-8">
                <div className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-3 md:mb-4 rounded-full bg-[#00d4ff]/20 flex items-center justify-center">
                  <FaCheck className="w-4 h-4 md:w-5 md:h-5 text-[#00d4ff]" />
                </div>
                <p className="text-white font-medium mb-1 text-sm md:text-base">Message Sent!</p>
                <p className="text-white/50 text-xs md:text-sm mb-3 md:mb-4">I'll get back to you soon.</p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="text-[#00d4ff] text-xs md:text-sm hover:underline"
                >
                  Send another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3 md:space-y-4">
                <input
                  name="name"
                  type="text"
                  required
                  placeholder="Name"
                  className="input-field text-sm md:text-base"
                />
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="Email"
                  className="input-field text-sm md:text-base"
                />
                <textarea
                  name="message"
                  rows={3}
                  required
                  placeholder="Message"
                  className="input-field resize-none text-sm md:text-base"
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full disabled:opacity-50 text-sm md:text-base"
                >
                  {isSubmitting ? (
                    'Sending...'
                  ) : (
                    <>Send Message <FaPaperPlane className="w-3 h-3 md:w-3.5 md:h-3.5" /></>
                  )}
                </button>
              </form>
            )}
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="space-y-3 md:space-y-4"
          >
            {contacts.map((c, i) => (
              <motion.a
                key={c.label}
                href={c.href}
                target={c.href.startsWith('http') ? '_blank' : undefined}
                rel={c.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="flex items-center gap-3 md:gap-4 p-3 md:p-4 rounded-lg border border-white/5 bg-white/[0.02] hover:border-[#00d4ff]/20 hover:bg-[#00d4ff]/5 transition-all group"
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + i * 0.1 }}
              >
                <div className="p-1.5 md:p-2 rounded-lg bg-[#00d4ff]/10 text-[#00d4ff] text-sm md:text-base">
                  {c.icon}
                </div>
                <div className="min-w-0">
                  <p className="text-white/40 text-[10px] md:text-xs">{c.label}</p>
                  <p className="text-white/80 text-xs md:text-sm group-hover:text-[#00d4ff] transition-colors truncate">
                    {c.value}
                  </p>
                </div>
              </motion.a>
            ))}

            <motion.div
              className="pt-3 md:pt-4 text-center text-white/30 text-xs md:text-sm"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.8 }}
            >
               Based in Colombo, Sri Lanka
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
