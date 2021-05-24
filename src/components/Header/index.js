import React, { useEffect, useState } from "react";
import { Container, Logo, MobileMenu } from "./styles";

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
        <li>ABOUT ME</li>
        <li>PROJECTS</li>
        <li>CONTACT</li>
        <li>BLOG</li>
        <button>GITHUB</button>
      </ul>
      {active && (
        <ul className="mobile-menu">
          <li>ABOUT ME</li>
          <li>PROJECTS</li>
          <li>CONTACT</li>
          <li>BLOG</li>
          <button>GITHUB</button>
        </ul>
      )}
      <MobileMenu barColor="white" isActive={active} onClick={showMenu} />
    </Container>
  );
}

export default Header;
