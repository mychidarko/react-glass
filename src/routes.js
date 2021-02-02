import GlassRouter from "./utils/GlassRouter";

import home from "./views/Home/routes";
import login from "./views/Login/routes";

const routes = [
  ...home,
  ...login,
];

const router = new GlassRouter({
  base: "/",
  routes,
});

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
