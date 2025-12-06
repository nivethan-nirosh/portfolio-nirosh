import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FaArrowRight, FaCalendar, FaClock, FaLinkedin, FaMedium } from "react-icons/fa";

type BlogPost = {
    id: number;
    title: string;
    excerpt: string;
    category: string;
    date: string;
    readTime: string;
    link: string;
    platform: "medium" | "linkedin";
};

const BLOG_POSTS: BlogPost[] = [
    {
        id: 1,
        title: "A Gentle Introduction to RAG — You Can Learn It Today!",
        excerpt: "Learn the fundamentals of RAG architecture and how it enhances LLMs with external knowledge.",
        category: "AI/ML",
        date: "2025",
        readTime: "8 min",
        link: "https://medium.com/@nivethanrajendran/a-gentle-introduction-to-retrieval-augmented-generation-rag-you-can-learn-it-today-6f44796e6413",
        platform: "medium",
    },
    {
        id: 2,
        title: "PayHere Integration with Spring Boot: Step-by-Step Guide",
        excerpt: "Complete guide to integrating PayHere payment gateway with Spring Boot applications.",
        category: "Backend",
        date: "2025",
        readTime: "15 min",
        link: "https://www.linkedin.com/posts/nivethan-rajendran15_springboot-payhere-paymentgateway-activity-7280043816521277440-kQc_",
        platform: "linkedin",
    },
];

const categoryColors: Record<string, string> = {
    Backend: "#00d4ff",
    "AI/ML": "#ec4899",
};

const platformIcons = {
    medium: <FaMedium className="w-3.5 h-3.5 md:w-4 md:h-4" />,
    linkedin: <FaLinkedin className="w-3.5 h-3.5 md:w-4 md:h-4" />,
};

export default function Blog() {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

    return (
        <section id="blog" ref={sectionRef} className="py-16 md:py-24 lg:py-32 relative">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title text-2xl sm:text-3xl md:text-4xl">
                        Blog <span className="text-[#00d4ff]">Articles</span>
                    </h2>
                    <p className="section-subtitle text-sm md:text-base">
                        Sharing knowledge on engineering and AI
                    </p>
                </motion.div>

                {/* Articles */}
                <div className="grid md:grid-cols-2 gap-4 md:gap-6 max-w-4xl mx-auto">
                    {BLOG_POSTS.map((post, index) => (
                        <motion.a
                            key={post.id}
                            href={post.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative block overflow-hidden rounded-xl md:rounded-2xl border border-white/10 bg-white/[0.02] hover:border-white/20 transition-all"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15 }}
                        >
                            {/* Gradient */}
                            <div
                                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                style={{ background: `linear-gradient(135deg, ${categoryColors[post.category]}15 0%, transparent 50%)` }}
                            />

                            <div className="relative p-4 md:p-6 lg:p-8">
                                {/* Top Row */}
                                <div className="flex items-center justify-between mb-3 md:mb-4">
                                    <div className="flex items-center gap-2 md:gap-3">
                                        <div
                                            className="p-1.5 md:p-2 rounded-lg"
                                            style={{ background: `${categoryColors[post.category]}20`, color: categoryColors[post.category] }}
                                        >
                                            {platformIcons[post.platform]}
                                        </div>
                                        <span
                                            className="text-[10px] md:text-xs font-medium px-2 py-0.5 md:py-1 rounded-full"
                                            style={{ background: `${categoryColors[post.category]}15`, color: categoryColors[post.category] }}
                                        >
                                            {post.category}
                                        </span>
                                    </div>
                                    <span className="text-[10px] md:text-xs text-white/40 flex items-center gap-1">
                                        <FaClock className="w-2.5 h-2.5 md:w-3 md:h-3" />
                                        {post.readTime}
                                    </span>
                                </div>

                                {/* Title */}
                                <h3 className="text-sm sm:text-base md:text-lg font-semibold text-white mb-2 md:mb-3 group-hover:text-[#00d4ff] transition-colors leading-tight line-clamp-2">
                                    {post.title}
                                </h3>

                                {/* Excerpt */}
                                <p className="text-white/50 text-xs md:text-sm leading-relaxed mb-3 md:mb-4 line-clamp-2">
                                    {post.excerpt}
                                </p>

                                {/* Footer */}
                                <div className="flex items-center justify-between">
                                    <span className="text-[10px] md:text-xs text-white/40 flex items-center gap-1">
                                        <FaCalendar className="w-2.5 h-2.5 md:w-3 md:h-3" />
                                        {post.date}
                                    </span>
                                    <motion.span
                                        className="flex items-center gap-1.5 md:gap-2 text-xs md:text-sm font-medium text-[#00d4ff]"
                                        whileHover={{ x: 5 }}
                                    >
                                        Read
                                        <FaArrowRight className="w-2.5 h-2.5 md:w-3 md:h-3" />
                                    </motion.span>
                                </div>
                            </div>

                            {/* Bottom glow */}
                            <div
                                className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-500"
                                style={{ background: categoryColors[post.category] }}
                            />
                        </motion.a>
                    ))}
                </div>

                {/* CTA */}
                <motion.div
                    className="mt-8 md:mt-10 text-center"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                >
                    <a
                        href="https://medium.com/@nivethanrajendran"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-white/50 hover:text-[#00d4ff] transition-colors text-xs md:text-sm"
                    >
                        <FaMedium className="w-3.5 h-3.5 md:w-4 md:h-4" />
                        Follow on Medium
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
