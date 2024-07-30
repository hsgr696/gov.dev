import PropTypes from 'prop-types';
import Box from '@/components/Box/Box';
import shared from '@/props/shared';
import components from '@/themes/components';
import cn from '@/utils/cn';

const Heading = (props) => {
	const { as = 'h3', className, children } = props;
	const classes = cn(
		components.typography.heading.base,
		components.typography.heading.sizes[as],
		className,
	);
	return (
		<Box as={as} className={classes}>
			{children}
		</Box>
	);
};

Heading.propTypes = {
	as: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
	...shared,
};

export default Heading;
