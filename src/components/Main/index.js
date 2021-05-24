import React, { useEffect, useState } from "react";

import Zoom from "react-reveal/Zoom";
import Slide from "react-reveal/Slide";
import Bounce from "react-reveal/Bounce";
import Roll from "react-reveal/Roll";
import Rotate from "react-reveal/Rotate";
import Fade from "react-reveal/Fade";

import Card from "../Card";
import { AnimatedSocialIcon } from "react-animated-social-icons";
import {
  Container,
  Whoami,
  Porfolio,
  ProjectCard,
  TopTab,
  Developer,
  SkillCard,
  FastIcon,
  ResIcon,
  DynamicIcon,
  BulbIcon,
  Contact,
  PhoneIcon,
  EmailIcon,
  Hacker,
} from "./styles";

function Main() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`https://api.github.com/users/str4vinsk/repos`)
      .then((res) => res.json())
      .then((repodata) => {
        setData(repodata.slice(0, 8));
      });
  }, []);

  return (
    <Container>
      <Whoami>
        <Slide left>
          <TopTab />
          <h1>$~ Who am i ?</h1>
        </Slide>
        <div className="content">
          <Bounce left>
            <div>
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
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                vel faucibus orci, ac porta velit. Maecenas sollicitudin, orci
                consequat volutpat interdum, tortor mi ullamcorper nisl, ut
                consequat massa libero nec felis. Nam dictum efficitur mauris, a
                vulputate odio laoreet vitae. Fusce vel congue nunc.
              </p>
              <button>CURRICULUM PDF</button>
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
                  A small gallery of my recent projects, they are imported from
                  the GitHub API V3, collecting my recent edited repositories
                  and converting them here.
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
            {data.map((n) => (
              <Zoom>
                <ProjectCard
                  key={n.name}
                  picture={`https://raw.githubusercontent.com/str4vinsk/${n.name}/master/Screenshot.png`}
                  whileHover={{ scale: 1.1 }}
                >
                  <a href={n.html_url}>VIEW MORE</a>
                </ProjectCard>
              </Zoom>
            ))}
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
          <Slide right>
            <img src={require("../../assets/developer.svg").default} />
          </Slide>
        </div>
        <ul>
          <Fade cascade bottom>
            <SkillCard>
              <span>
                <FastIcon />
              </span>
              <h3>Fast</h3>
              <p>
                Fast load times and lag free interaction, my highest priority.
              </p>
            </SkillCard>
            <SkillCard>
              <span>
                <ResIcon />
              </span>
              <h3>Dynamic</h3>
              <p>
                Fast load times and lag free interaction, my highest priority.
              </p>
            </SkillCard>
            <SkillCard>
              <span>
                <DynamicIcon />
              </span>
              <h3>Responsive</h3>
              <p>
                Fast load times and lag free interaction, my highest priority.
              </p>
            </SkillCard>
            <SkillCard>
              <span>
                <BulbIcon />
              </span>
              <h3>Intuitive</h3>
              <p>
                Fast load times and lag free interaction, my highest priority.
              </p>
            </SkillCard>
          </Fade>
        </ul>
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
        <Rotate cascade>
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
        </Rotate>
        <form>
          <Fade bottom cascade>
            <input type="text" placeholder="Your Name..." id="name" />
            <input type="text" placeholder="Your E-mail..." id="email" />
            <textarea placeholder="Your Message!" id="message" />
          </Fade>
          <button>SUBMIT</button>
        </form>
      </Contact>
    </Container>
  );
}

export default Main;
