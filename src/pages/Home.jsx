import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { changelog } from '../data/changelog'
import ReloadPrompt from '../ReloadPrompt'
import { useGitHubCommits } from '../hooks/useGitHubCommits'

function Home() {
    const navigate = useNavigate()
    const [showAbout, setShowAbout] = useState(false)
    const [showHistory, setShowHistory] = useState(false)
    const [historyTab, setHistoryTab] = useState('major') // 'major' or 'commits'

    // Fetch commits (only when history modal is open to save API calls)
    const { commits, loading: commitsLoading, error: commitsError } = useGitHubCommits('BTKcreations', 'mobile-computing-prep')

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

                        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                            <button
                                className={`btn ${historyTab === 'major' ? 'btn-primary' : 'btn-outline'}`}
                                onClick={() => setHistoryTab('major')}
                                style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}
                            >
                                Major Releases
                            </button>
                            <button
                                className={`btn ${historyTab === 'commits' ? 'btn-primary' : 'btn-outline'}`}
                                onClick={() => setHistoryTab('commits')}
                                style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}
                            >
                                Live Commit Log
                            </button>
                        </div>

                        <div style={{ overflowY: 'auto', paddingRight: '0.5rem', flex: 1 }}>
                            {historyTab === 'major' ? (
                                changelog.map((log, index) => (
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
                                ))
                            ) : (
                                <div>
                                    {commitsLoading && <p style={{ textAlign: 'center', color: '#666' }}>Loading latest commits...</p>}
                                    {commitsError && <p style={{ textAlign: 'center', color: 'red' }}>Unable to load commits. (API Limit or Network Error)</p>}
                                    {!commitsLoading && !commitsError && commits.map((commit) => (
                                        <div key={commit.sha} style={{ marginBottom: '1rem', borderBottom: '1px solid #eee', paddingBottom: '1rem' }}>
                                            <p style={{ fontWeight: 'bold', marginBottom: '0.25rem', fontSize: '0.95rem' }}>{commit.commit.message}</p>
                                            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', color: '#64748b' }}>
                                                <span>👤 {commit.commit.author.name}</span>
                                                <span>🕒 {new Date(commit.commit.author.date).toLocaleDateString()}</span>
                                            </div>
                                            <a href={commit.html_url} target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.8rem', color: 'var(--primary-color)', textDecoration: 'none', display: 'inline-block', marginTop: '0.25rem' }}>
                                                View on GitHub &rarr;
                                            </a>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                        <button className="btn btn-primary" onClick={() => setShowHistory(false)} style={{ alignSelf: 'center', marginTop: '1rem' }}>Close</button>
                    </div>
                </div>
            )}

            {/* About Modal */}
            {showAbout && (
                <div className="modal-overlay">
                    <div className="modal-content" style={{ maxWidth: '600px', maxHeight: '85vh', display: 'flex', flexDirection: 'column' }}>
                        <button className="close-btn" onClick={() => setShowAbout(false)}>&times;</button>
                        <h2 style={{ color: 'var(--primary-color)', marginBottom: '1rem', textAlign: 'center' }}>About B.Tech Exam Prep</h2>

                        <div style={{ overflowY: 'auto', paddingRight: '0.5rem', textAlign: 'left' }}>
                            <p style={{ marginBottom: '1.5rem', lineHeight: '1.6', fontSize: '1.05rem' }}>
                                <strong>B.Tech Exam Prep</strong> is an advanced study companion designed to bridge the gap between heavy textbooks and last-minute exam preparation. We believe that smart work beats hard work when you have the right tools.
                            </p>

                            <div style={{ marginBottom: '2rem' }}>
                                <h3 style={{ color: '#334155', borderBottom: '2px solid #e2e8f0', paddingBottom: '0.5rem', marginBottom: '1rem' }}>🚀 Our Methodology</h3>
                                <div style={{ display: 'grid', gap: '1rem' }}>
                                    <div style={{ background: '#f8fafc', padding: '1rem', borderRadius: '8px' }}>
                                        <h4 style={{ margin: '0 0 0.5rem 0', color: 'var(--primary-color)' }}>🧠 Active Recall</h4>
                                        <p style={{ margin: 0, fontSize: '0.9rem', color: '#64748b' }}>
                                            We use <strong>Interactive Flashcards</strong> to force your brain to retrieve information, strengthening neural pathways better than passive reading.
                                        </p>
                                    </div>
                                    <div style={{ background: '#f8fafc', padding: '1rem', borderRadius: '8px' }}>
                                        <h4 style={{ margin: '0 0 0.5rem 0', color: 'var(--primary-color)' }}>👁️ Visual Learning</h4>
                                        <p style={{ margin: 0, fontSize: '0.9rem', color: '#64748b' }}>
                                            Our <strong>Mind Maps</strong> and <strong>SVG Diagrams</strong> break down complex systems into digestible visual components, making them easier to remember.
                                        </p>
                                    </div>
                                    <div style={{ background: '#f8fafc', padding: '1rem', borderRadius: '8px' }}>
                                        <h4 style={{ margin: '0 0 0.5rem 0', color: 'var(--primary-color)' }}>🎯 Exam Simulation</h4>
                                        <p style={{ margin: 0, fontSize: '0.9rem', color: '#64748b' }}>
                                            <strong>Model Papers</strong> are structured exactly like final exams (Part A & Part B) to build familiarity and confidence before the big day.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div style={{ marginBottom: '2rem' }}>
                                <h3 style={{ color: '#334155', borderBottom: '2px solid #e2e8f0', paddingBottom: '0.5rem', marginBottom: '1rem' }}>💡 The Vision</h3>
                                <p style={{ lineHeight: '1.6', color: '#475569' }}>
                                    This project started with a simple idea: <em>"What if exam prep wasn't stressful?"</em>
                                </p>
                                <p style={{ lineHeight: '1.6', color: '#475569', marginTop: '0.5rem' }}>
                                    We aim to democratize high-quality education by providing a free, accessible, and offline-capable Progressive Web App (PWA). Whether you're on a bus or in a library, your study materials are always with you.
                                </p>
                            </div>

                            <div style={{ background: '#f0f9ff', padding: '1.5rem', borderRadius: '12px', marginBottom: '1rem', textAlign: 'center', border: '1px solid #bae6fd' }}>
                                <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: '#0369a1' }}>👨‍💻 Developer</h3>
                                <p style={{ fontWeight: 'bold', fontSize: '1.3rem', color: '#0ea5e9', margin: '0.5rem 0' }}>BTK Creations</p>
                                <p style={{ fontSize: '0.9rem', color: '#0c4a6e' }}>Passionate about EdTech & Open Source</p>
                                <div style={{ marginTop: '1rem', display: 'flex', justifyContent: 'center', gap: '1rem' }}>
                                    <a href="https://github.com/BTKcreations" target="_blank" rel="noopener noreferrer" style={{ color: '#0284c7', textDecoration: 'none', fontWeight: 'bold' }}>GitHub</a>
                                    <span>•</span>
                                    <a href="mailto:contact@btkcreations.com" style={{ color: '#0284c7', textDecoration: 'none', fontWeight: 'bold' }}>Contact</a>
                                </div>
                            </div>
                        </div>

                        <button className="btn btn-primary" onClick={() => setShowAbout(false)} style={{ alignSelf: 'center', marginTop: '1rem' }}>Close</button>
                    </div>
                </div>
            )}
            <ReloadPrompt />
        </div>
    )
}

export default Home
