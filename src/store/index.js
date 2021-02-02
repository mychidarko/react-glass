import GlassX from "./GlassX";

// import state modules
import home from "./../views/Home/store";

const store = new GlassX({
	modules: [home],
});

export default store;
