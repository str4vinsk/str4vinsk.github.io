import React from "react";
import { Container, Wrapper, TopTab } from "./styles";
import Slide from "react-reveal";
import Fade from "react-reveal";

function AboutPage() {
  return (
    <Container>
      <Wrapper>
        <Slide left>
          <div className="profile">
            <img src="https://avatars.githubusercontent.com/u/64869691?v=4" />
            <h4>Vitor Conroy</h4>
            <p>str4vinsk</p>
          </div>
        </Slide>
        <Fade bottom>
          <div>
            <TopTab />
            <h1>ABOUT</h1>
            <strong>
              I am a creative full stack developer, illustrator & hacker. From
              Brazil.
            </strong>
            <h2>Main Skills 👨‍💻</h2>
            <ul>
              <li>
                <p>// Languages & Frameworks</p>
                <p>Javascript, CSS, HTML,</p>
                <p>React, jQuery, Scss</p>
                <p>Python, Ruby, Shellscript,</p>
              </li>
              <li>
                <p>// Technologies</p>
                <p>Photoshop,</p>
                <p>Blender, After Effects, illustrator</p>
              </li>
            </ul>
            <h2>Languages 🇧🇷</h2>
            <ul>
              <li>
                <p>// Fluent</p>
                <span>
                  <strong>pt-BR</strong> Portugues,
                </span>
                <br></br>
                <span>
                  <strong>en-US</strong> English,
                </span>
              </li>
              <li>
                <p>// Intermediate</p>
                <span>
                  <strong>es-ES</strong> Español
                </span>
              </li>
              <li>
                <p>// Basic</p>
                <span>
                  <strong>ge-DE</strong> Deutsch
                </span>
              </li>
            </ul>
            <h2>Other Works</h2>
            <ul>
              <li>
                <p>// Youtube</p>
                <span>
                  You can check my youtube{" "}
                  <a href="https://www.youtube.com/channel/UC-7lbl0uTusOxLMAhnj79SQ">
                    channel
                  </a>{" "}
                  for amazing tech videos.
                </span>
              </li>
            </ul>
          </div>
        </Fade>
      </Wrapper>
    </Container>
  );
}

export default AboutPage;
