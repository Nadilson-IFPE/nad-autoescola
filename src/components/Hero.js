import React from "react";
import styled, { css } from "styled-components";
import { breakAt, BreakpointSize } from "./Breakpoints";
import PropTypes from "prop-types";

const colorYellow = "#ffc107";

const Root = styled.div`
  color: #fff;
  padding: 100px 0;
  ${(props) => css`
    background: url(${props.image}), rgba(0, 0, 0, 0.4);
    background-size: cover;
    background-position: center;
    background-blend-mode: overlay;
  `}
`;

const Content = styled.div`
  p,
  li {
    font-size: 20px;
    font-weight: 300;
  }

  ul {
    list-style: none;
    padding-left: 0;
  }

  li::before {
    content: "\\2713\\0020";
    color: ${colorYellow};
  }
`;

const Container = styled.div`
  width: 100%;
  padding: 0 8px;

  ${breakAt(BreakpointSize.sm)} {
    padding: 0 16px;
  }

  ${breakAt(BreakpointSize.lg)} {
    width: 1140px;
    padding: 0;
    margin: 0 auto;
  }
`;

const Hero = ({ image, title, children }) => (
  <Root image={image}>
    <Container>
      <Content>{children}</Content>
    </Container>
  </Root>
);

Hero.propTypes = {
  /**
   * Background image
   */
  image: PropTypes.string,
  children: PropTypes.node,
};

export default Hero;
