import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

import { colors } from './colors';
import { spacing } from './spacing';
import { typo } from './typo';

const theme = {
  colors: colors,
  font: typo,
  spacing: spacing,
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

const propTypes = {
  children: PropTypes.node,
};

Theme.propTypes = propTypes;
export default Theme;
