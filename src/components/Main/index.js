import React, { useEffect, useState } from "react";
import Zoom from "react-reveal/Zoom";
import Slide from "react-reveal/Slide";
import Bounce from "react-reveal/Bounce";
import Fade from "react-reveal/Fade";
import Card from "../Card";
import { AnimatedSocialIcon } from "react-animated-social-icons";
import {
  Container,
  Whoami,
  Porfolio,
  TopTab,
  Developer,
  SkillCard,
  FastIcon,
  ResIcon,
  DynamicIcon,
  GitHubIcon,
  BulbIcon,
  Contact,
  ProjectCard,
  PhoneIcon,
  EmailIcon,
  Hacker,
} from "./styles";
import ContactForm from "../ContactForm";
import { motion } from "framer-motion";

const ProgressBar = (props) => {
  const { bgcolor, completed } = props;

  const containerStyles = {
    height: "5px",
    width: "100%",
    backgroundColor: "white",
  };

  const fillerStyles = {
    height: "100%",
    width: `${completed}%`,
    backgroundColor: bgcolor,
  };

  return (
    <li style={containerStyles}>
      <div style={fillerStyles}></div>
    </li>
  );
};

function Main() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`https://api.github.com/users/str4vinsk/repos`)
      .then((res) => res.json())
      .then((repodata) => {
        setData(repodata.slice(0, 8));
      });
  }, []);

  const [text, setText] = useState({
    title: "RESPONSIVE",
    text: "todos os meus sites serão responsivos",
  });

  const [active, setActive] = useState({ [1]: true });
  const cards = [
    {
      id: 1,
      title: "~ RESPONSIVE",
      text: "All of my websites will be fully responsive, working in any device, big or small.",
    },
    { id: 2, title: "~ FAST", text: "vai pro inferno" },
    { id: 3, title: "~ DYNAMIC" },
    { id: 4, title: "~ INTUITIVE" },
  ];

  function changeData(title, text, id) {
    setText({ title: title, text: text });
    setActive({ [id]: true });
  }

  return (
    <Container>
      <Whoami>
        <Slide left>
          <TopTab />
          <h1>About Me</h1>
        </Slide>
        <div className="content">
          <Bounce left>
            <div>
              <p>
                Hey! My name is Vitor, I am a software developer and an ethical
                hacker. Since I was little, I have an innate desire to
                understand how things work, further an obsession with technology
                and art. These characteristics made me enter ​​hacking, web
                development, and digital design fields, where I finally found
                myself.
              </p>
              <p>
                Through years of constantly learning, I had many opportunities
                to work in a vast spectrum of web technologies what let me
                gather a significant amount of experiences and knowledge. Using
                this knowledge I enjoy creating things that live on the internet
                with an interactive, responsive and creative UI/UX! And with a
                secure, updated, and functioning back-end.
              </p>
              <p>
                Besides it, i use the several knowledge that I acquired through
                years of study about operating systems, computer networks, web
                development and more, to identify, test, and report
                vulnerabilities in digital systems.
              </p>
              <button>Curriculum Vitae (PDF)</button>
            </div>
          </Bounce>
          <Bounce right>
            <Card />
          </Bounce>
        </div>
      </Whoami>
      <Porfolio>
        <div className="content">
          <div className="info">
            <Zoom>
              <span>
                <TopTab />
                <h1>My Porfolio</h1>
                <p>
                  A small gallery of my recent projects is imported from the
                  GitHub API V3, collecting my recently edited repositories and
                  converting them here.
                </p>
              </span>
            </Zoom>
            <button
              onClick={() =>
                (window.location.href =
                  "https://github.com/str4vinsk?tab=repositories")
              }
            >
              See More
            </button>
          </div>
          <ul>
            <Zoom>
              <ul>
                <ProjectCard>
                  <GitHubIcon
                    onClick={() => (window.location.href = "github.com")}
                  />
                  <h1>GitHub Clone</h1>
                  <p>API REACTJS</p>
                </ProjectCard>
                <ProjectCard>
                  <GitHubIcon
                    onClick={() => (window.location.href = "github.com")}
                  />
                  <h1>Spotify Clone</h1>
                  <p>API HTML/CSS JS</p>
                </ProjectCard>
                <ProjectCard>
                  <GitHubIcon
                    onClick={() => (window.location.href = "github.com")}
                  />
                  <h1>Subnautica PDA</h1>
                  <p>JSON HTML/CSS JS</p>
                </ProjectCard>
                <ProjectCard>
                  <GitHubIcon
                    onClick={() => (window.location.href = "github.com")}
                  />
                  <h1>Twitter Clone</h1>
                  <p>RES REACTJS</p>
                </ProjectCard>
              </ul>
            </Zoom>
          </ul>
        </div>
      </Porfolio>
      <Developer>
        <Bounce right>
          <TopTab />
          <h1>Web Developer</h1>
          <h2>Creating New Things Everyday!</h2>
        </Bounce>
        <div>
          <Slide left>
            <span>
              <p>
                I'm a full-stack developer, I love to build websites that are
                fast, responsive, interactive, and built with the best
                practices. My skills with hacking and network allow me to build
                complex, easy-to-read, secure, and with the most updated
                technologies back-ends.
              </p>
              <p>
                I have serious passion for UI effects, animations and creating
                intuitive, dynamic user experiences.
              </p>
              <ul>
                {cards.map((card) => (
                  <SkillCard
                    className={active[card.id] ? "active" : ""}
                    onClick={() => changeData(card.title, card.text, card.id)}
                  >
                    {card.id == 1 && <ResIcon />}
                    {card.id == 2 && <FastIcon />}
                    {card.id == 3 && <DynamicIcon />}
                    {card.id == 4 && <BulbIcon />}
                  </SkillCard>
                ))}
              </ul>
              <hr />
              <div className="skills-info">
                <strong>{text.title}</strong>
                <p>{text.text}</p>
              </div>
              <hr />
            </span>
          </Slide>
          <Slide right>
            <img src={require("../../assets/developer.svg").default} />
          </Slide>
        </div>
      </Developer>
      <Hacker>
        <TopTab />
        <Fade top>
          <h1>Ethical Hacker</h1>
        </Fade>
        <div>
          <Slide left>
            <img src={require("../../assets/hacker.svg").default} />
          </Slide>
          <Slide right>
            <span>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                vel faucibus orci, ac porta velit. Maecenas sollicitudin, orci
                consequat volutpat interdum, tortor mi ullamcorper nisl, ut
                consequat massa libero nec felis. Nam dictum efficitur mauris, a
                vulputate odio laoreet vitae. Fusce vel congue nunc.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                vel faucibus orci, ac porta velit. Maecenas sollicitudin, orci
                consequat volutpat interdum, tortor mi ullamcorper nisl, ut
                consequat massa libero nec felis. Nam dictum efficitur mauris, a
                vulputate odio laoreet vitae. Fusce vel congue nunc.
              </p>
            </span>
          </Slide>
        </div>
      </Hacker>
      <Contact>
        <Fade top>
          <TopTab />
          <h1>CONTACT ME</h1>
        </Fade>
        <Fade left>
          <div className="main-div">
            <img src="https://avatars.githubusercontent.com/u/64869691?v=4" />
            <span>
              <div>
                <PhoneIcon />
                <h2>PHONE</h2>
              </div>
              <p>+55 (34) 996484068</p>
            </span>
            <span>
              <div>
                <EmailIcon />
                <h2>E-MAIL</h2>
              </div>
              <p>vitorconroydev@gmail.com</p>
              <p>vitorconroydev@protonmail.com</p>
            </span>
          </div>
        </Fade>
        <Fade cascade>
          <div className="sub-div">
            <AnimatedSocialIcon
              brandName="twitter"
              url="https://twitter.com/conroyvitor"
              animation="bounce"
              defaultColor="#D1D1D1"
              hoverColor="var(--quinary)"
              width="20px"
              animationDuration={0.8}
              style={{ margin: "0 10px 0 0" }}
            />
            <AnimatedSocialIcon
              brandName="instagram"
              url="https://instagram.com/vitorconroy"
              animation="bounce"
              defaultColor="#D1D1D1"
              hoverColor="var(--quinary)"
              width="20px"
              animationDuration={0.8}
              style={{ margin: "0 10px 0 0" }}
            />
            <AnimatedSocialIcon
              brandName="linkedin"
              url="https://github.com/str4vinsk"
              animation="bounce"
              defaultColor="#D1D1D1"
              hoverColor="var(--quinary)"
              width="20px"
              animationDuration={0.8}
              style={{ margin: "0 10px 0 0" }}
            />
            <AnimatedSocialIcon
              brandName="github"
              url="https://github.com/str4vinsk"
              animation="bounce"
              defaultColor="#D1D1D1"
              hoverColor="var(--quinary)"
              width="20px"
              animationDuration={0.8}
              style={{ margin: "0 10px 0 0" }}
            />
          </div>
        </Fade>
        <ContactForm />
      </Contact>
    </Container>
  );
}

export default Main;
