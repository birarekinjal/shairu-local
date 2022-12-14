module.exports = {
  extends: ["airbnb"],
  plugins: ["react"],
  env: {
    browser: true,
    node: true,
  },
  rules: {
    "react/react-in-jsx-scope": "off",
    quotes: 'off',
    "no-use-before-define": "off",
    "react/jsx-filename-extension": "off",
    "react/prop-types": "off",
    "comma-dangle": "off",
    "import/prefer-default-export": "off",
    "import/no-extraneous-dependencies": "off",
    "jsx-a11y/accessible-emoji": "off",
    "react/jsx-props-no-spreading": "off",
    "react/state-in-constructor": "off",
    "react/no-unused-state": "off",
    "import/no-cycle": "off",
    "no-shadow": "off",
    "no-console": "error",
    "max-len": ["error", { code: 250 }],
    "no-unused-expressions": "off",
    "no-nested-ternary": "off",
    "no-underscore-dangle": "off",
    "consistent-return": "off",
    "no-param-reassign": "off",
    camelcase: "off",
    "global-require": "off",
    "no-useless-concat": "off",
    "react/no-did-update-set-state": "off",
    "react-hooks/exhaustive-deps": "off",
    eqeqeq: "off",
    // 'no-undef': 'off',
    "jsx-a11y/click-events-have-key-events": "off",
    "jsx-a11y/no-static-element-interactions": "off",
    "jsx-a11y/anchor-is-valid": "off",
    "no-script-url": "off",
    "react/jsx-indent": "off",
    "react/no-unescaped-entities": "off",
    "react/jsx-closing-tag-location": "off",
    "no-trailing-spaces": "off",
    indent: "off",
    "padded-blocks": "off",
    "no-useless-escape": "off",
    "react/no-array-index-key": "off",
    "no-else-return": "off",
    "jsx-a11y/no-noninteractive-element-interactions": "off",
  },
  parserOptions: {
    ecmaVersion: 13,
    requireConfigFile: false,
    babelOptions: {
      presets: ["@babel/preset-react"],
    },
  },
};
