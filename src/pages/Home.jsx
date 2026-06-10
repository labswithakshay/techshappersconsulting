import { motion } from "framer-motion";
import Hero from "../components/Hero";
import StorySection from "../components/StorySection";
import CaseStudies from "../components/CaseStudies";
import CTA from "../components/CTA";

const fade = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.4 }
};

export default function Home() {
  return (
    <motion.div {...fade}>

      {/* HERO */}
      <Hero />

      {/* PROBLEM FRAMING */}
      <div className="section">
        <div className="container">

          <h2>
            Most enterprise systems fail not because of technology — but because of structure.
          </h2>

          <p style={{ maxWidth: "750px", marginTop: "14px" }}>
            Organizations accumulate tools, platforms, and teams faster than they
            design coherence. The result is fragmentation: of data, decisions,
            and execution speed.
          </p>

        </div>
      </div>

      {/* THINKING MODEL */}
      <StorySection
        title="We start by understanding system structure."
        text="We analyze dependencies, constraints, and architecture flows before proposing any transformation."
      />

      <StorySection
        title="Then we design for clarity and scale."
        text="Every decision is evaluated against long-term resilience, not short-term implementation speed."
        
      />

      {/* CAPABILITIES SNAPSHOT */}
      <div className="section">
        <div className="container">

          <h2>Core capabilities</h2>

          <div style={{ marginTop: "30px" }}>

            <p>Cloud Strategy & Architecture</p>
            <p>Data Platform Modernization</p>
            <p>AI & Intelligent Systems Integration</p>
            <p>Enterprise Modernization Programs</p>

          </div>

        </div>
      </div>

      {/* CASE STUDIES */}
      <CaseStudies />

      {/* FINAL PERSUASION SECTION */}
      <div className="section">
        <div className="container">

          <h2>
            Transformation is not a technology challenge — it is an alignment challenge.
          </h2>

          <p style={{ maxWidth: "750px", marginTop: "14px" }}>
            We work with leadership teams to align systems, data, and operating models
            so that execution becomes predictable, scalable, and measurable.
          </p>

        </div>
      </div>

      {/* CTA */}
      <CTA />

    </motion.div>
  );
}