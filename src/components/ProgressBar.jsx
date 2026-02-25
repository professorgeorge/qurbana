import { useLiturgy } from '../context/LiturgyContext.jsx';
export default function ProgressBar() {
    const { state, sections } = useLiturgy();
    const progress = ((state.currentIndex + 1) / sections.length) * 100;
    return (
        <div className="progress-container">
            <div className="progress-track"><div className="progress-fill" style={{ width: `${progress}%` }}></div></div>
            <div className="progress-label">{state.currentIndex + 1} / {sections.length}</div>
        </div>
    );
}
