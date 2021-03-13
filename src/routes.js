import GlassRouter from "glass-router";

import home from "./views/Home/routes";
import login from "./views/Login/routes";

const routes = [
	...home,
	...login,
	{
		path: "*",
		render: () => <h2>Page Not Found</h2>,
	},
];

GlassRouter.options({ routes });

GlassRouter.beforeEach((to, from, next) => {
	const { middleware } = to.meta;

	if (!middleware) return next();

	const context = {
		to, from, next,
	};

	console.log(context);

	return middleware[0]({
		...context,
	});
});
