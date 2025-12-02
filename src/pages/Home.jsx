import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { changelog } from '../data/changelog'
import ReloadPrompt from '../ReloadPrompt'

function Home() {
    const navigate = useNavigate()
    const [showAbout, setShowAbout] = useState(false)
    const [showHistory, setShowHistory] = useState(false)

    const handleSubjectClick = (subjectId) => {
        navigate(`/subject/${subjectId}`)
    }

    return (
        <div className="container" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <div style={{ position: 'absolute', top: '1rem', right: '1rem', display: 'flex', gap: '0.5rem' }}>
                <button
                    className="btn btn-outline"
                    style={{ borderRadius: '50%', width: '40px', height: '40px', padding: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem' }}
                    onClick={() => setShowHistory(true)}
                    title="Update History"
                >
                    🕒
                </button>
                <button
                    className="btn btn-outline"
                    style={{ borderRadius: '50%', width: '40px', height: '40px', padding: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem' }}
                    onClick={() => setShowAbout(true)}
                    title="About App"
                >
                    ℹ️
                </button>
            </div>

            <div style={{ textAlign: 'center', marginTop: '4rem', flex: 1 }}>
                <h1>🎓 B.Tech Exam Prep</h1>
                <p style={{ color: '#666', marginBottom: '2rem' }}>Select a subject to start mastering concepts</p>
                <div className="grid" style={{ maxWidth: '800px', margin: '2rem auto' }}>
                    <div className="card" style={{ cursor: 'pointer' }} onClick={() => handleSubjectClick('mobile')}>
                        <h2>📱 Mobile Computing</h2>
                        <p>Unit I - V, Quizzes, Model Papers</p>
                        <button className="btn btn-primary">Start Learning</button>
                    </div>
                    <div className="card" style={{ cursor: 'pointer' }} onClick={() => handleSubjectClick('sensors')}>
                        <h2>🌡️ Electronic Sensors</h2>
                        <p>Unit I - V, Open Elective-II</p>
                        <button className="btn btn-primary">Start Learning</button>
                    </div>
                    <div className="card" style={{ cursor: 'pointer' }} onClick={() => handleSubjectClick('pple')}>
                        <h2>⚖️ Professional Practice & Ethics</h2>
                        <p>Unit I - V, Law, IPR & Contracts</p>
                        <button className="btn btn-primary">Start Learning</button>
                    </div>
                </div>
            </div>

            <footer style={{ textAlign: 'center', padding: '2rem', color: '#64748b', fontSize: '0.9rem' }}>
                <p>Designed & Developed by <strong>BTK Creations</strong> 🚀</p>
                <p style={{ fontSize: '0.8rem', opacity: 0.7 }}>© {new Date().getFullYear()} B.Tech Exam Prep</p>
            </footer>

            {/* History Modal */}
            {showHistory && (
                <div className="modal-overlay">
                    <div className="modal-content" style={{ maxWidth: '600px', maxHeight: '80vh', display: 'flex', flexDirection: 'column' }}>
                        <button className="close-btn" onClick={() => setShowHistory(false)}>&times;</button>
                        <h2 style={{ color: 'var(--primary-color)', marginBottom: '1rem', textAlign: 'center' }}>📅 Update History</h2>
                        <div style={{ overflowY: 'auto', paddingRight: '0.5rem' }}>
                            {changelog.map((log, index) => (
                                <div key={index} style={{ marginBottom: '1.5rem', borderLeft: '3px solid var(--primary-color)', paddingLeft: '1rem' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.5rem' }}>
                                        <h3 style={{ fontSize: '1.1rem', margin: 0 }}>{log.title}</h3>
                                        <span style={{ fontSize: '0.8rem', color: '#64748b', background: '#f1f5f9', padding: '2px 8px', borderRadius: '12px' }}>v{log.version}</span>
                                    </div>
                                    <p style={{ fontSize: '0.85rem', color: '#94a3b8', marginBottom: '0.5rem' }}>{log.date}</p>
                                    <ul style={{ paddingLeft: '1.2rem', margin: 0 }}>
                                        {log.changes.map((change, i) => (
                                            <li key={i} style={{ fontSize: '0.95rem', color: '#334155', marginBottom: '0.25rem' }}>{change}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                        <button className="btn btn-primary" onClick={() => setShowHistory(false)} style={{ alignSelf: 'center', marginTop: '1rem' }}>Close</button>
                    </div>
                </div>
            )}

            {/* About Modal */}
            {showAbout && (
                <div className="modal-overlay">
                    <div className="modal-content" style={{ maxWidth: '500px', textAlign: 'center' }}>
                        <button className="close-btn" onClick={() => setShowAbout(false)}>&times;</button>
                        <h2 style={{ color: 'var(--primary-color)', marginBottom: '1rem' }}>About B.Tech Exam Prep</h2>
                        <p style={{ marginBottom: '1.5rem', lineHeight: '1.6' }}>
                            This application is designed to help B.Tech students prepare for their exams effectively.
                            It features comprehensive notes, interactive quizzes, model papers, and visual mind maps.
                        </p>
                        <div style={{ background: '#f8fafc', padding: '1.5rem', borderRadius: '12px', marginBottom: '1.5rem' }}>
                            <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>👨‍💻 Developer</h3>
                            <p style={{ fontWeight: 'bold', fontSize: '1.2rem', color: 'var(--primary-color)' }}>BTK Creations</p>
                            <p style={{ fontSize: '0.9rem', color: '#64748b' }}>Passionate about Education & Technology</p>
                        </div>
                        <button className="btn btn-primary" onClick={() => setShowAbout(false)}>Close</button>
                    </div>
                </div>
            )}
            <ReloadPrompt />
        </div>
    )
}

export default Home
