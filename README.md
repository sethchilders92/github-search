# Getting Started

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

It utilizes the [Material-UI Library](https://mui.com/)

## Design Considerations
In this project, seeing as the allotted time was to be limited to around 4 hours, some things had to be put on the back-burner, some of which are:

- Add tests - This is a must have, but was omitted for the sake of time
- Add loader and graceful error handler - With more time I would have made a spinner that would show when things are loading, as well as added graceful errors rather than printing out the error
- Redux - This was omitted to cut down on code needed to run, but would help to clean up code in some areas, as well as would keep commit state for each repo instead of having to re-call the api every time the repo is clicked. This is also possible with local-state, but I would have preferred to use Redux to implement this
- Babel and Webpack - I could have used a framework like NextJS or implemented Babel and Webpack (which also would have made the code easier to read by using optional chaining) but for the sake of the exercise thought using create-react-app would suffice
- Adding app info to a `Head` component - As this won't be in production, not needed
- Security - It's not good to keep keys in your app :) For this reason I made a local `.env` file that is required to grab you Github authorization token.

## Setup
1. Run `npm install` in this directory in your terminal
1. Create an `.env`, `.env.development.local` or equivalent file in your root directory
2. Go to [GitHub](https://github.com/settings/tokens/new) to generate a new security token to use in your local project
3. Paste your new code into your `.env` file as:
```
REACT_APP_GH = 'your key'
```
4. Run the project with `npm start`

Note: Do NOT push your `.env` file to GitHub and do NOT create a production build as long as you have your token in an `.env` file as it will be accessible.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Need to set this up

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

