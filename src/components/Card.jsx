import PropTypes from "prop-types";
import styled from "styled-components";
import Button from "./Button"; // Import the Button component

const CardContainer = styled.div`
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
  cursor: pointer;
  background: rgb(39, 55, 77);
  background: linear-gradient(
    135deg,
    rgba(39, 55, 77, 1) 0%,
    rgba(82, 109, 130, 1) 35%,
    rgba(157, 178, 191, 1) 100%
  );
  color: rgb(221, 230, 237);

  &:hover {
    transform: scale(1.05);
  }

  ${({ size }) => {
    switch (size) {
      case "small":
        return `width: 200px;`;
      case "medium":
        return `width: 300px;`;
      case "large":
        return `width: 400px;`;
      default:
        return `width: 300px;`;
    }
  }}
`;

const CardImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;

const CardContent = styled.div`
  padding: 16px;
  text-align: center;
`;

const CardTitle = styled.h3`
  margin-bottom: 8px;
  font-size: 1.2rem;
  color: rgb(221, 230, 237);
`;

const CardDescription = styled.p`
  font-size: 0.9rem;
  color: rgb(157, 178, 191);
`;

function Card({ title, description, imageUrl, onClick, size = "medium" }) {
  return (
    <CardContainer size={size} onClick={onClick}>
      {imageUrl && <CardImage src={imageUrl} alt={title} />}
      <CardContent>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
        <Button>Click Me</Button> {/* Use the Button component */}
      </CardContent>
    </CardContainer>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageUrl: PropTypes.string,
  onClick: PropTypes.func,
  size: PropTypes.oneOf(["small", "medium", "large"]),
};

export default Card;
