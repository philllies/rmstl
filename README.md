# rmstl

*rmstl* is a boilerplate for TypeScript-based React projects using, MobX, MobX-State-Tree, lodash. It includes mocha/chai for unit testing, and uses Webpack to run a local dev server and create production builds.

## Installation
```
npm install
```
## Commands
*Running a local dev server*
```
npm start
```

*Running all tests*
```
npm run test
```

*Building the project*
```
npm run build
```

## Project Structure
```
root
├── build     contains all build files (all static content is copied over from content when running 'npm run build')
├── content   contains all static content (index.html, images, videos, etc.)
├── src       contains all sources files
└── test      contains all tests
```
