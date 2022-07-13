import React from "react";
import Hero from "../components/Hero";
import BGEstradaImage from "./assets/bg-estrada.jpg";
import BGCarImage from "./assets/bg-cars.jpg";

export default {
  title: "Hero",
  component: Hero,
};

export const usage = () => (
  <Hero title="Ganhe sua liberdade para ir e vir" image={BGEstradaImage}>
    <p>A sua autoescola líder em aprovação</p>
  </Hero>
);

export const withList = () => (
  <>
    <Hero
      title={
        <span>
          Ganhe sua <strong>liberdade</strong>
          <br /> para ir e vir
        </span>
      }
      image={BGCarImage}
    >
      <ul>
        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
      </ul>
    </Hero>
  </>
);
