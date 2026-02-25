import { useLiturgy } from '../context/LiturgyContext.jsx';
export default function NavigationControls() {
    const { state, dispatch, sections } = useLiturgy();
    const { currentIndex } = state;
    return (
        <nav className="nav-controls">
            <button className="nav-btn" onClick={() => dispatch({ type: 'PREV_SECTION' })} disabled={currentIndex === 0}>
                <span>← Prev</span>
            </button>
            <button className="nav-btn" onClick={() => dispatch({ type: 'NEXT_SECTION' })} disabled={currentIndex === sections.length - 1}>
                <span>Next →</span>
            </button>
        </nav>
    );
}
