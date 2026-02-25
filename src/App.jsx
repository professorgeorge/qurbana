import { useEffect, useState } from 'react';
import { LiturgyProvider, useLiturgy } from './context/LiturgyContext.jsx';
import Header from './components/Header.jsx';
import ProgressBar from './components/ProgressBar.jsx';
import SectionCard from './components/SectionCard.jsx';
import NavigationControls from './components/NavigationControls.jsx';

function QurbanaApp() {
    const { state, sections, dispatch } = useLiturgy();
    const { currentIndex, language } = state;
    const current = sections[currentIndex];

    useEffect(() => { window.scrollTo({ top: 0, behavior: 'smooth' }); }, [currentIndex]);

    return (
        <div className="app-layout">
            <Header />
            <ProgressBar />
            <main className="main-content">
                <SectionCard section={current} isCurrent={true} index={currentIndex} />
                {currentIndex === sections.length - 1 && (
                    <div className="completion-card" style={{ textAlign: 'center', padding: '32px', border: '1px solid rgba(201, 168, 76, 0.25)', borderRadius: '20px', background: 'rgba(201, 168, 76, 0.1)', marginTop: '16px' }}>
                        <p className={`completion-text ${language === 'ml' ? 'font-ml' : ''}`} style={{ color: '#c9a84c' }}>
                            {language === 'ml' ? 'ഖുർബ്ബാന സമ്പൂർണ്ണം. ദൈവത്തിന് നന്ദി.' : 'The Holy Qurbana is complete. Thanks be to God.'}
                        </p>
                    </div>
                )}
                <footer className="app-credit">
                    Conceived, designed & developed by{' '}
                    <a href="https://www.linkedin.com/in/beingbabu/" target="_blank" rel="noopener noreferrer" className="credit-link">Babu George</a>
                </footer>
            </main>
            <NavigationControls />
        </div>
    );
}

export default function App() { return (<LiturgyProvider><QurbanaApp /></LiturgyProvider>); }
