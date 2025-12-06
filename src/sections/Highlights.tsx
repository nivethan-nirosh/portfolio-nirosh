import { AnimatePresence, motion, useInView } from 'framer-motion';
import { useCallback, useRef, useState } from 'react';
import { FaCertificate, FaTrophy, FaUsers } from 'react-icons/fa';

type TabType = 'achievements' | 'certifications' | 'activities';

const tabData = {
  achievements: {
    label: 'Achievements',
    icon: <FaTrophy className="w-3 h-3 md:w-3.5 md:h-3.5" />,
    items: [
      { title: '1st Runners-up – BIT-CODE 5.0 Hackathon', year: '2024' },
      { title: 'Innovate with Ballerina Recognition', year: '2024' },
      { title: 'Code Rush Finalists', year: '2024' },
      { title: 'GLO Program – Global Learning Lab', year: '2024' },
    ],
  },
  certifications: {
    label: 'Certifications',
    icon: <FaCertificate className="w-3 h-3 md:w-3.5 md:h-3.5" />,
    items: [
      { title: 'IT Security – SOC Analysts (Alison)', year: '2024' },
      { title: 'MoraXtreme 9.0 Certified', year: '2024' },
    ],
  },
  activities: {
    label: 'Activities',
    icon: <FaUsers className="w-3 h-3 md:w-3.5 md:h-3.5" />,
    items: [
      { title: 'All-Island Chess Tournament – Board Prize', year: '' },
      { title: 'Vice-Captain – School Cricket (SLSCA)', year: '' },
      { title: 'Students Union – University of Moratuwa', year: '' },
      { title: 'AIESEC – Brand & Public Relations', year: '' },
    ],
  },
};

const tabs = Object.entries(tabData) as [TabType, typeof tabData.achievements][];

export default function Highlights() {
  const [activeTab, setActiveTab] = useState<TabType>('achievements');
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const handleTabChange = useCallback((key: TabType) => {
    setActiveTab(key);
  }, []);

  return (
    <section id="highlights" ref={sectionRef} className="py-16 md:py-24 lg:py-32 relative">
      <div className="container">
        {/* Header */}
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title text-2xl sm:text-3xl md:text-4xl">
            High<span className="text-[#00d4ff]">lights</span>
          </h2>
          <p className="section-subtitle text-sm md:text-base">
            Achievements, certifications & activities
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          className="flex justify-center gap-1.5 md:gap-2 mb-8 md:mb-10"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
        >
          {tabs.map(([key, { label, icon }]) => (
            <button
              key={key}
              onClick={() => handleTabChange(key)}
              className={`relative px-2.5 sm:px-3 md:px-4 py-1.5 md:py-2 rounded-lg text-[11px] sm:text-xs md:text-sm font-medium flex items-center gap-1.5 md:gap-2 transition-colors duration-150 ${activeTab === key
                  ? 'text-[#00d4ff]'
                  : 'text-white/50 hover:text-white/70'
                }`}
            >
              {activeTab === key && (
                <motion.div
                  layoutId="tabBg"
                  className="absolute inset-0 bg-[#00d4ff]/10 border border-[#00d4ff]/20 rounded-lg will-change-transform"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  style={{ transform: 'translateZ(0)' }}
                />
              )}
              <span className="relative z-10">{icon}</span>
              <span className="relative z-10 hidden sm:inline">{label}</span>
            </button>
          ))}
        </motion.div>

        {/* Content */}
        <div className="max-w-2xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="space-y-2 md:space-y-3"
            >
              {tabData[activeTab].items.map((item, i) => (
                <div
                  key={item.title}
                  className="flex items-center justify-between p-3 md:p-4 rounded-lg border border-white/5 bg-white/[0.02] hover:border-[#00d4ff]/20 hover:bg-[#00d4ff]/5 transition-colors duration-150"
                  style={{
                    opacity: 1,
                    transform: 'translateZ(0)',
                    animationDelay: `${i * 30}ms`
                  }}
                >
                  <span className="text-white/80 text-xs sm:text-sm">{item.title}</span>
                  {item.year && (
                    <span className="text-white/30 text-[10px] md:text-xs ml-2 shrink-0">{item.year}</span>
                  )}
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
