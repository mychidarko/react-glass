# Views

The views directory is where you keep all your views/pages.

A typical page directory looks something like this:

```sh
.
├── components
│   └── index.js
├── Dashboard.jsx
├── routes.js
└── store
    ├── index.js
    ├── README.md
    ├── reducers.js
    └── state.js
```

`components` holds all your components specific to that page. For instance DashboardCard can be kept in the dashboard components folder. You can further import and export the DashboardCard in the `components/index.js` so you can import from ./components instead of ./components/DashboardCard

The `Dashboard.jsx` is the main file in that component. It's where components are impoted and used. It also houses containers and the actual view files. You should rename this as your main file eg: Login.js/Login.jsx

The `store` directory houses your state, reducers and anything related to global state. It's broken up into modules like this so you can easily keep track of which page created/own and needs a particular state variable or method.
