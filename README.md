# react-localist-viewer

A react component to pull [localist](https://developer.localist.com/doc/api#event-list) calendar events and render.

## [Drupal Block example](https://cu-communityapps.github.io/CD_cwd_events/src/app/index.html)  |  [ES6 demo](https://philwilliammee.github.io/localist-viewer/docs/)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

The rendered view does not come with any styling. A starter stlyle sheet can be found [here](https://philwilliammee.github.io/localist-viewer/docs/style.css)

### Prerequisites

This was made with react creat app Development requires Node and NPM. See create react app for more info.

### Installing

with NPM

```bash
npm install --save react-localist-viewer
```

or download directly from [Github Repo](https://github.com/philwilliammee/react-localist-viewer).

```bash
git clone https://github.com/philwilliammee/react-localist-viewer
```

Development to compile sass and javascript.

```bash
cd ./react-localist-viewer
npm install
npm run start
```

After you start
`/src/index.js` will Initialize the app, and load example data/configuration. The app is highly configurable see `src/lib/localist.jsx` Proptype deifintions for all configuration options.

## Running the tests

```bash
npm run jest
```

check for test coverage:

```bash
npm run coverage
```

### Break down into end to end tests

- React-localist-viewer should initialise with test props.

- LocalistConnector should fetch JSON.data

- The data should be rendered with selected props.

### And coding style tests

This module follows react create app coding standards.

see the `.eslintrc.json` file for linting details.

## Deployment

`npm run build` to compile for npm package. The process for converting to npm package can be found [here](https://www.npmjs.com/package/create-component-lib)

## Versioning

For the versions available, see the [tags on this repository](https://github.com/philwilliammee/react-localist-viewer/tags) and [tags on this npm](https://www.npmjs.com/package/react-localist-viewer).

## Authors

**Phil Williammee** - [philwilliammee](https://github.com/philwilliammee)

See also the list of [contributors](https://github.com/philwilliammee/react-localist-viewer/graphs/contributors) who participated in this project.

## License

This project is licensed under the GNU General Public License v3.0 - see the [LICENSE.md](https://github.com/philwilliammee/react-localist-viewer/blob/master/LICENSE) file for details

## Acknowledgments
