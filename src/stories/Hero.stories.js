import React from "react";
import Hero from "../components/Hero";
import BGEstradaImage from "./assets/bg-estrada.jpg";
import BGCarImage from "./assets/bg-cars.jpg";
import Heading from "../components/Heading";

export default {
  title: "Hero",
  component: Hero,
};

export const usage = () => (
  <Hero image={BGEstradaImage}>
    <h1>Ganhe sua liberdade para ir e vir</h1>
    <p>A sua autoescola líder em aprovação</p>
  </Hero>
);

export const withList = () => (
  <>
    <Hero image={BGCarImage}>
      <Heading>
        <h1>
          Ganhe sua <strong>liberdade</strong>
          <br /> para ir e vir
        </h1>
      </Heading>
      <ul>
        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
      </ul>
    </Hero>
  </>
);
