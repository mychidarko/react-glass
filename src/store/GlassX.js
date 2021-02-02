import { setGlobal, addReducer } from "reactn";

export default class GlassX {
    constructor(options = null) {
        if (options) {
            this.store(options);
        }
    }

    store(options = null) {
        let state = {};
        let reducers = {};
        let modules = [];

        modules = [...options?.modules];
        state = {...options?.state};
        reducers = {...options?.reducers};

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
            });
        }

        setGlobal(state);

        const reducerKeys = Object.keys(reducers);
        
        reducerKeys.forEach((key) => {
            addReducer(key, reducers[key]);
        });
    }
}

// let callcount = 0;

// export function $set(state) {
//     setGlobal(state);
// }

// export function $get(state) {
//     const [s] = useGlobal(state);
    
//     if (callcount > 10) {
//         return;
//     }

//     console.log("get state", state);
//     console.log("get s", s);

//     callcount += 1;
    
//     return s;
// }
