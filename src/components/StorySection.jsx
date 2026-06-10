export default function StorySection({ title, text, reverse }) {
  return (
    <div className="section">
      <div className="container" style={{
        display:"grid",
        gridTemplateColumns: reverse ? "1fr 1.2fr" : "1.2fr 1fr",
        gap:"60px",
        alignItems:"center"
      }}>

        <div style={{order: reverse ? 2 : 1}}>
          <h2>{title}</h2>
          <p style={{marginTop:"12px"}}>{text}</p>
        </div>

        <div className="strategy-box">
  <span>Strategic Architecture Model</span>
</div>

      </div>
    </div>
  );
}