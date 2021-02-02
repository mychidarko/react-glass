import { useGlobal, setGlobal, addReducer } from "reactn";

let callcount = 0;

export function $set(state) {
    setGlobal(state);
}

export function $get(state) {
    const [s] = useGlobal(state);
    
    if (callcount > 10) {
        return;
    }

    console.log("get state", state);
    console.log("get s", s);

    callcount += 1;
    
    return s;
}

export function $store(options = null) {
    let state = {};
    let reducers = {};
    let actions = {};
    let getters = {};
    let modules = [];

    modules = [...options?.modules];
    state = {...options?.state};
    reducers = {...options?.reducers};
    actions = {...options?.actions};
    getters = {...options?.getters};

    if (modules.length > 0) {
        modules.forEach((module) => {
            if (module.state) {
                const mstate = module.state;

                state = {
                    ...state,
                    ...mstate,
                };
            }

            if (module.reducers) {
                const mreducers = module.reducers;

                reducers = {
                    ...reducers,
                    ...mreducers,
                };
            }

            if (module.actions) {
                const mactions = module.actions;

                actions = {
                    ...actions,
                    ...mactions,
                };
            }

            if (module.getters) {
                const mgetters = module.getters;

                getters = {
                    ...getters,
                    ...mgetters,
                };
            }
        });
    }

    setGlobal(state);

    const reducerKeys = Object.keys(reducers);
    
    reducerKeys.forEach((key) => {
        addReducer(key, reducers[key]);
    });
}
