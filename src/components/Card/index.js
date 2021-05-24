import React, { useState } from "react";
import { Container, Avatar, Name, Description, Skill } from "./styles";
import ReactCardFlip from "react-card-flip";

function Card() {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleHover = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
      <Container>
        <Avatar picture="https://avatars.githubusercontent.com/u/64869691?s=460&u=59053f974b8db0232b586f16542170c8c721a3c5&v=4" />
        <Name>Vitor Conroy</Name>
        <Description>Web Developer</Description>
        <Description>Uberaba, MG, Brazil</Description>
        <ul>
          <li>
            <Skill src={require("../../assets/react-icon.svg").default} />
          </li>
          <li>
            <Skill src={require("../../assets/js-icon.svg").default} />
          </li>
          <li>
            <Skill src={require("../../assets/node-icon.svg").default} />
          </li>
          <li>
            <Skill src={require("../../assets/sass-icon.svg").default} />
          </li>
        </ul>
        <div className="r_wrap" onClick={handleHover}> 
          <div className="b_round">

          </div>
          <div className="s_round">
          </div>
        </div>
      </Container>
      <Container>
        <Avatar picture="https://pbs.twimg.com/profile_images/1259571812444356609/KGWSjdIJ_400x400.jpg" />
        <Name>Vitor Conroy</Name>
        <Description>Ethical Hacker</Description>
        <Description>Uberaba, MG, Brazil</Description>
        <ul>
          <li>
            <Skill src={require("../../assets/python-icon.svg").default} />
          </li>
          <li>
            <Skill src={require("../../assets/bash-icon.svg").default} />
          </li>
          <li>
            <Skill src={require("../../assets/ruby-icon.svg").default} />
          </li>
          <li>
            <Skill src={require("../../assets/network-icon.svg").default} alt="network" />
          </li>
        </ul>
        <div className="r_wrap" onClick={handleHover}>
          <div className="b_round">

          </div>
          <div className="s_round">
          </div>
        </div>
      </Container>
    </ReactCardFlip>
  );
}

export default Card;
