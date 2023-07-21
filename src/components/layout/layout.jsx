import { Section } from "./layout.styled";
import PropTypes from 'prop-types';

export const Layout = ({ children }) => {
  return <Section>{children}</Section>;
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};
