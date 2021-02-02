import { $store } from "./floppy";

// import state modules
import home from "./../views/Home/store";

$store({
	modules: [
		home
	],
});
