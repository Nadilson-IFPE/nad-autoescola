import React from "react";
import Button from "./Button";
import { ThemeProvider } from "styled-components";

export default {
  title: "Components/Button",
  component: Button,
};

const theme = {
  colorYellow: "#ffc107",
};

export const usage = () => (
  <ThemeProvider theme={theme}>
    <Button>Meu botão</Button>
  </ThemeProvider>
);

export const semTema = () => <Button>Meu botão</Button>;
