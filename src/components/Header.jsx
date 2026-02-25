import { useLiturgy } from '../context/LiturgyContext.jsx';
export default function Header() {
    const { state, dispatch } = useLiturgy();
    return (
        <header className="app-header">
            <div className="header-left">
                <div className="header-title-group">
                    <span className="header-title-ml font-ml">സീറോ മലബാർ കുർബ്ബാന</span>
                    <span className="header-title-en">Syro-Malabar Qurbana</span>
                </div>
            </div>
            <div className="header-right">
                <button className="lang-toggle" onClick={() => dispatch({ type: 'SET_LANGUAGE', payload: state.language === 'en' ? 'ml' : 'en' })}>
                    {state.language === 'en' ? 'മലയാളം' : 'English'}
                </button>
                <select className="role-selector" value={state.role} onChange={(e) => dispatch({ type: 'SET_ROLE', payload: e.target.value })} style={{ background: '#1a1a24', color: '#f0ece2', border: '1px solid #c9a84c', borderRadius: '4px', fontSize: '0.7rem' }}>
                    <option value="congregation">User</option>
                    <option value="reader">Reader</option>
                    <option value="priest">Priest</option>
                </select>
            </div>
        </header>
    );
}
