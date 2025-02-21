import PropTypes from "prop-types";
import styled from "styled-components";

const CardContainer = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.02);
  }

  /* Dynamic sizing based on props */
  ${({ size }) => {
    switch (size) {
      case "small":
        return `width: 200px;`;
      case "medium":
        return `width: 300px;`;
      case "large":
        return `width: 400px;`;
      default:
        return `width: 300px;`; // Default to medium
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
`;

const CardTitle = styled.h3`
  margin-bottom: 8px;
`;

const CardDescription = styled.p`
  font-size: 0.9rem;
  color: #666;
`;

function Card({ title, description, imageUrl, onClick, size = "medium" }) {
  return (
    <CardContainer size={size} onClick={onClick}>
      {imageUrl && <CardImage src={imageUrl} alt={title} />}
      <CardContent>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
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
