import { useLiturgy } from '../context/LiturgyContext.jsx';
export default function SectionCard({ section, isCurrent, index }) {
    const { state } = useLiturgy();
    const { language, role } = state;
    const isVisible = section.visibleTo.includes(role);
    if (!isVisible && role !== 'priest') return null;

    return (
        <div className={`section-card ${isCurrent ? 'current' : ''}`}>
            <div className="card-header">
                <span className="type-badge" style={{ '--badge-color': '#c9a84c' }}>{section.type}</span>
            </div>
            <h2 className={`section-title ${language === 'ml' ? 'font-ml' : ''}`}>{section.title[language]}</h2>
            {(role === 'priest' || role === 'reader') && section.rubrics[language] && (
                <div className="rubric-block"><p className="rubric-text">{section.rubrics[language]}</p></div>
            )}
            <div className="section-text-container">
                <p className={`section-text ${language === 'ml' ? 'font-ml malayalam-size' : ''}`}>{section.texts[language]}</p>
            </div>
        </div>
    );
}
