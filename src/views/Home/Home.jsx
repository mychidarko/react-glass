import { useReducer, useStore } from "glassx";
import { useRoute } from "glass-router";
import { useTitle } from "@/utils/hooks";

export default function Home() {
  // This changes the title in the title bar
  useTitle("Home");

  const navigator = useRoute();

  // using global state
  const [initial, setInitial] = useStore('initial');

  // This is an example reducer
  const updateInitial = useReducer("SET_INITIAL");

  const changeState = () => {
    setInitial("hobbies");
  };

  const updateState = () => {
    // You can also use reducers to update the state
    // check ./store/reducers.js for reducer declaration
    updateInitial("reducer updated");
  };

  const routeToNext = () => {
    return navigator({
      name: "login",
      state: {
        routeFrom: "home",
      },
    });
  }

  return (
    <div className="flex flex:center-all" style={{ height: "100vh" }}>
      <div className="px:_3 py:_5" style={{ width: "50%" }}>
        <h1 className="mb:_2">Welcome to React Glass!</h1>
        <p>
          React Glass is a simple react js boilerplate which focuses on
          providing a simple and pain-free developer experience. React Glass
          uses items like named routes, simple state management instead of
          overblown libraries like redux and unfriendly interfaces like
          react-router-dom. With React Glass, the simpler, the better.
        </p>
        <p className="mt:_2 mb:_2">
          State change will update this 👉 {initial}
        </p>
        <button onClick={changeState} className="mr:_1">
          Change State With Function
        </button>
        <button onClick={updateState} className="mr:_1">
          Update State With Reducer
        </button>
        <button onClick={routeToNext}>Go to login page</button>
      </div>
    </div>
  );
}
