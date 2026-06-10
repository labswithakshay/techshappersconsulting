import { motion } from "framer-motion";

const fade = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.4 }
};

export default function About() {
  return (
    <motion.div {...fade}>

      {/* HERO */}
      <div className="section">
        <div className="container">

          <h1>
            We are a consulting practice focused on clarity, structure, and scalable transformation.
          </h1>

          <p style={{ maxWidth: "750px", marginTop: "16px" }}>
            Atlas Consulting helps enterprises rethink how systems are designed,
            how data flows, and how technology enables business outcomes.
            Our focus is not on tools — but on architecture, alignment, and impact.
          </p>

        </div>
      </div>

      {/* BELIEF SYSTEM */}
      <div className="section">
        <div className="container">

          <h2>How we think</h2>

          <div style={{ marginTop: "30px", display: "grid", gap: "24px" }}>

            <div className="case-item">
              <h3>Systems define outcomes</h3>
              <p>
                Most enterprise challenges are not technology problems —
                they are system design problems. We focus on structure before execution.
              </p>
            </div>

            <div className="case-item">
              <h3>Complexity is the real risk</h3>
              <p>
                As organizations scale, unmanaged complexity becomes the primary barrier
                to speed, reliability, and innovation.
              </p>
            </div>

            <div className="case-item">
              <h3>Clarity drives transformation</h3>
              <p>
                The goal of consulting is not delivery — it is clarity that enables
                better long-term decisions.
              </p>
            </div>

          </div>

        </div>
      </div>

      {/* APPROACH */}
      <div className="section">
        <div className="container">

          <h2>Our approach</h2>

          <p style={{ maxWidth: "700px", marginTop: "10px" }}>
            We follow a structured engagement model designed to reduce ambiguity
            and align stakeholders around outcomes.
          </p>

          <div style={{ marginTop: "40px", display: "grid", gap: "24px" }}>

            <div className="case-item">
              <h3>1. Understand</h3>
              <p>
                We analyze existing systems, constraints, and organizational goals
                to establish a clear baseline.
              </p>
            </div>

            <div className="case-item">
              <h3>2. Design</h3>
              <p>
                We define target architectures and operating models aligned with
                long-term scalability and resilience.
              </p>
            </div>

            <div className="case-item">
              <h3>3. Enable</h3>
              <p>
                We support execution through structured guidance, engineering alignment,
                and governance models.
              </p>
            </div>

          </div>

        </div>
      </div>

      {/* DIFFERENTIATION */}
      <div className="section">
        <div className="container">

          <h2>What sets us apart</h2>

          <div style={{ marginTop: "30px" }}>

            <p>We prioritize architecture over implementation noise.</p>
            <p>We align technology decisions with business structure.</p>
            <p>We focus on long-term scalability, not short-term delivery.</p>
            <p>We operate as thinking partners, not execution vendors.</p>

          </div>

        </div>
      </div>

      {/* CLOSING */}
      <div className="section">
        <div className="container">

          <h2>Let’s build clarity together</h2>

          <p style={{ maxWidth: "700px", marginTop: "10px" }}>
            If you're modernizing systems, scaling architecture, or redefining
            your data strategy — we help bring structure to complexity.
          </p>

          <a className="btn" href="/contact">
            Start a Conversation
          </a>

        </div>
      </div>

    </motion.div>
  );
}