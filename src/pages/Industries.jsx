import { motion } from "framer-motion";

const fade = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.4 }
};

export default function Industries() {
  return (
    <motion.div {...fade}>

      {/* HERO */}
      <div className="section">
        <div className="container">

          <h1>
            Industry expertise shaped by systems thinking, not vertical silos.
          </h1>

          <p style={{ maxWidth: "750px", marginTop: "16px" }}>
            We work across regulated, data-intensive, and high-scale environments
            where architecture decisions directly impact business performance.
          </p>

        </div>
      </div>

      {/* INDUSTRY CARDS */}
      <div className="section">
        <div className="container">

          <h2>Domains we operate in</h2>

          <div style={{ marginTop: "40px", display: "grid", gap: "24px" }}>

            <div className="case-item">
              <h3>Banking & Financial Services</h3>
              <p>
                We help financial institutions modernize legacy core systems,
                strengthen regulatory compliance, and enable real-time data intelligence
                across risk and customer operations.
              </p>
            </div>

            <div className="case-item">
              <h3>Healthcare & Life Sciences</h3>
              <p>
                We design unified data ecosystems that improve patient insights,
                operational efficiency, and interoperability across fragmented systems.
              </p>
            </div>

            <div className="case-item">
              <h3>Retail & Consumer Platforms</h3>
              <p>
                We enable demand forecasting, personalization systems, and scalable
                commerce architectures to support omnichannel growth.
              </p>
            </div>

            <div className="case-item">
              <h3>Energy & Utilities</h3>
              <p>
                We support modernization of grid systems, operational analytics,
                and asset intelligence platforms for efficiency and resilience.
              </p>
            </div>

            <div className="case-item">
              <h3>Public Sector & Enterprises</h3>
              <p>
                We assist in large-scale digital transformation initiatives
                focused on governance, transparency, and system modernization.
              </p>
            </div>

          </div>

        </div>
      </div>

      {/* CROSS INDUSTRY THEMES */}
      <div className="section">
        <div className="container">

          <h2>Cross-industry transformation themes</h2>

          <p style={{ maxWidth: "700px", marginTop: "10px" }}>
            While industries differ, transformation challenges often converge
            around a common set of structural issues.
          </p>

          <div style={{ marginTop: "40px", display: "grid", gap: "24px" }}>

            <div className="case-item">
              <h3>Legacy system modernization</h3>
              <p>
                Replacing fragmented, high-maintenance systems with modular,
                cloud-native architectures.
              </p>
            </div>

            <div className="case-item">
              <h3>Data fragmentation & governance</h3>
              <p>
                Creating unified data layers that enable consistent, trusted
                decision-making across organizations.
              </p>
            </div>

            <div className="case-item">
              <h3>Operational scalability</h3>
              <p>
                Designing systems that support growth without exponential increases
                in operational complexity.
              </p>
            </div>

            <div className="case-item">
              <h3>AI integration into core workflows</h3>
              <p>
                Embedding intelligence into processes rather than treating AI
                as a standalone capability.
              </p>
            </div>

          </div>

        </div>
      </div>

      {/* CLOSING */}
      <div className="section">
        <div className="container">

          <h2>Industry context, system-first thinking</h2>

          <p style={{ maxWidth: "750px", marginTop: "10px" }}>
            Our perspective is consistent across industries: real transformation
            happens when systems, not departments, are optimized.
          </p>

          <a className="btn" href="/contact">
            Discuss Your Industry Challenge
          </a>

        </div>
      </div>

    </motion.div>
  );
}