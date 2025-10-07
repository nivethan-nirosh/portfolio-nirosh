import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";

export default function Contact() {
  const contactMethods = [
    {
      icon: <FaEnvelope className="text-2xl text-cyan-400" />,
      title: "Email",
      value: "nivethanrajendran@gmail.com",
      href: "mailto:nivethanrajendran@gmail.com"
    },
    {
      icon: <FaLinkedin className="text-2xl text-cyan-400" />,
      title: "LinkedIn",
      value: "Nivethan Rajendran",
      href: "http://www.linkedin.com/in/nivethan-rajendran15"
    },
    {
      icon: <FaGithub className="text-2xl text-cyan-400" />,
      title: "GitHub",
      value: "nivethan-nirosh",
      href: "https://github.com/nivethan-nirosh"
    },
    {
      icon: <FaPhone className="text-2xl text-cyan-400" />,
      title: "Phone",
      value: "+94 70 52 33 414",
      href: "tel:+94705233414"
    }
  ];

  return (
    <section id="contact" className="relative py-24 overflow-hidden bg-transparent">
      <div className="absolute inset-0 -z-10"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-400 mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll get back to you as soon as possible!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="p-8 rounded-2xl bg-transparent backdrop-blur-sm border border-white/10 shadow-xl"
          >
            <h3 className="text-2xl font-semibold text-white mb-6">Send me a message</h3>
            <form
              action="https://formspree.io/f/mjkaebdj"
              method="POST"
              className="space-y-6"
            >
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-cyan-200 mb-1">Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-transparent transition"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-cyan-200 mb-1">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-transparent transition"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-cyan-200 mb-1">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-transparent transition"
                  placeholder="Hi Nivethan, I'd like to chat about..."
                ></textarea>
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3.5 px-6 rounded-lg bg-cyan-600 text-white font-medium hover:bg-cyan-500 transition-colors"
              >
                Send Message
              </motion.button>
              <input type="hidden" name="_next" value="https://yourdomain.com/thank-you" />
              <input type="hidden" name="_subject" value="New message from portfolio contact form" />
              <input type="text" name="_gotcha" style={{display: 'none'}} />
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="p-8 rounded-2xl bg-transparent backdrop-blur-sm border border-white/10 shadow-xl"
          >
            <h3 className="text-2xl font-semibold text-white mb-8">Contact Information</h3>
            <p className="text-white/80 mb-8">
              Feel free to reach out through any of these platforms. I'm open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            
            <ul className="space-y-4">
              {contactMethods.map((method, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ x: 5 }}
                  className="flex items-start space-x-4 p-3 rounded-lg hover:bg-white/5 transition-colors"
                >
                  <div className="flex-shrink-0 mt-0.5">
                    {method.icon}
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-cyan-300">{method.title}</h4>
                    <a 
                      href={method.href} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-white hover:text-cyan-200 transition-colors"
                    >
                      {method.value}
                    </a>
                  </div>
                </motion.li>
              ))}
            </ul>

            <div className="mt-10 pt-6 border-t border-white/10">
              <h4 className="text-sm font-medium text-cyan-300 mb-3">Based in</h4>
              <p className="text-white/80">Colombo, Sri Lanka</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
