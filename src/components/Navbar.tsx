import { useState } from "react";
import { Link } from "react-router-dom";
import "../style/NavBar.css";

function NavBar() {
  // TODO: add react-router
  const [selectedTab, setSelectedTab] = useState(0);

  const links = [
    { id: 1, title: "Home", href: "/" },
    { id: 2, title: "Code", href: "/code" },
    { id: 3, title: "Models", href: "/models" },
    { id: 4, title: "Contact", href: "/contact" },
  ];

  return (
    <nav className="navbar">
      <ul className="navbar-links">
        {links.map((link) => (
          <li key={link.id}>
            <Link
              to={link.href}
              onClick={() => setSelectedTab(link.id)}
              className={selectedTab === link.id ? "active" : ""}
            >
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavBar;
