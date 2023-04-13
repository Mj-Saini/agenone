import React from "react";
import NavBar from "./NavBar";
import { Container, TabContainer } from "react-bootstrap";

function Hero() {
  return (
    <>
      <section className="bg_hero_img min-vh-100">
        <NavBar />
        <Container></Container>
      </section>
    </>
  );
}

export default Hero;
