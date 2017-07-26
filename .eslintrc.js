module.exports = {
    "extends": "tui",
    "parserOptions": {
        "ecmaVersion": 3
    },
    "env": {
        "browser": true,
        "jasmine": true,
        "jquery": true,
        "commonjs": true
    },
    "globals": {
        "tui": true,
        "loadFixtures": true,
        "ActiveXObject": true
    },
    "rules": {
        //Possible Errors
        "comma-dangle": [2, "never"],
        "no-cond-assign": [2, "always"],
        "no-console": 1,
        "no-constant-condition": 2,
        "no-control-regex": 2,
        "no-debugger": 2,
        "no-dupe-args": 2,
        "no-dupe-keys": 2,
        "no-duplicate-case": 2,
        "no-empty-character-class": 2,
        "no-empty": [2, {
            "allowEmptyCatch": false
        }],
        "no-ex-assign": 2,
        "no-extra-boolean-cast": 2,
        "no-extra-parens": [2, "functions"],
        "no-extra-semi": 2,
        "no-func-assign": 2,
        "no-inner-declarations": [2, "both"],
        "no-invalid-regexp": 2,
        "no-irregular-whitespace": [2, {
            "skipComments": true
        }],
        "no-negated-in-lhs": 2,
        "no-obj-calls": 2,
        "no-prototype-builtins": 0,
        "no-regex-spaces": 2,
        "no-sparse-arrays": 2,
        "no-template-curly-in-string": 2,
        "no-unexpected-multiline": 2,
        "no-unreachable": 2,
        "use-isnan": 2,
        "valid-jsdoc": [2, {
            "prefer": {
                "return": "returns"
            },
            "requireReturnDescription": false,
            "requireReturn": false
        }],
        "valid-typeof": 2,

        //Best Practices
        "accessor-pairs": [2, {
            "getWithoutSet": true
        }],
        "block-scoped-var": 2,
        "complexity": [1, 6],
        "consistent-return": 2,
        "curly": 2,
        "default-case": 2,
        "dot-location": [2, "property"],
        "dot-notation": [2, {
            "allowKeywords": false
        }],
        "eqeqeq": [2, "always"],
        "guard-for-in": 2,
        "no-alert": 0,
        "no-caller": 2,
        "no-case-declarations": 2,
        "no-div-regex": 2,
        "no-else-return": 2,
        "no-empty-pattern": 2,
        "no-eq-null": 2,
        "no-eval": 2,
        "no-extend-native": 2,
        "no-extra-bind": 2,
        "no-fallthrough": 2,
        "no-floating-decimal": 2,
        "no-implicit-coercion": [2, {
            "boolean": false
        }],
        "no-implied-eval": 2,
        "no-iterator": 2,
        "no-labels": 2,
        "no-lone-blocks": 2,
        "no-loop-func": 2,
        "no-multi-spaces": 2,
        "no-multi-str": 2,
        "no-native-reassign": 2,
        "no-new-func": 2,
        "no-new-wrappers": 2,
        "no-new": 2,
        "no-octal-escape": 2,
        "no-octal": 2,
        "no-param-reassign": 0,
        "no-process-env": 2,
        "no-proto": 2,
        "no-redeclare": 2,
        "no-return-assign": [2, "always"],
        "no-script-url": 2,
        "no-self-compare": 2,
        "no-sequences": 2,
        "no-throw-literal": 2,
        "no-unsafe-finally": 2,
        "no-unused-expressions": 2,
        "no-useless-call": 2,
        "no-useless-concat": 2,
        "no-void": 2,
        "no-warning-comments": 1,
        "no-with": 2,
        "radix": 2,
        "vars-on-top": 2,
        "wrap-iife": [2, "inside"],
        "yoda": 2,
        "no-useless-escape": 2,

        // Strict Mode
        "strict": [2, "global"],

        // Variables
        "init-declarations": 0,
        "no-catch-shadow": 2,
        "no-delete-var": 2,
        "no-label-var": 2,
        "no-shadow-restricted-names": 2,
        "no-shadow": 2,
        "no-undef-init": 2,
        "no-undef": 2,
        "no-undefined": 2,
        "no-unused-vars": 2,
        "no-use-before-define": [2, "nofunc"],
        "no-restricted-globals": [1, "event", "fdescribe", "fit"],

        // Node.js and CommonJS
        "global-require": 2,
        "handle-callback-err": 2,
        "no-mixed-requires": [2, true],
        "no-new-require": 2,
        "no-path-concat": 2,
        "no-process-exit": 2,
        "no-restricted-modules": 0,
        "no-sync": 0,

        //Stylistic Issues
        "array-bracket-spacing": [2, "never"],
        "block-spacing": [2, "never"],
        "brace-style": [2, "1tbs", {
            "allowSingleLine": false
        }],
        "camelcase": 2,
        "comma-spacing": [2, {
            "before": false,
            "after": true
        }],
        "comma-style": [2, "last"],
        "computed-property-spacing": [2, "never"],
        "consistent-this": [2, "self"],
        "eol-last": 2,
        "func-names": 0,
        "func-style": 0,
        "func-call-spacing": [2, "never"],
        "id-length": 0,
        "id-match": 0,
        "indent": [2, 4, {
            "SwitchCase": 1
        }],
        "jsx-quotes": [2, "prefer-double"],
        "key-spacing": [2, {
            "beforeColon": false,
            "afterColon": true
        }],
        "keyword-spacing": 2,
        "linebreak-style": [2, "unix"],
        "lines-around-comment": 0,
        "max-depth": [2, 3],
        "max-len": [2, 120, 4],
        "max-nested-callbacks": [2, 3],
        "max-params": [2, 5],
        "max-statements": 0,
        "multiline-ternary": [2, "never"],
        "new-cap": 2,
        "new-parens": 2,
        "newline-after-var": 0,
        "no-array-constructor": 0,
        "no-bitwise": 0,
        "no-continue": 0,
        "no-inline-comments": 0,
        "no-lonely-if": 2,
        "no-mixed-operators": [2, {
            "allowSamePrecedence": true
        }],
        "no-mixed-spaces-and-tabs": [2, "smart-tabs"],
        "no-multiple-empty-lines": [2, {
            "max": 2
        }],
        "no-nested-ternary": 2,
        "no-new-object": 2,
        "no-plusplus": 2,
        "no-restricted-syntax": [2, "WithStatement"],
        "no-spaced-func": 2,
        "no-tabs": 2,
        "no-ternary": 0,
        "no-trailing-spaces": 2,
        "no-underscore-dangle": 0,
        "no-unneeded-ternary": 2,
        "object-curly-newline": 0,
        "object-curly-spacing": [2, "never"],
        "object-property-newline": [2, {
            "allowMultiplePropertiesPerLine": false
        }],
        "one-var": 0,
        "operator-assignment": 0,
        "operator-linebreak": 0,
        "padded-blocks": [2, "never"],
        "quote-props": 0,
        "quotes": [2, "single", {
            "avoidEscape": true,
            "allowTemplateLiterals": true
        }],
        "require-jsdoc": 1,
        "semi-spacing": [2, {
            "before": false,
            "after": true
        }],
        "semi": 2,
        "sort-keys": 0,
        "sort-vars": 0,
        "space-before-blocks": 2,
        "space-before-function-paren": [2, "never"],
        "space-in-parens": [2, "never"],
        "space-infix-ops": 2,
        "space-unary-ops": [2, {
            "words": true,
            "nonwords": false
        }],
        "spaced-comment": [2, "always", {
            "block": {
                "markers": ["*"],
                "exceptions": ["*"]
            }
        }],
        "wrap-regex": 0,
        "newline-before-return": 1,
        "max-statements-per-line": [2, {
            "max": 1
        }],
        "unicode-bom": [2, "never"],
    }
};
