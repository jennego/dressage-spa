# Dressage Tests App - Single Page Application (SPA) with Fauna backend

This is the React SPA version of the dressage test listing app. API was running on Ruby on Rails but is switching to fauna due to lack of free, easy to use hosting providers for Rails (and a surprise AWS bill lol).

Don't forget your dressage test or learn the wrong one!

https://dressagetests.netlify.app

Front end on Netlify.

API REPO: https://github.com/jennego/dressage

---

TO DO

- move all data to fauna
- reconfigure app to work with fauna
- create pwa
- use local storage (dexie or similar?) for favs and saving of tests (don't require login)
- add admin console to add tests (requires login)
- add training and first 2023 tests

Backburner

- move notification to main layout so all can access it via provider
- add own social keys to auth0
- add throttle to favourite create/delete clicks
- add pdf data to the new data thing
- test mobile again
- if mobile default to list view
- bulk fav / delete fav??

Roadmap

- right click context menu (open, open in new tab, add to favs)
- user settings to user metadata
- allow user metadata editing

PWA

- figure out this PWA thing!!!
- enable/set up pwa - use workbox?
  - favs need to be able to be accessed offline, others optional

Maybe

- app tour / help
- move textual content to headless CMS

Long term

- html5/canvas/phaser drawing arena app (integrated)
- detect country (if there are many tests from different countries) - geo ip

---

This is a React SPA using

- React, obviously - with functional components and hooks, context when needed
- Grommet (UI Components) / Bootstrap 4 grid only
- React-Burger-Menu for offCanvas slide-out
- Fuse.js for search (I was going to use Algolia but that seemed overkill)
- Auth0 for authentication and authorization

With a Ruby on Rails/PostgreSQL backend (REST API).

---

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:4000](http://localhost:4000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
