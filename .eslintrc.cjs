module.exports = {
	root: true,
	env: { browser: true, es2021: true, node: true },
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:react/jsx-runtime',
		'plugin:react-hooks/recommended',
		'airbnb',
		'airbnb-base',
		'plugin:prettier/recommended',
		'plugin:react/jsx-runtime',
		'plugin:storybook/recommended',
	],
	ignorePatterns: ['dist', '.eslintrc.cjs'],
	parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
	settings: {
		react: { version: 'detect' },
		'import/resolver': {
			node: {
				paths: ['lib'],
				extensions: ['.js', '.jsx'],
			},
		},
	},
	plugins: ['react-refresh', 'react', 'react-hooks', 'prettier'],
	rules: {
		'import/no-unresolved': 'off',
		'import/extensions': [
			'error',
			'ignorePackages',
			{
				'': 'never',
				js: 'never',
				jsx: 'never',
				ts: 'never',
				tsx: 'never',
				mjs: 'never',
			},
		],
		'prettier/prettier': 'error',
		'react/function-component-definition': [
			2,
			{
				namedComponents: 'arrow-function',
				unnamedComponents: 'arrow-function',
			},
		],
		'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
		'import/no-extraneous-dependencies': 'off',
		'react/require-default-props': 'off',
	},
};
