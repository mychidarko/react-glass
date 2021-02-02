import { useState } from "reactn";
import { useInput, useTitle } from "../../utils/hooks";

function LoginForm(props) {
	console.log(props);

	return (
		<form onSubmit={props.handleSubmit}>
			<h2>Login Form</h2>

			<div className="form-group">
				<input
					type="text"
					className="form-control"
					name="username"
					{...props.bindUsername}
				/>
				<span>{props.errors.username}</span>
			</div>
			<div className="form-group">
				<input
					type="password"
					className="form-control"
					name="password"
					{...props.bindPassword}
				/>
				<span>{props.errors.password}</span>
			</div>
			<button>{props.loading ? "Loading..." : "Login"}</button>
		</form>
	);
}

export default function Home() {
	useTitle("Login");

	const { value: username, bind: bindUsername, reset: resetUsername } = useInput("");
	const { value: password, bind: bindPassword, reset: resetPassword } = useInput("");

	const [errors, setErrors] = useState({ username: "", password: "" });
	const [loading, setLoading] = useState(false);

	const validation = (item) => {
		const items = { username, password };
		const field = items[item];
		let isValid = true;

		if (field.length === 0) {
			setErrors({
				...errors,
				[item]: `Please enter a ${item}`,
			});

			isValid = false;
		}

		return isValid;
	}

	const handleSubmit = (e) => {
		e.preventDefault();

		if (!validation("username") || !validation("password")) {
			return;
		}

		setLoading(true);

		setTimeout(() => {
			setLoading(false);
			resetUsername();
			resetPassword();
		}, 3000);
	}

	const props = {
		username,
		password,
		errors,
		loading,
		bindUsername,
		bindPassword,
		validation,
		handleSubmit,
	}

	return (
		<div className="flex flex:center-all" style={{ height: "100vh" }}>
			<LoginForm {...props} />
		</div>
	);
}
