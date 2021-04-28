# Dressage Tests App - Single Page Application (SPA)

This is the React SPA version of the dressage test listing app. API is running on Ruby on Rails.

Don't forget your dressage test or learn the wrong one!

https://dressagetests.netlify.app

Front end on Netlify, back end on Heroku.

API REPO: https://github.com/jennego/dressage

---

TO DO

ASAP

- optimize responsive design - mostly done
- fix colours - mostly done
- clean up unneeded files and packages
- fix radio button when changed programmatically or set by url
- fix checkboxes when changed programmatically or set by url

Roadmap

- right click context menu (open, open in new tab, add to favs)
- user settings (theme mode, arena setting) - local storage unless user is logged in

Next release

- app tour / help
- Auth via Api/OAuth - next release?
- move textual content to headless CMS
- offline mode (after when things are done)

Index page

- Filter by year, org, level (asc and dsc later)
- Filter by current or not
- Results component (same page as index)
- Show full list, current only as default

Long term

- html5/canvas/phaser drawing arena app (integrated)
- detect country (if there are many tests from different countries) - geo ip

---

This is a React SPA using

- React, obviously - with functional components and hooks, context when needed
- Grommet (UI Components) / Bootstrap 4 grid only
- React-Burger-Menu for offCanvas slide-out
- Fuse.js for search (I was going to use Algolia but that seemed overkill)

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
