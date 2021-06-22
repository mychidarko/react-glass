import { Link } from "glass-router";
import { useTitle } from "@/utils/hooks";

export default function Login() {
	useTitle("Login");

	console.log(window.$route);

	return (
		<div className="flex-col flex:center-all" style={{ height: "100vh" }}>
			<h3>Check your console</h3>

			<div className="flex mt:_2">
				{/* This is a glass router link */}
				<Link to={{ name: "home" }}>Back to home</Link>

				{/* using route path */}
				<Link to="/" className="ml:_2">Back to home</Link>
			</div>
		</div>
	);
}
