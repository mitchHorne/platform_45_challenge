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

- An online deployed version of the application can be viewed on [Netlify](https://nervous-brown-2148e5.netlify.com/). Makes it easier to test on mobile
- I _may_ have gone overboard with the re-usability, referring to the submission form that generates it's own state and components based on a data structure found in `/containers/home/data.js`. It is useful, as long as it is not the only form to be created on the site, otherwise it is quite supperfluous and sacrifices a bit of performance, due to form re-renders instead of component-level re-renders, and code simplicity for the added flexibility.
- I've created a separate branch `simplified-submission-form` to demonstrate a simpler version of the submission form, due to the above mentioned
- I added test utilities to `/utils/testing` to lessen the pain of testing React
