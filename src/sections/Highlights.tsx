import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type TabType = 'achievements' | 'certifications' | 'activities';

const tabContent = {
  achievements: {
    title: 'Achievements',
    items: [
      '1st Runners-up in BIT-CODE 5.0 Hackathon for innovative backend-driven solution (2024)',
      'Innovate with Ballerina Recognition (2024)',
      'Code Rush Finalists (2024)',
      'Completed GLO Program by Global Learning Lab'
    ]
  },
  certifications: {
    title: 'Certifications',
    items: [
      'IT Security - Role of SOC Analysts (Alison Certified, 2024)',
      'MoraXtreme 9.0 certified (2024)'
    ]
  },
  activities: {
    title: 'Activities & Volunteering',
    items: [
      'Participant in All‑Island Chess Tournament; Board Prize Winner (District)',
      'Vice‑Captain, School Level Cricket (SLSCA)',
      'Member, Students Union, University of Moratuwa',
      'Mentored microcontroller‑based project development',
      'AIESEC in Colombo South — Global Volunteering (Ongoing), Brand & Public Relations',
      'Languages: English • Sinhala • Tamil'
    ]
  }
};

export default function Highlights() {
  const [activeTab, setActiveTab] = useState<TabType>('achievements');

  return (
    <section id="highlights" className="py-20 md:py-24 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-2">
          <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Highlights
          </span>
        </h2>
        <p className="text-center text-white/70 mb-8">My journey, achievements, and contributions</p>
        
        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {Object.entries(tabContent).map(([key, { title }]) => (
            <button
              key={key}
              onClick={() => setActiveTab(key as TabType)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
                activeTab === key
                  ? 'bg-cyan-600 text-white border border-cyan-400/50 shadow-lg shadow-cyan-500/20'
                  : 'text-white/80 hover:text-white bg-white/5 hover:bg-white/10 border border-transparent hover:border-white/10'
              }`}
            >
              {title}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="mt-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-4"
            >
              <ul className="grid md:grid-cols-2 gap-4">
                {tabContent[activeTab].items.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="p-4 rounded-lg border border-white/10 bg-white/20 hover:bg-white/30 transition-colors backdrop-blur-sm"
                  >
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
