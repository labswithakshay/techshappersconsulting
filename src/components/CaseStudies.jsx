const cases = [
  {
    client: "Global Bank",
    title: "Core Banking Modernization",
    problem: "Legacy systems limiting scalability.",
    approach: "Migrated to modular cloud architecture.",
    outcome: "78% faster deployments, 99.98% uptime."
  },
  {
    client: "Healthcare Network",
    title: "Unified Data Platform",
    problem: "Fragmented patient data systems.",
    approach: "Built centralized data lakehouse.",
    outcome: "65% faster analytics, improved accuracy."
  },
  {
    client: "Retail Enterprise",
    title: "AI Forecasting System",
    problem: "Low inventory prediction accuracy.",
    approach: "ML-based demand forecasting integrated into ERP.",
    outcome: "42% better accuracy, 28% cost reduction."
  }
];

export default function CaseStudies() {
  return (
    <div className="section">
      <div className="container">

        <h2>Selected Engagements</h2>

        {cases.map((c, i) => (
          <div
            key={i}
            className="case-item"
          >
            <p style={{color:"var(--accent)", fontSize:"13px"}}>
              {c.client}
            </p>

            <h3>{c.title}</h3>

            <p><strong>Challenge:</strong> {c.problem}</p>
            <p><strong>Approach:</strong> {c.approach}</p>
            <p><strong>Impact:</strong> {c.outcome}</p>

          </div>
        ))}

      </div>
    </div>
  );
}