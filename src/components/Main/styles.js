import styled, { css } from "styled-components";
import { MdDevices, MdEmail } from "react-icons/md";
import { IoMdRocket, IoMdBulb, IoMdSpeedometer } from "react-icons/io";
import { AiFillPhone } from "react-icons/ai";
import { motion } from "framer-motion";

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
        margin: 0;
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
    max-width: 800px;
    margin: 5px 100px 0 0;
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
  padding: 30px 50px;
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

  img {
    max-width: 50%;
    max-height: 50%;
    margin: 20px 0;

    @media (max-width: 768px) {
      display: none;
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
    margin: 0 0 20px 0;
  }

  ul {
    list-style: none;
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;

    @media (max-width: 768px) {
      align-items: center;
      justify-content: center;
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

  div {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 30px 0;

    @media (max-width: 1220px) {
      flex-direction: column;
      align-items: center;
    }
  }

  h1 {
    font-size: 60px;
    color: var(--quaternay);
  }

  p {
    max-width: 632px;
    font-size: 20px;
    margin: 30px 0;
  }

  img {
    max-width: 50%;
    margin: 0 30px 0 0;
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

  form {
    width: 450px;

    @media (max-width: 500px) {
      width: 250px;
    }

    > input,
    textarea {
      background: transparent;
      padding: 16px;
      width: 100%;
      max-width: 100%;
      margin: 0 0 5px 0;
      border: 1px solid var(--quinary);
      color: white;
    }

    > button {
      padding: 15px;
      width: 185px;
      background: transparent;
      border: 3px solid var(--quinary);
      color: var(--quinary);
      height: 50px;

      -webkit-transition: 0.4s;
      -moz-transition: 0.4s;
      transition: 0.4s;
      letter-spacing: 1px;
      cursor: pointer;

      :hover {
        box-shadow: inset 185px 0 0 0 var(--quinary);
        color: white;
      }
    }

    #message {
      height: 250px;
    }
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
  align-items: center;
  justify-content: center;
  word-wrap: break-word;
  min-width: 272px;
  max-width: 272px;
  height: 272px;
  margin: 26px 26px 0 0;
  border-radius: 5px;
  background-color: var(--default-background);
  background-image: ${(props) => `url(${props.picture})`};
  background-position: center;
  background-size: cover;

  @media (max-width: 650px) {
    margin: 26px 0;
  }

  &:hover {
    border: 1px solid var(--primary);

    :before {
      display: block;
    }

    > h2 {
      opacity: 0;
    }
  }

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
  }

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
  fill: white;
  color: white;
  height: 32px;
  width: 32px;
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
  ${iconCss}
`;

export const EmailIcon = styled(MdEmail)`
  ${iconCss}
`;

export const SkillCard = styled(motion.li)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;
  width: 170px;
  height: 212px;
  background: var(--skill-card);
  margin: 10px 15px 10px 0;
  border-radius: 5px;

  @media (max-width: 500px) {
    width: 100%;
  }

  span {
    border: 3px solid var(--tertiary);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    height: 62px;
    width: 62px;
    border-radius: 50%;
  }

  h3 {
    font-size: 16px;
    margin: 10px 0;
  }

  p {
    font-size: 12px;
    color: var(--gray);
    text-align: center;
  }
`;
