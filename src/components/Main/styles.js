import styled, { css } from "styled-components";
import { MdDevices, MdEmail } from "react-icons/md";
import { IoMdRocket, IoMdBulb, IoMdSpeedometer } from "react-icons/io";
import { AiFillPhone } from "react-icons/ai";
import { motion } from "framer-motion";
import { AiFillGithub } from "react-icons/ai";

export const GitHubIcon = styled(AiFillGithub)`
  color: black;
  align-self: flex-end;
  width: 25px;
  height: 25px;
  margin: 0 15px;
  z-index: 2;
  cursor: pointer;
`;

export const Container = styled.div`
  max-width: 96%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

export const Whoami = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  margin: 70px 0 30px 0;

  @media (max-width: 768px) {
    flex-direction: column;
  }

  .content {
    display: flex;
    flex-direction: row;
    justify-content: space-around;

    @media (max-width: 768px) {
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;

      > div {
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      p {
        margin: 15px 0 0 0;
      }
    }
  }

  h1 {
    font-size: 60px;
    color: var(--secondary);
    margin: 20px 0;

    @media (max-width: 500px) {
      font-size: 40px;
    }
  }

  p {
    font-size: 20px;
    max-width: 600px;
    margin: 15px 100px 0 0;
  }

  button {
    padding: 15px;
    width: 285px;
    background: transparent;
    border: 3px solid var(--secondary);
    color: var(--secondary);
    margin: 20px 0;
    -webkit-transition: 0.4s;
    -moz-transition: 0.4s;
    position: relative;
    transition: 0.4s;
    letter-spacing: 1px;
    cursor: pointer;

    :hover {
      box-shadow: inset 285px 0 0 0 var(--secondary);
      color: white;
    }
  }
`;

export const Porfolio = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 70px 50px;
  margin: 30px 0;
  border-radius: 20px;
  background-color: var(--branch-background);

  @media (max-width: 768px) {
    text-align: center;
  }

  .content {
  }

  .info {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;

    > span {
      @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
    }

    @media (max-width: 1120px) {
      flex-direction: column;
      align-items: center;
    }
  }

  button {
    padding: 15px;
    width: 185px;
    background: transparent;
    border: 3px solid var(--primary);
    color: var(--primary);
    height: 50px;

    -webkit-transition: 0.4s;
    -moz-transition: 0.4s;
    transition: 0.4s;
    letter-spacing: 1px;
    cursor: pointer;

    :hover {
      box-shadow: inset 185px 0 0 0 var(--primary);
      color: white;
    }
  }

  h1 {
    font-size: 60px;
    color: var(--primary);
  }

  P {
    max-width: 730px;
    margin: 20px 0;
    font-size: 20px;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    list-style: none;

    @media (max-width: 1120px) {
      justify-content: center;
    }
  }
`;

export const SubDevImg = styled.div`
  height: 400px;
  width: 100%;
  position: relative;
  background-image: ${(props) => `url(${props.src})`};
  background-position: center;
  background-size: cover;
  margin: 30px 0;
  transition: 0.2s;

  @media (min-width: 768px) {
    display: none !important;
  }

  :after {
    content: "";
    position: absolute;
    width: 104%;
    height: 94%;
    border: 1px solid white;
    top: 10px;
    left: -9px;
  }
`;

export const DevImg = styled.div`
  height: 600px;
  width: 500px;
  margin: 20px 0;
  margin: 0 70px;
  position: relative;
  background-image: ${(props) => `url(${props.src})`};
  background-position: center;
  background-size: cover;
  transition: 0.2s;

  @media (max-width: 768px) {
    display: none !important;
  }

  :after {
    content: "";
    position: absolute;
    width: 104%;
    height: 97%;
    border: 1px solid white;
    left: -10px;
  }
