# React Glass

React Glass is a simple react js boilerplate which focuses on providing a simple and pain-free developer experience.

## Features

### Scalable Project Structure

Although react docs say you can arrange your project in any way that feels convenient to you, there are a couple of techniques that you can emplore in your directory structure that makes scaling/working on your projects much easier. Some of these have been done by default here. Just download and you're good to go.

### Glass Router

Glass router is a wrapper around `react-router-dom` which provides a clean and developer friendly syntax and usage for your apps.

**Glass router is still being developed and so supports only the main react router features.**

Glass router is initialized in `src/routes.js`. That's where you need to import your routes. Each view has a routes file in which all routes relating to that view are defined. This file is then imported in the main routes file.

```js
import home from "./views/Home/routes";
import login from "./views/Login/routes";

const routes = [
  ...home,
  ...login,
];
```

Glass router is inspired by vue router and so uses the exact same syntax but includes `react-router` specific options like `exact` and `render`.

Route with `exact` prop

```js
import Home from "./Home"

export default [
    {
        path: "/",
        exact: true,
        component: Home,
        name: "home",
    },
];
```

Route with `render` instead of `component`.

```js
{
    path: "*",
    render: () => <h2>Page Not Found</h2>,
},
```

**More features like middleware and router.push are still being developed. Check this page for updates.**

### GlassX

One more Vue inspired feature, GlassX is a state management solution that follows a syntax close to VueX. GlassX is based on Reactn and actually uses [reactn](https://www.npmjs.com/package/reactn) features under the hood, so after creating your glassX store, you can use `useGlobal` and all other reactn methods to mutate and read your global state.

For now, glassX just provides a clean way to break up your components states and reducers into seperate files and import them as modules just as done in VueX.

Both updating and reading your state require you to use directly use reactn as done in `src/views/Home/Home.jsx` since glassX hasn't developed those features due to performance issues.

Example state.js

```js
const state = {
  initial: "name",
};

export default state;
```

Example reducer.js

```js
export const SET_USER = (state, dispatch, payload) => ({
  user: { ...state.user, ...payload },
});
```

Example read and update state:

```js
import { useGlobal } from "reactn";
import { useTitle } from "../../utils/hooks";

export default function Home() {
  useTitle("Home");

  const [something, setSomething] = useGlobal("something");

  setTimeout(() => {
    setSomething("hobies");
  }, 3000);
  ...
```

**GlassX is still under development, you can check this page for updates and new features.**

### Glass Fetch

Glass fetch is an http client written as a wrapper around axios. Although axios is simple and easy to use Glass fetch takes axios to an even better level with it's personalization. Axios is easy to use, but glass fx is made for your project.

Axios vs GlassFX

```js
// axios
axios.get("BASEURL/movies").then(...)...

// GlassFX
$get("movies").then(...)...
```

After login:

```js
// axios
const headers = {
    Authorization: `Bearer ${TOKEN}`,
};

axios.get("BASEURL/user/me", headers).then(...)...

// GlassFX
$get("user/me").then(...)...
```

All you need to do to get started with GlassFetch is configure your base URL and your token save string in `src/config/constants.js`

```js
export const TOKEN_STORAGE_KEY = "token";
export const USER_STORAGE_KEY = "user";
export const API_URL = "https://api.com/";
export const APP_NAME = "";
export const APP_TITLE = "";
```
