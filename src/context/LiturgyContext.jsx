import { createContext, useContext, useReducer } from 'react';
import { qurbana } from '../data/qurbana.js';

const LiturgyContext = createContext(null);
const initialState = { language: 'en', role: 'congregation', currentIndex: 0, tocOpen: false };

function liturgyReducer(state, action) {
    switch (action.type) {
        case 'SET_LANGUAGE': return { ...state, language: action.payload };
        case 'SET_ROLE': return { ...state, role: action.payload };
        case 'NEXT_SECTION': return { ...state, currentIndex: Math.min(state.currentIndex + 1, qurbana.length - 1) };
        case 'PREV_SECTION': return { ...state, currentIndex: Math.max(state.currentIndex - 1, 0) };
        case 'GO_TO_SECTION': return { ...state, currentIndex: action.payload, tocOpen: false };
        case 'TOGGLE_TOC': return { ...state, tocOpen: !state.tocOpen };
        case 'CLOSE_TOC': return { ...state, tocOpen: false };
        default: return state;
    }
}

export function LiturgyProvider({ children }) {
    const [state, dispatch] = useReducer(liturgyReducer, initialState);
    return <LiturgyContext.Provider value={{ state, dispatch, sections: qurbana }}>{children}</LiturgyContext.Provider>;
}
export const useLiturgy = () => useContext(LiturgyContext);
