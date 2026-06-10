import { motion } from "framer-motion";

const fade = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.4 }
};

export default function Contact() {
  return (
    <motion.div {...fade}>

      {/* HERO */}
      <div className="section">
        <div className="container">

          <h1>
            Start a conversation about your transformation challenges.
          </h1>

          <p style={{ maxWidth: "750px", marginTop: "16px" }}>
            We work with executive teams, architects, and transformation leaders
            who are rethinking systems, data, and operating models.
          </p>

        </div>
      </div>

      {/* ENGAGEMENT TYPES */}
      <div className="section">
        <div className="container">

          <h2>How engagements begin</h2>

          <div style={{ marginTop: "30px", display: "grid", gap: "24px" }}>

            <div className="case-item">
              <h3>Transformation advisory</h3>
              <p>
                Strategic guidance on cloud, data, and enterprise architecture decisions.
              </p>
            </div>

            <div className="case-item">
              <h3>Architecture assessment</h3>
              <p>
                Deep evaluation of system structure, scalability, and modernization gaps.
              </p>
            </div>

            <div className="case-item">
              <h3>Execution alignment support</h3>
              <p>
                Helping teams align implementation with target-state architecture.
              </p>
            </div>

          </div>

        </div>
      </div>

      {/* FORM SECTION */}
      <div className="section">
        <div className="container">

          <h2>Share your context</h2>

          <p style={{ maxWidth: "700px", marginTop: "10px" }}>
            This is not a generic contact form. It helps us understand your situation
            before we respond.
          </p>

          {/* FORM */}
          <div style={{
            marginTop: "40px",
            display: "grid",
            gap: "16px",
            maxWidth: "600px"
          }}>

            <input placeholder="Full name"
              style={inputStyle} />

            <input placeholder="Work email"
              style={inputStyle} />

            <input placeholder="Organization"
              style={inputStyle} />

            <input placeholder="Area of interest (Cloud, Data, AI, Modernization)"
              style={inputStyle} />

            <textarea
              placeholder="Briefly describe your challenge"
              rows="5"
              style={{ ...inputStyle, resize: "none" }}
            />

            <button className="btn">
              Submit Inquiry
            </button>

          </div>

        </div>
      </div>

      {/* RESPONSE EXPECTATION */}
      <div className="section">
        <div className="container">

          <h2>Response approach</h2>

          <p style={{ maxWidth: "750px", marginTop: "14px" }}>
            We review every inquiry manually. If there is alignment, we respond
            with a structured discussion outline within 24–48 hours.
          </p>

        </div>
      </div>

      {/* FINAL CLOSE */}
      <div className="section">
        <div className="container">

          <h2>
            Clarity starts with a conversation.
          </h2>

          <p style={{ maxWidth: "750px", marginTop: "14px" }}>
            Most transformation failures begin with misalignment. Our role is
            to help define the structure before execution begins.
          </p>

        </div>
      </div>

    </motion.div>
  );
}

/* INPUT STYLE */
const inputStyle = {
  padding: "12px 14px",
  border: "1px solid rgba(15,23,42,0.15)",
  borderRadius: "8px",
  fontSize: "14px",
  outline: "none",
  fontFamily: "inherit"
};