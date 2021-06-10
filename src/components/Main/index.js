import React, { useEffect, useRef, useState } from "react";
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
  SubDevImg,
  DevImg,
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
import Terminal from "react-console-emulator";

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
  const commands = {
    whoami: {
      description: "A little bit about me.",
      usage: "whoami",
      fn: () => "",
    },
  };

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`https://api.github.com/users/str4vinsk/repos`)
      .then((res) => res.json())
      .then((repodata) => {
        setData(repodata.slice(0, 8));
      });
  }, []);

  const [text, setText] = useState({
    title: "~ RESPONSIVE",
    text: "All of my websites will be fully responsive, working on any device.",
    img: "https://content.techgig.com/thumb/msid-81298383,width-860,resizemode-4/The-favourite-programming-language-of-hackers-to-write-malware.jpg?140622",
  });

  const [active, setActive] = useState({ [1]: true });
  const cards = [
    {
      id: 1,
      title: "~ RESPONSIVE",
      text: "All of my websites will be fully responsive, working on any device.",
      img: "https://content.techgig.com/thumb/msid-81298383,width-860,resizemode-4/The-favourite-programming-language-of-hackers-to-write-malware.jpg?140622",
    },
    {
      id: 2,
      title: "~ FAST",
      text: "Fast load times and lag free interaction!",
      img: "https://builtin.com/sites/default/files/styles/ckeditor_optimize/public/inline-images/software-engineering-perspectives-what-is-a-software-engineer.jpg",
    },
    {
      id: 3,
      title: "~ DYNAMIC",
      text: "Everything is about movement, including my websites! 🚀",
      img: "https://blog.planview.com/wp-content/uploads/2020/01/Top-6-Software-Development-Methodologies.jpg",
    },
    {
      id: 4,
      title: "~ INTUITIVE",
      text: "Easy to use, intuitive UI/UX. 👨‍💻",
      img: "https://zdblogs.zohocorp.com/creator/decode/sites/creator/decode/files/2020-12/VPL-04%20%281%29.jpg",
    },
  ];

  function changeData(title, text, id, img) {
    setText({ title: title, text: text, img: img });
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
                  A small gallery of my recent projects chosen by me, if you're
                  interest to see some more, you can visit MyWork page!
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
                    onClick={() => (window.location.href = "https://github.com/str4vinsk/github-ui-clone")}
                  />
                  <h1>GitHub Clone</h1>
                  <p>API REACTJS</p>
                </ProjectCard>
                <ProjectCard>
                  <GitHubIcon
                    onClick={() => (window.location.href = "https://github.com/str4vinsk/spotify-mainpage-clone")}
                  />
                  <h1>Spotify Clone</h1>
                  <p>API HTML/CSS JS</p>
                </ProjectCard>
                <ProjectCard>
                  <GitHubIcon
                    onClick={() => (window.location.href = "https://github.com/str4vinsk/web-subnautica-databank")}
                  />
                  <h1>Subnautica PDA</h1>
                  <p>JSON HTML/CSS JS</p>
                </ProjectCard>
                <ProjectCard>
                  <GitHubIcon
                    onClick={() => (window.location.href = "https://github.com/str4vinsk/twitter-clone")}
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
              <Slide right>
                <SubDevImg src={text.img} />
              </Slide>
              <ul>
                {cards.map((card) => (
                  <SkillCard
                    className={active[card.id] ? "active" : ""}
                    onClick={() =>
                      changeData(card.title, card.text, card.id, card.img)
                    }
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
            <DevImg src={text.img} />
          </Slide>
        </div>
      </Developer>
      <Hacker>
        <TopTab />
        <Fade top>
          <h1>Ethical Hacker</h1>
        </Fade>
        <div className="wrapper">
          <Slide left>
            <img src={require("../../assets/hacker.svg").default} />
          </Slide>
          <Slide right>
            <span>
              <p>
                Since the beginning of my journey as a technology enthusiast
                years ago, my main area of ​​interest was always ethical
                hacking. I started to delve into the subject and found that it
                was not an easy journey, well, not a bit... however, I did not
                give up and today I am still passionate about this area, and I
                intend to become more and more professional as time goes on.
              </p>
              <Terminal
                commands={commands}
                welcomeMessage={[
                  "=============================",
                  "Wanna know more about it? Type help!",
                  "=============================",
                  " ",
                  " ",
                ]}
                promptLabel={"> "}
                promptLabelStyle={{ color: "var(--primary)" }}
                className="terminal"
                contentStyle={{ color: "white" }}
                inputTextStyle={{ color: "var(--quaternay)" }}
              />
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
