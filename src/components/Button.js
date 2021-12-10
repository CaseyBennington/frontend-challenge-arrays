import styled from "styled-components";

const Button = styled.button`
  background: ${(props) => (props.actionBtn ? "lightgrey" : "blue")};
  color: ${(props) => (props.actionBtn ? "black" : "white")};
  flex: ${(props) => (props.actionBtn ? "1 1 0" : "")};
  align-self: ${(props) => (props.actionBtn ? "stretch" : "")};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid black;
  border-radius: 5px;
`;

export default Button;
