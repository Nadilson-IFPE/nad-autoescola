import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

//const Button = ({ type, children }) => <button type={type}>{children}</button>;

const Button = styled.button`
  font-size: 1rem;
  font-weight: 600;
  text-transform: uppercase;
  padding: 12px 36px;
  cursor: pointer;
  background-color: ${(props) => props.theme.colorYellow};
  border-color: 2px solid ${(props) => props.theme.colorYellow};
  color: #212121;
`;

Button.defaultProps = {
  type: "button",
  children: undefined,
  theme: {
    colorYellow: "blue",
  },
};

Button.prototype = {
  type: PropTypes.string,
  children: PropTypes.node,
};

export default Button;
