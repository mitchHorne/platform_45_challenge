### Platform 45 challenge

### Notes

- You need to run `npm i` or `yarn` before trying to start the project

### Scripts

## npm start || yarn start

- Starts the project on [localhost:3000](http://localhost:3000/)

## npm run build || yarn build

- Creates a static web page build of the project in the `/build` directory

## npm run test || yarn test

- Runs all automated (using jest) tests included in the project

## npm run coverage || yarn coverage

- Runs all tests and prints out an `lcov report` under the `/coverage` directory
- Open the index.html file in the `/coverage` directory to see a full report of test coverage

### Final Notes and Thoughts

- An online deployed version of the application can be viewed on [Netlify](https://nervous-brown-2148e5.netlify.com/). Might be easier to test on mobile
- I _may_ have gone overboard with the re-usability, referring to the submission form that generates it's own state and components based on a data structure found in `/containers/home/data.js`. It is useful, as long as it is not the only form to be created on the site, otherwise it sacrifices a bit of performance and simplicity for the flexibility. Just wanted to make it clear that I am aware of that
- There is a `bug` of sorts when you move focus from an input to click on something else. This is unfortunately browser behavior, as the loss of focus on a component alters state and re-renders the form, cancelling any onClick or otherwise events captured in that split-second. Would be an easy fix using something like redux and redux-form, or simplifying the form _i.e. removing the data driven ultrare-usableness and using a set form_ - _However_, it will take a good deal of work implementing that on the form, so I won't be, just wanted to make you aware.
- I added test utilities to `/utils/testing` to lessen the pain of testing React
