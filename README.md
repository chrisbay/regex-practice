# Regular Expression Practice

Practice regular expressions in JavaScript

## Setup

1. Install [Node.js](https://nodejs.org/en/) if you haven't previously, using the official installers for your OS, or the package manager of your choice (Homebrew, apt, etc). If you don't know if you have Node.js, `node --version` will tell you.
1. Fork and clone this repository.
1. Run `npm install` from the project directory.

## Getting to Work

1. Pick an exercise to work on. Each exercise consists of two files of the form `exercise.js` and `spec/exercise.spec.js`. You will code in the first of these, and use the second to understand the requirements of the exercise.
1. Run the tests: `npm test spec/exercise.spec.js`
1. One test will fail. Fix that.
1. When the first test passes, rename the second test from `xit` to `it` (to make it visible to the test runner, Jasmine).
1. Repeat steps 2 through 4 until all tests pass.

## Resources

- [Regular expressions in JS][regex]
- [`match` method docs][match]
- [`search` method docs][search]
- [`replace` method docs][replace]

## Contributing

If you would like to contribute an exercise, create a pull request to the `solution` branch including new files for both the spec and solution, using the naming scheme referenced above.

[regex]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
[match]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match
[search]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search
[replace]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
