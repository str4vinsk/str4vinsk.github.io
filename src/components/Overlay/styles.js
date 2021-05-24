import styled from "styled-components";
import { IoMdArrowDropright } from "react-icons/io";
import { motion } from "framer-motion";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
  background: linear-gradient(
    -45deg,
    var(--primary),
    var(--quaternay),
    var(--quinary)
  );
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;
  z-index: 2;

  .particles-styles {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 1;
  }

  img {
    position: absolute;
    height: 100%;
    width: 100%;
    left: 0;
    opacity: 0.2;
    top: 0;
  }

  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  h2 {
    color: var(--gray);
  }

  button {
    padding: 15px;
    width: 285px;
    background: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 3px solid white;
    font-weight: bold;
    color: white;
    margin: 20px 0;
    -webkit-transition: 0.4s;
    -moz-transition: 0.4s;
    transition: 0.4s;
    z-index: 2;
    letter-spacing: 1px;
    cursor: pointer;

    :hover {
      box-shadow: inset 285px 0 0 0 white;
      color: black;

      > svg {
        fill: black;
      }
    }
  }
`;

export const Title = styled(motion.h1)`
  font-size: calc(32px + (80 - 32) * ((100vw - 320px) / (1600 - 320)));
  max-width: 100%;
  word-break: break-word;
  z-index: 10;
  color: white;
`;

export const DropIcon = styled(IoMdArrowDropright)`
  fill: white;
  height: 20px;
  width: 20px;
`;
