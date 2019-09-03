import { ThemeConfig } from '../types';

import altitudes from './altitudes';
import borders from './borders';
import breakpoints from './breakpoints';
import global from './global';
import palette from './palette';
import layout from './layout';
import fontWeights from './fontWeights';
import fontSizes from './fontSizes';

import Container from './Container';

export default (overrides: ThemeConfig = {}) => ({
  ...overrides,
  altitudes: altitudes(overrides.altitudes || {}),
  borders: borders(overrides.borders || {}),
  breakpoints: breakpoints(overrides.breakpoints || {}),
  fontSizes: fontSizes(overrides.fontSizes || {}),
  fontWeights: fontWeights(overrides.fontWeights || {}),
  global: global(overrides.global || {}),
  layout: layout(overrides.layout || {}),
  palette: palette(overrides.palette || {}),

  Container: Container(overrides.Container || {})
});