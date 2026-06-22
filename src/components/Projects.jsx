import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import "./projects.css";

const PROJECTS = [
  {
  title: "🎓 Quiz Arena Pro",
  desc: "A premium quiz management platform with separate student and instructor workflows, custom quiz builder, leaderboard system, XP rewards, achievement tracking, and responsive dashboard analytics.",
  ss: "/quiz-platform.png",
  tech: ["React", "TypeScript", "Tailwind CSS", "Vite", "Lucide React"],
  live: "#",
  code: "https://github.com/shaik-asif967/Quiz-Platform-with-Leaderboard.git",
},
  {
  title: "🎉 Event Management System",
  desc: "A comprehensive web-based platform for managing college events, student registrations, attendance tracking, announcements, OD requests, reports, and administrative operations through dedicated student and admin dashboards.",
  ss: "/events-tracker.png",
  tech: ["HTML", "CSS", "JavaScript", "GitHub Pages"],
  live: "https://shaik-asif967.github.io/Event_Management_System/",
  code: "https://github.com/shaik-asif967/Event_Management_System.git"
},
  {
  title: "💼 Personal Portfolio Website",
  desc: "Modern developer portfolio built with React, TypeScript, and Framer Motion featuring projects, certifications, blogs, and responsive UI.",
  ss: "/portfolio.jpg",
  tech: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
  live: "#",
  code: "https://github.com/shaik-asif967/Professional-Portfolio.git"
},
  
  {
  title: "💰 Expense Monitor: Dark Mode Finance Terminal",
  desc: "A modern personal finance dashboard built with React and Firebase featuring real-time expense tracking, multi-device synchronization, intelligent budget alerts, interactive financial analytics, CSV export functionality, and a premium dark-mode user experience.",
  ss: "/Expense-Tracker.png",
  tech: ["React", "TypeScript", "Firebase", "Firestore", "Tailwind CSS", "Recharts", "Motion"],
  live: "#",
  code: "https://github.com/shaik-asif967/Expense-Tracker-Dashboard.git"
},
  {
    title: "🩺 Diabetes Prediction",
  desc: "Machine Learning model using Logistic Regression to predict diabetes based on patient health parameters with data preprocessing, feature scaling, and model evaluation.",
  ss: "/diabetes-prediction.png",
  tech: ["Python", "Pandas", "NumPy", "Scikit-Learn", "Matplotlib"],
  live: "#",
  code: "https://github.com/shaik-asif967/Diabetes-Prediction-using-Machine-Learning.git"
  },
  {
    title: "🚗 Car Price Predictor",
  desc: "ML-powered car price prediction system using Python, Scikit-Learn, and Flask to estimate used car prices through an interactive web application.",
  ss: "/Car-price-Prediction.png",
  tech: ["Python", "Pandas", "NumPy", "Scikit-Learn", "Flask"],
  live: "#",
  code: "https://github.com/shaik-asif967/Car-Price-Predictor-Using-Machine-Learning.git"
  }
];

export default function Projects() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-20% 0px" });

  return (
    <motion.section
      ref={sectionRef}
      className="projects-container"
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      id="projects"
    >
      <motion.div
        className="projects-card"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.18 } },
        }}
      >
        {/* Title Animation */}
        <motion.h2
                  initial={{ x: -200, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  className="projects-title"
                >
          🚀My <span className="proj">Projects</span>
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          className="projects-subtitle"
          variants={{
            hidden: { opacity: 0, y: 10 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
          }}
        >
          A collection of my major works — blending research, AI innovation.
        </motion.p>

        {/* Grid */}
        <div className="projects-grid">
          {PROJECTS.map((p, idx) => (
            <motion.div
              key={idx}
              className="project-card"
              variants={{
                hidden: { opacity: 0, y: 40, scale: 0.9 },
                visible: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    duration: 0.45,
                    ease: "easeOut",
                    delay: idx * 0.1,
                  },
                },
              }}
              whileHover={{ scale: 1.04 }}
            >
              <motion.div
                className="project-image-wrapper"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img src={p.ss} alt={p.title} className="project-image" />
              </motion.div>

              <div className="project-content">
                <h3 className="project-heading">{p.title}</h3>
                <p className="project-desc">{p.desc}</p>

                <div className="project-tech">
                  {p.tech.map((t) => (
                    <span key={t} className="tech-badge">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="project-links">
                  <motion.a
                    href={p.code}
                    target="_blank"
                    whileHover={{ scale: 1.08 }}
                    className="code-btn"
                  >
                    <Github size={14} /> Code
                  </motion.a>

                  <motion.a
                    href={p.live}
                    target="_blank"
                    whileHover={{ scale: 1.08 }}
                    className="live-btn"
                  >
                    <ExternalLink size={14} /> Live
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
}
