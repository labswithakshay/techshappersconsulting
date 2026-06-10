import { motion } from "framer-motion";

const fade = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.4 }
};

export default function Services() {
  return (
    <motion.div {...fade}>

      {/* HERO SECTION */}
      <div className="section">
        <div className="container">

          <h1>
            Consulting capabilities built for enterprise transformation.
          </h1>

          <p style={{ maxWidth: "700px", marginTop: "16px" }}>
            We help organizations design scalable cloud architectures,
            modernize data ecosystems, and embed AI into core business systems.
            Our work focuses on clarity, structure, and measurable impact.
          </p>

        </div>
      </div>

      {/* CAPABILITIES */}
      <div className="section">
        <div className="container">

          <h2>Core Capabilities</h2>

          <p style={{ marginTop: "10px", maxWidth: "700px" }}>
            Each capability is designed as an end-to-end transformation lever,
            not a standalone technical service.
          </p>

          <div style={{ marginTop: "40px", display: "grid", gap: "24px" }}>

            <div className="case-item">
              <h3>Cloud Strategy & Architecture</h3>
              <p>
                Define enterprise cloud roadmaps aligned with scalability,
                security, and long-term operational efficiency.
              </p>
            </div>

            <div className="case-item">
              <h3>Data Platform Modernization</h3>
              <p>
                Build unified data ecosystems that enable real-time analytics,
                governance, and decision intelligence across the enterprise.
              </p>
            </div>

            <div className="case-item">
              <h3>AI & Intelligent Automation</h3>
              <p>
                Embed AI into workflows to improve forecasting, operational
                efficiency, and decision-making systems.
              </p>
            </div>

            <div className="case-item">
              <h3>Enterprise Modernization</h3>
              <p>
                Transform legacy systems into modular, cloud-native platforms
                optimized for agility and resilience.
              </p>
            </div>

          </div>

        </div>
      </div>

      {/* ENGAGEMENT MODEL */}
      <div className="section">
        <div className="container">

          <h2>How We Work</h2>

          <p style={{ maxWidth: "700px", marginTop: "10px" }}>
            Our engagement model is structured to reduce ambiguity and deliver
            measurable outcomes at every stage.
          </p>

          <div style={{ marginTop: "40px", display: "grid", gap: "24px" }}>

            <div className="case-item">
              <h3>1. Diagnose</h3>
              <p>
                We assess current-state architecture, workflows, and constraints
                to identify structural inefficiencies.
              </p>
            </div>

            <div className="case-item">
              <h3>2. Design</h3>
              <p>
                We create target-state architectures aligned with business and
                technology objectives.
              </p>
            </div>

            <div className="case-item">
              <h3>3. Deliver</h3>
              <p>
                We guide implementation through agile execution, governance,
                and engineering alignment.
              </p>
            </div>

          </div>

        </div>
      </div>

      {/* OUTCOME SECTION */}
      <div className="section">
        <div className="container">

          <h2>Outcomes That Matter</h2>

          <p style={{ maxWidth: "700px", marginTop: "10px" }}>
            Our focus is not on delivering technology — but on enabling measurable
            business transformation.
          </p>

          <div style={{ marginTop: "30px" }}>

            <p>✔ Reduced operational complexity across enterprise systems</p>
            <p>✔ Improved scalability and resilience of core platforms</p>
            <p>✔ Faster delivery cycles through modern architecture</p>
            <p>✔ Data-driven decision making at executive level</p>

          </div>

        </div>
      </div>

    </motion.div>
  );
}