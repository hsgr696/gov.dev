import Box from '@/components/Box/Box';
import shared from '@/props/shared';
import typography from '@/props/typography';
import components from '@/themes/components';
import cn from '@/utils/cn';

const Text = (props) => {
	const { className, weight, children } = props;
	const classes = cn(
		components.typography.text.base,
		components.typography.text.weights[weight],
		className,
	);
	return (
		<Box as="span" className={classes}>
			{children}
		</Box>
	);
};

Text.propTypes = {
	...shared,
	...typography,
};

export default Text;
