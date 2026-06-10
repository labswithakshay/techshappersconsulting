import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="nav">
      <div className="container nav-inner">

        {/* BRAND (HOME LINK) */}
        <NavLink
          to="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            textDecoration: "none",
            color: "inherit"
          }}
        >
          <div className="logo-box"></div>

          <div style={{ fontWeight: 600 }}>
            Techshapers <span style={{ color: "var(--accent)" }}>Consulting</span>
          </div>
        </NavLink>

        {/* NAV LINKS */}
        <div style={{ display: "flex", gap: "22px", fontSize: "14px" }}>

          <NavItem to="/" label="Home" />
          <NavItem to="/services" label="Services" />
          <NavItem to="/industries" label="Industries" />
          <NavItem to="/about" label="About" />
          <NavItem to="/contact" label="Contact" />

        </div>

      </div>
    </div>
  );
}

/* NAV ITEM COMPONENT */
function NavItem({ to, label }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive ? "nav-link active" : "nav-link"
      }
    >
      {label}
    </NavLink>
  );
}