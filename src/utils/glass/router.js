import { Router, HashRouter, Route, Switch } from "react-router-dom";
import ScrollTo from "../ScrollTo";
import { createBrowserHistory } from "history";

/**
 * Easy peasy routing for react. Based on vue router.
 */
export default class GlassRouter {
    _defaultOptions = {
        routes: [],
        mode: "history",
        base: "/",
        forceRefresh: false,
        getUserConfirmation: window.confirm,
        hashType: "slash",
        keyLength: 6,
        linkActiveClass: "router-link-active",
        linkExactActiveClass: "router-link-exact-active",
        scrollBehavior: (savedPosition) => {
            const {x, y} = savedPosition;
            ScrollTo(x, y);
        },
    };
    
    _options = {};

    beforeHooks = [];

    history = null;

    constructor(options) {
        this._options = {
            ...this._defaultOptions,
            ...options,
        };
    }

    /**
     * Generate JSX from defined routes
     */
    render() {
        const {
            mode, routes, base, forceRefresh, getUserConfirmation, keyLength, hashType
        } = this._options;

        let routerProps = {};

        if (this._options.mode === "history") {
            routerProps = {
                basename: base,
                forceRefresh,
                getUserConfirmation,
                keyLength,
            };

            this.history = createBrowserHistory(routerProps);
        } else {
            routerProps = {
                basename: base,
                hashType,
                getUserConfirmation,
            };
        }

        const children = (
            <>
                <ScrollTo />
                <Switch>
                    {routes.map((route, index) => {
                        let props = {};

                        if (route.component) {
                            props.component = route.component;
                        } else if (route.render) {
                            props.render = route.render;
                        }

                        return <Route
                            exact={route.exact || false}
                            path={route.path}
                            key={index}
                            {...props}
                        />
                    })}
                </Switch>
            </>
        );

        return mode === "hash" ? (
            <HashRouter {...routerProps}>
                {children}
            </HashRouter>
        ) : (
            <Router history={this.history} {...routerProps}>
                {children}
            </Router>
        );
    }

    /**
     * Register a router hook
     */
    registerHook (list, fn) {
        list.push(fn);

        return function () {
            const i = list.indexOf(fn);

            if (i > -1) {
                list.splice(i, 1);
            }
        }
    }

    /**
     * Define middleware
     */
    beforeEach(fn) {
        return this.registerHook(this.beforeHooks, fn);
    }

    /**
     * Internal route handler
     */
    getRoutePath(options) {
        const { routes } = this._options;
        let r = null;

        if (typeof options === "object") {
            routes.forEach((route) => {
                if (route.name === options.name) {
                    r = route.path;
                }
            });
            
            if (r === null) {
                return Error(`No route named ${options.name} was found!`);
            }
        }

        if (r === null) r = options;

        return r;
    }

    /**
     * Navigate to a specific month
     */
    push(options) {
        const path = this.getRoutePath(options);

        console.log("path", path);

        return this.history.push(path);
    }

    history() {
        return this.history;
    }
}
