// eslint-disable-next-line no-undef
module.exports = {
	root: true,
	parser: "@typescript-eslint/parser",
	extends: [
		"eslint:recommended",
		"plugin:@typescript-eslint/eslint-recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:prettier/recommended",
	],
	globals: {
		JSX: true,
	},
	plugins: ["react-hooks", "react", "prettier", "@typescript-eslint", "import"],
	rules: {
		"no-shadow": 1,
		"@typescript-eslint/no-shadow": ["warn"],
		"no-unused-vars": ["warn", { vars: "all", args: "after-used", ignoreRestSiblings: false }],
		"prettier/prettier": [
			"error",
			{
				endOfLine: "auto",
			},
		],
		"react-hooks/rules-of-hooks": "warn",
		"react-hooks/exhaustive-deps": "warn",
		"no-negated-condition": "warn",
		"import/no-unused-modules": [
			1,
			{
				unusedExports: true,
			},
		],
		"@typescript-eslint/no-unused-vars": ["warn"],
		"@typescript-eslint/ban-ts-comment": ["warn"],
		quotes: ["warn", "double"],
		eqeqeq: ["warn", "always"],
		"no-mixed-spaces-and-tabs": "warn",
		"jsx-quotes": "warn",
		"max-nested-callbacks": ["error", 3],
		"no-constant-condition": "warn",
		"no-console": [
			"warn",
			{
				allow: ["warn", "error"],
			},
		],
		"no-else-return": "error",
		"no-useless-return": "error",
		"arrow-body-style": ["warn", "as-needed"],
		"no-magic-numbers": [
			"warn",
			{
				ignoreArrayIndexes: true,
				ignore: [-1, 0, 1, 2],
			},
		],
		"no-nested-ternary": "error",
		"no-return-await": "off",
		"no-var": "error",
		"prefer-const": "error",
		yoda: "warn",
		"block-spacing": "warn",
		"brace-style": "error",
		"no-empty": "error",
		"no-empty-function": "error",
		"key-spacing": [
			"warn",
			{
				mode: "strict",
			},
		],
		"@typescript-eslint/no-empty-interface": "warn",
		"keyword-spacing": "error",
		// "max-len": ["warn", 140],
		"linebreak-style": ["warn", "unix"],
		"no-trailing-spaces": "warn",
		"no-whitespace-before-property": "error",
		"prefer-template": "warn",
		semi: "warn",
		"@typescript-eslint/naming-convention": [
			"error",
			{
				selector: "typeAlias",
				format: ["PascalCase"],
				prefix: ["T"],
			},
			{
				selector: "typeParameter",
				format: ["PascalCase"],
				prefix: ["T"],
			},
			{
				selector: "interface",
				format: ["PascalCase"],
				prefix: ["I"],
			},
		],
		"import/no-absolute-path": 2,
		// "import/no-useless-path-segments": 2,
		"import/newline-after-import": 2,
		"import/order": [
			// TODO
			"warn",
			{
				pathGroups: [
					{
						pattern: "react",
						group: "external",
						position: "before",
					},
				],
				pathGroupsExcludedImportTypes: ["react"],
				groups: ["builtin", "external", "internal", "parent", "sibling"],
				"newlines-between": "always",
				alphabetize: {
					order: "asc" /* sort in ascending order. Options: ['ignore', 'asc', 'desc'] */,
					caseInsensitive: true /* ignore case. Options: [true, false] */,
				},
			},
		],
	},

	settings: {
		"import/resolver": {
			typescript: {},
		},
	},
	env: {
		jest: true,
	},
};
