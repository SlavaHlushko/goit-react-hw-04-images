import { LoadButton } from './Button.styled';
import PropTypes from 'prop-types';

export const Button = ({ children, onClick }) => {
  return (
    <LoadButton type="button" onClick={onClick}>
      {children}
    </LoadButton>
  );
};

Button.propTypes = {
  children: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};
