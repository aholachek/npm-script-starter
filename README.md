
# Basic Development Setup with NPM scripts

## Installation

Run "npm install" to install dev dependencies.

## Development

Files are edited in src/ and served from dist/.

Running "npm start" starts a livereload development server, with JavaScript bundling, ES6 transpiling, and Sass
compilation.

## Distribution

To deploy the project, stop the development server and run "npm dist". The dist/ folder will be rebuilt.
JavaScript and CSS gets minified in addition to the compilation step, and images are minified.
