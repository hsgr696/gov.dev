import PropTypes from 'prop-types';
import React from 'react';

const Box = (props) => {
	const { as = 'div', children, ...rest } = props;
	return React.createElement(as, rest, children);
};

Box.propTypes = {
	as: PropTypes.elementType,
	children: PropTypes.node,
};

export default Box;
