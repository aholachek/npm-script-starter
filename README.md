
# Basic Development Setup with NPM scripts

## Installation

Run "npm install" to install dev dependencies.

## Development

Files are edited in src/ and served from dist/.

Running "npm start" starts a development server that uses browsersync to automatically update when there are changes.

### Development Tasks:
* Copy files to dist/ whenever there are changes.
* Compile SCSS in src/ into CSS in dist/ when it changes.
* Watch JS changes in src/, run through Browserify and Babel, and compile to dist/index.js
* Serve files and refresh automatically when there are changes.

## Distribution

To deploy the project, stop the development server and run "npm dist". The dist/ folder will be rebuilt.
JavaScript and CSS gets minified in addition to the compilation step, and images are minified.

### Distribution Tasks:
* Rebuild dist/ folder.
* Copy files over to dist/.
* Minify images (jpg, png, svg) using imagemin.
* Compile Scss, run through autoprefixer and minify with cssnano
* Compile Javascript with Babel and Browserify, and minify index.js with Uglify.
