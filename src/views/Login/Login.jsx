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

	const [errors, setErrors] = useState({ username: "", password: "" });
	const [loading, setLoading] = useState(false);

	const validation = (item, value = null) => {
		let isValid = true;

		if (value.length === 0) {
			setErrors({
				...errors,
				[item]: `Please enter a ${item}`,
			});

			isValid = false;
		}

		if (isValid) {
			setErrors({
				...errors,
				[item]: "",
			});
		}

		return isValid;
	}

	const { value: username, bind: bindUsername, reset: resetUsername } = useInput("", validation);
	const { value: password, bind: bindPassword, reset: resetPassword } = useInput("", validation);

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
