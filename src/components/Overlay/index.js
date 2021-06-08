import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container, DropIcon, Title } from "./styles";
import Particles from "react-particles-js";

function Overlay() {
  const line = "Hey! 👋:Name's Vitor,:Web Developer,:HACKER!";

  const letterContainerVariants = {
    before: { transition: { staggerChildren: 0.08 } },
    after: { transition: { staggerChildren: 0.08 } },
  };

  const letterVariants = {
    before: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
      },
    },
    after: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
      },
    },
  };

  return (
    <Container>
      <img src="https://cdn.statically.io/img/hdqwalls.com/wallpapers/minimalist-mountains-landscape-scenery-n4.jpg" />
      <Particles className="particles-styles" />
      <AnimatePresence>
        <Title
          variants={letterContainerVariants}
          initial={"before"}
          animate={"after"}
          exit={"before"}
        >
          {line.split(":").map((char, index) => (
            <div key={char + "-" + index}>
              {Array.from(char).map((letter, index) => (
                <motion.span
                  key={`${index}-${letter}`}
                  style={{
                    position: "relative",
                    display: "inline-block",
                    width: "auto",
                  }}
                  variants={letterVariants}
                >
                  {letter === " " ? "\u00A0" : letter}
                </motion.span>
              ))}
              {"\u00A0"}
            </div>
          ))}
        </Title>
      </AnimatePresence>
    </Container>
  );
}

export default Overlay;
