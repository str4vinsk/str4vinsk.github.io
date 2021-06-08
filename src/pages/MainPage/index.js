import React from "react";
import { Container } from "./styles";
import Main from "../../components/Main";
import Overlay from "../../components/Overlay";

function MainPage() {
  return (
    <Container>
      <Overlay />
      <Main />
      {/* <Footer /> */}
    </Container>
  );
}

export default MainPage;
