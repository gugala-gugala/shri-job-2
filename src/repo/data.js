import { useReducer } from "react";
import { cards as dataCards } from '../data/cards'

const reducer = (state, action) => {
    switch (action.type) {
        case "SETTINGS":
            return {
            repo: action.payload.repo,
            build: action.payload.build,
            branch: action.payload.branch,
            every: Number.parseInt(action.payload.every),
            };
        default:
            return state;
    }
};

const initialState = {
    repo: null,
    build: null,
    branch: null,
    every: null,
};

const useRepositoryData = () => {
    const [settings, dispatch] = useReducer(reducer, initialState);
    const setSettings = (formData) => {
        dispatch({ type: "SETTINGS", payload: formData });
    };
    return [settings, setSettings, dataCards];
};

export default useRepositoryData;