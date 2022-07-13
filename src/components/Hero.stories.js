import React from "react";
import Hero from "./Hero";
import BGEstradaImage from "../stories/assets/bg-estrada.jpg";
import BGCarImage from "../stories/assets/bg-cars.jpg";
import Heading from "./Heading";
import { text } from "@storybook/addon-knobs";

export default {
  title: "Components/Hero",
  component: Hero,
};

export const usage = () => (
  <Hero image={BGEstradaImage}>
    <h1>{text("Title", "Ganhe sua liberdade para ir e vir")}</h1>
    <p>{text("Text", "A sua autoescola líder em aprovação")}</p>
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
