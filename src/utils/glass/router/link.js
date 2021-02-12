import GlassRouter from "./index";

export const RouterLink = (props) => {
	const path = GlassRouter.getRoutePath(props.to);

	const handleClick = (event) => {
		event.preventDefault();
		return GlassRouter.push(path);
	}

	return (
		<a href={path} onClick={handleClick} {...props}>
			{props.children}
		</a>
	);
};
