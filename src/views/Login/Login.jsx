import { Link } from "glass-router";
import { useTitle } from "@/utils/hooks";

export default function Login(props) {
	useTitle("Login");

	console.log(props.location);

	return (
		<div className="flex flex:center-all" style={{ height: "100vh" }}>
			{/* This is a glass router link */}
			<Link to={{ name: "home" }}>Back to home</Link>

			{/* using route path */}
			<Link to="/" className="ml:_2">Back to home</Link>
		</div>
	);
}
