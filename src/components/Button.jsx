import styled from "styled-components";
import PropTypes from "prop-types";

const ButtonContainer = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.9rem;
  transition: background-color 0.2s;

  &:hover {
    background-color: #0056b3;
  }
`;

function Button({ children, onClick }) {
  return <ButtonContainer onClick={onClick}>{children}</ButtonContainer>;
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
};

export default Button;
