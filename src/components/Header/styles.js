import styled from "styled-components";
import { HamburgerCollapse } from "react-animated-burgers";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  z-index: 999;
  transition: 0.2s;
  position: fixed;
  top: 0;
  background: ${({ active }) =>
    active ? "var(--branch-background)" : "transparent"};
  box-shadow: 0px;
  padding: ${({ scrollHeader }) => (scrollHeader ? "5px" : "25px")};

  @media (min-width: 769px) {
    background: ${({ scrollHeader }) =>
      scrollHeader ? "var(--branch-background)" : "transparent"};
    box-shadow: ${({ scrollHeader }) =>
      scrollHeader ? "0 2px 10px rgb(0 0 0 / 15%)" : "0px"};
    scroll-margin-top: 100px;
  }

  .pc-menu {
    list-style: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0 20px;

    @media (max-width: 769px) {
      display: none;
    }
  }

  .mobile-menu {
    list-style: none;
    display: flex;
    flex-direction: column;
    padding: 20px;
    align-items: center;

    @media (min-width: 769px) {
      display: none;
    }
  }

  ul li {
    color: white;
    margin: 20px;
    font-weight: bold;
    font-size: 13px;
    cursor: pointer;
  }

  ul li:after {
    display: block;
    content: "";
    border-bottom: ${({ scrollHeader }) =>
      scrollHeader ? "1px solid var(--primary)" : "1px solid white"};
    transform: scaleX(0);
    transition: transform 150ms ease-in-out;
  }
  ul li:hover:after {
    transform: scaleX(1);
  }

  ul button {
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    border: ${({ scrollHeader }) =>
      scrollHeader ? "1px solid var(--primary)" : "1px solid white"};
    color: white;
    font-weight: bold;
    font-size: 13px;
    height: 20px;
    -webkit-transition: 0.2s;
    -moz-transition: 0.2s;
    transition: 0.2s;
    cursor: pointer;

    :hover {
      box-shadow: ${({ scrollHeader }) =>
        scrollHeader
          ? "inset 0 40px 0 0 var(--primary)"
          : "inset 0 40px 0 0 white"};
      color: ${({ scrollHeader }) => (scrollHeader ? "white" : "black")};
    }
  }
`;

export const MobileMenu = styled(HamburgerCollapse)`
  display: none;

  @media (max-width: 769px) {
    display: block;
  }
`;

export const Logo = styled.div``;
