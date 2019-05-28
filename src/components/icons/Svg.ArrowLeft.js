import React from 'react';
import { Svg } from 'expo';
import PropTypes from 'prop-types';
import { colors } from '../../api/constants';

const SvgArrowLeft = ({ active, size }) => (
  <Svg height={size} width={size} viewBox="0 0 24 24">
    <Svg.Path
      d="M10.4 12l5.3-5.3c.4-.4.4-1 0-1.4s-1-.4-1.4 0l-6 6c-.4.4-.4 1 0 1.4l6 6c.2.2.5.3.7.3s.5-.1.7-.3c.4-.4.4-1 0-1.4L10.4 12z"
      fill={active ? colors.white : colors.inactiveGrey}
    />
  </Svg>
);

SvgArrowLeft.defaultProps = {
  active: true,
  size: 24
};

SvgArrowLeft.propTypes = {
  // optional
  active: PropTypes.bool,
  size: PropTypes.number
};

export default SvgArrowLeft;
