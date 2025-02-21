import styled from "styled-components";
import PropTypes from "prop-types";

const StyledButton = styled.button`
  background-color: rgb(82, 109, 130);
  color: rgb(221, 230, 237);
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.9rem;
  transition: background-color 0.2s;

  &:hover {
    background-color: rgb(157, 178, 191);
  }
`;

function Button({ children, onClick }) {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
};

export default Button;
