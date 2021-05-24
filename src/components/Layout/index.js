import React from "react";

import { Container } from "./styles";
import Header from "../Header";
import Main from "../Main";
import Overlay from "../Overlay";

function Layout() {
  return (
    <Container>
      <Header />
      <Overlay />
      <Main />
      {/* <Footer /> */}
    </Container>
  );
}

export default Layout;
