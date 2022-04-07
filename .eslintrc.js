module.exports = {
    env: {
        browser: true,
        commonjs: true,
        es6: true,
        node: true
    },
    extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:jsx-a11y/recommended",
        "plugin:import/recommended",
        "plugin:import/errors",
        "plugin:import/warnings",
        "plugin:react-hooks/recommended",
        "plugin:testing-library/react",
        "plugin:react-redux/recommended"
    ],
    parser: "babel-eslint",
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 2018,
        sourceType: "module"
    },
    plugins: ["import", "react-redux"],
    root: true,
    rules: {
        "comma-dangle": ["warn", "never"],
        "eol-last": "warn",
        "no-debugger": "warn",
        "import/order": [
            "warn",
            {
                alphabetize: {
                    caseInsensitive: true,
                    order: "asc"
                },
                groups: [
                    "builtin",
                    "external",
                    "index",
                    "sibling",
                    "parent",
                    "internal"
                ]
            }
        ]
        ,
        indent: ["warn", 4],
        "jsx-quotes": ["warn", "prefer-double"],
        "max-len": [
            "warn",
            {
                code: 180
            }
        ],
        "no-console": "off",
        "no-duplicate-imports": "warn",
        "no-multiple-empty-lines": ["warn", { max: 1, maxEOF: 0 }],
        "no-restricted-imports": [
            "error",
            {
                paths: [
                    {
                        message: "Please use import foo from 'lodash-es/foo' instead.",
                        name: "lodash"
                    },
                    {
                        message:
              "Avoid using chain since it is non tree-shakable. Try out flow instead.",
                        name: "lodash-es/chain"
                    },
                    {
                        importNames: ["chain"],
                        message:
              "Avoid using chain since it is non tree-shakable. Try out flow instead.",
                        name: "lodash-es"
                    },
                    {
                        message: "Please use import foo from 'lodash-es/foo' instead.",
                        name: "lodash-es"
                    }
                ],
                patterns: ["lodash/**", "lodash/fp/**"]
            }
        ],
        "no-trailing-spaces": "warn",
        "no-unused-vars": "warn",
        "no-useless-catch": "off",
        "object-curly-spacing": ["warn", "always"],
        quotes: ["warn", "double"],
        "react-redux/connect-prefer-named-arguments": "warn",
        "react-redux/useSelector-prefer-selectors": [ "off"],
        "react/function-component-definition": [
            1,
            { namedComponents: "arrow-function" }
        ],
        "react/jsx-curly-spacing": [
            "warn",
            {
                allowMultiline: false,
                children: {
                    when: "always"
                },
                spacing: {
                    objectLiterals: "always"
                },
                when: "always"
            }
        ],
        "react/jsx-filename-extension": [
            "warn",
            {
                extensions: [".js", ".jsx"]
            }
        ],
        "react/jsx-first-prop-new-line": 1,
        "react/jsx-indent": [
            "warn",
            4,
            {
                checkAttributes: true,
                indentLogicalExpressions: true
            }
        ],
        "react/jsx-indent-props": ["warn", 4],
        "react/jsx-max-props-per-line": [1, { maximum: { multi: 1, single: 2 } }],
        "react/prop-types": "warn",
        "react/react-in-jsx-scope": "off",
        semi: "warn",
        "sort-imports": [
            "warn",
            {
                ignoreCase: false,
                ignoreDeclarationSort: true,
                ignoreMemberSort: false
            }
        ],
        "sort-keys": [
            "warn",
            "asc",
            {
                caseSensitive: true,
                minKeys: 2,
                natural: false
            }
        ]
    },
    settings: {
        "import/resolver": {
            node: {
                extensions: [".js", ".jsx", ".scss"],
                moduleDirectory: ["node_modules", "src/"]
            }
        },
        react: {
            version: "detect" // Detect react version
        }
    }
};
