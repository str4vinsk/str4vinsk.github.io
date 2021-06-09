import React, { useEffect, useState } from "react";
import { Container, Logo, MobileMenu } from "./styles";
import { Link } from "react-router-dom";

function Header() {
  const [scrollHeader, setScroll] = useState(false);
  const [active, setActivs] = useState(false);

  const changeHeader = () => {
    if (window.scrollY >= 80) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeHeader);
  }, []);

  function showMenu(e) {
    e.preventDefault();

    setActivs(!active);
  }

  return (
    <Container scrollHeader={scrollHeader} active={active}>
      <Logo />
      <ul className="pc-menu">
        <Link to="/about" style={{ textDecoration: "none" }}>
          <li>ABOUT ME</li>
        </Link>
        <li>PROJECTS</li>
        <li>CONTACT</li>
        <li>BLOG</li>
        <Link to="/" style={{ textDecoration: "none" }}>
          <button>HOME</button>
        </Link>
      </ul>
      {active && (
        <ul className="mobile-menu">
          <Link to="/about" style={{ textDecoration: "none" }}>
            <li>ABOUT ME</li>
          </Link>
          <li>PROJECTS</li>
          <li>CONTACT</li>
          <li>BLOG</li>
          <Link to="/" style={{ textDecoration: "none" }}>
            <button>HOME</button>
          </Link>
        </ul>
      )}
      <MobileMenu barColor="white" isActive={active} onClick={showMenu} />
    </Container>
  );
}

export default Header;