`;

export const Developer = styled.div`
  padding: 0 20px;
  margin: 30px 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    text-align: center;
  }

  @media (max-width: 500px) {
    > ul li {
      margin: 10px 0 10px 0;
    }
  }

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 1220px) {
      flex-direction: column;
      align-items: center;
    }
  }

  p {
    max-width: 600px;
    font-size: 20px;
    margin: 10px 0;
  }

  hr {
    margin: 30px 0;
  }

  .skills-info {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    strong {
      font-weight: 800;
      letter-spacing: 1px;
    }

    p {
      font-size: 18px;
      color: var(--text);
    }
  }

  h1 {
    font-size: 60px;
    color: var(--tertiary);

    @media (max-width: 500px) {
      font-size: 40px;
    }
  }

  h2 {
    color: var(--gray);
    margin: 0 0 50px 0;
  }

  .chart-list {
    flex-direction: column;
    margin: 0;

    > li {
      margin: 10px 0;
      width: 100%;

      > h2 {
        font-size: 18px;
        margin: 5px 0;
        color: white;
      }
    }
  }

  ul {
    list-style: none;
    display: flex;
    flex-shrink: 0;
    flex-direction: row;
    flex-wrap: wrap;
    margin: 30px 0 0 0;

    @media (max-width: 768px) {
      align-items: center;
      justify-content: center;
    }
  }
  .active {
    --all: 0px;
    --top-right: 20px;

    border: 3px solid var(--tertiary);

    background: linear-gradient(
          45deg,
          var(--tertiary) 0 calc(var(--bottom-left, var(--all)) + 3px),
          transparent 0
        )
        bottom left / 50% 50%,
      linear-gradient(
          -45deg,
          var(--tertiary) 0 calc(var(--bottom-right, var(--all)) + 3px),
          transparent 0
        )
        bottom right/50% 50%,
      linear-gradient(
          135deg,
          var(--tertiary) 0 calc(var(--top-left, var(--all)) + 3px),
          transparent 0
        )
        top left / 50% 50%,
      linear-gradient(
          -135deg,
          var(--tertiary) 0 calc(var(--top-right, var(--all)) + 3px),
          transparent 0
        )
        top right / 50% 50%,
      var(--img, transparent);
    background-origin: border-box;
    background-repeat: no-repeat;
    -webkit-mask: linear-gradient(
          45deg,
          transparent 0 var(--bottom-left, var(--all)),
          #fff 0
        )
        bottom left,
      linear-gradient(
          -45deg,
          transparent 0 var(--bottom-right, var(--all)),
          #fff 0
        )
        bottom right,
      linear-gradient(135deg, transparent 0 var(--top-left, var(--all)), #fff 0)
        top left,
      linear-gradient(
          -135deg,
          transparent 0 var(--top-right, var(--all)),
          #fff 0
        )
        top right;
    -webkit-mask-size: 50.5% 50.5%;
    -webkit-mask-repeat: no-repeat;

    > svg {
      color: white;
      fill: white;
    }
  }
`;

export const Hacker = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 50px;
  margin: 30px 0;
  border-radius: 20px;
  background-color: var(--branch-background);

  @media (max-width: 768px) {
    text-align: center;

    img {
      display: none;
    }
  }

  .wrapper {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 30px 0;

    @media (max-width: 1220px) {
      flex-direction: column;
      align-items: center;

      img {
        margin: 0;
      }
    }
  }

  .terminal {
    background-color: var(--default-background);
    width: 600px;
    border: 1px solid var(--quaternay);

    @media (max-width: 768px) {
      width: 100%;
    }
  }

  h1 {
    font-size: 60px;
    color: var(--quaternay);
  }

  p {
    max-width: 632px;
    font-size: 20px;
    margin: 30px 0 20px 0;
  }

  img {
    max-width: 50%;
    margin: 30px 30px 0 0;
  }
`;

export const Contact = styled.div`
  padding: 0 20px;
  margin: 30px 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    align-items: center;
  }

  @media (max-width: 500px) {
    text-align: center;
  }

  .main-div {
    display: flex;
    flex-direction: row;
    align-items: flex-start;

    @media (max-width: 500px) {
      flex-direction: column;
      align-items: center;
    }
  }

  .sub-div {
    display: flex;
    flex-direction: row;
  }

  p {
    max-width: 600px;
    font-size: 12px;
    margin: 5px 0;
  }

  img {
    width: 129px;
    height: 129px;
    border-radius: 50%;
    border: 3px solid var(--quinary);
    margin: 20px 0;
  }

  span {
    display: flex;
    flex-direction: column;
    margin: 20px 20px;

    @media (max-width: 500px) {
      align-items: center;
    }

    > div {
      display: flex;
      align-items: center;

      > svg {
        margin: 0 10px 0 0;
      }
    }
  }

  h1 {
    font-size: 60px;
    color: var(--quinary);

    @media (max-width: 500px) {
      font-size: 40px;
    }
  }

  h2 {
    font-size: 16px;
    color: var(--gray);
  }
`;

export const TopTab = styled.div`
  background: var(--primary);
  width: 42px;
  height: 2px;
  margin: 20px 0;
`;

export const ProjectCard = styled(motion.li)`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 0 15px;
  word-wrap: break-word;
  min-width: 250px;
  max-width: 250px;
  height: 300px;
  margin: 32px 32px 0 0;
  background-position: center;
  background-size: cover;

  :nth-child(1) {
    background: linear-gradient(180deg, #f3cbab, #feedca);
  }

  :nth-child(2) {
    background: linear-gradient(180deg, #b1e5f9, #f4d2fe);
  }

  :nth-child(3) {
    background: linear-gradient(180deg, #dbb4f3, #efb7d7);
  }

  :nth-child(4) {
    background: linear-gradient(180deg, #efa971, #e4cafe);
  }

  h1 {
    font-size: 20pt;
    white-space: nowrap;
    word-break: break-all;
    word-wrap: break-word;
    color: black;
    font-weight: 800;
  }

  p {
    font-size: 8pt;
    word-spacing: 20px;
    font-weight: bold;
    color: black;
  }

  @media (max-width: 650px) {
    margin: 26px 0;
  }

  &:hover {
    border: 1px solid var(--primary);
    background: transparent;

    :after {
      display: block;
    }

    > h1 {
      color: white;
    }

    > p {
      color: white;
    }

    > svg {
      color: white;
    }
  }

  ::after {
    content: "";
    position: absolute;
    display: none;
    width: 100%;
    height: 100%;
    border: 1px solid var(--primary);
    right: 10px;
    top: 10px;
    z-index: 1;
  }
  /* 
  ::before {
    content: "";
    display: none;
    height: 100%;
    width: 100%;
    position: absolute;
    border-radius: 5px;
    top: 0;
    left: 0;
    transition: 0.2s;
    background-color: rgba(24, 24, 24, 0.75);
  } */

  a {
    font-size: 12px;
    font-weight: bold;
    word-break: break-word;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    text-decoration: none;
    color: white;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100px;
    height: 100px;
    border-radius: 50%;
    opacity: 0;
    background-color: var(--primary);
    cursor: pointer;
    transition: 0.25s;
  }

  :hover a {
    opacity: 100;
  }
`;

const iconCss = css`
  fill: gray;
  color: gray;
  height: 100%;
  width: 100%;
  transition: 0.2s;
  cursor: pointer;

  &:hover,
  :active {
    fill: white;
    color: white;
  }
`;

export const FastIcon = styled(IoMdSpeedometer)`
  ${iconCss}
`;

export const ResIcon = styled(MdDevices)`
  ${iconCss}
`;

export const DynamicIcon = styled(IoMdRocket)`
  ${iconCss}
`;

export const BulbIcon = styled(IoMdBulb)`
  ${iconCss}
`;

export const PhoneIcon = styled(AiFillPhone)`
  width: 30px;
  height: 30px;
`;

export const EmailIcon = styled(MdEmail)`
  width: 30px;
  height: 30px;
`;

export const SkillCard = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: none;
  padding: 15px;
  min-width: 120px;
  min-height: 80px;
  max-width: 120px;
  max-height: 80px;
  position: relative;
  margin: 10px 15px 10px 0;

  @media (max-width: 500px) {
    width: 320px;
  }
`;
