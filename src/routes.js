import GlassRouter from "./utils/glass/router";

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

const router = new GlassRouter({ routes });

router.beforeEach((to, from, next) => {
	const { middleware } = to.meta;

	if (!middleware) return next();

	const context = {
		to, from, next,
	};

	return middleware[0]({
		...context,
	});
});

export default router;
