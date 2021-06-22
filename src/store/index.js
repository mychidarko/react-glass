import GlassX from "glassx";

// import store modules
import home from "./../views/Home/store";
import login from "./../views/Login/store";

const store = GlassX.store({
	compareState: true,
	modules: [home, login],
});

export default store;
