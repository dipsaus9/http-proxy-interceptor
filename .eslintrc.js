module.exports = {
	root: true,
	extends: [
		'airbnb',
		'airbnb-typescript',
		'plugin:@typescript-eslint/recommended',
		'plugin:@typescript-eslint/recommended-requiring-type-checking',
	],
	plugins: ['prettier', '@typescript-eslint'],
	parserOptions: {
		ecmaVersion: 2020,
		sourceType: 'module',
		project: './tsconfig.json',
	},
	rules: {
		'react/react-in-jsx-scope': 'off',
	},
	overrides: [
		{
			files: ['vite.config.ts'],
			rules: {
				'import/no-extraneous-dependencies': 'off',
			},
		},
	],
};
