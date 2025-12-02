import { useState, useEffect } from 'react'
import { syllabus as mobileSyllabus } from './data/syllabus'
import { quizzes as mobileQuizzes } from './data/quiz'
import { modelPaper as modelPaper1 } from './data/modelPaper'
import { modelPaper2 } from './data/modelPaper2'
import { modelPaper3 } from './data/modelPaper3'
import { modelPaper4 } from './data/modelPaper4'
import { examTips as mobileTips } from './data/examTips'
import { flashcards as mobileFlashcards } from './data/flashcards'

import { electronicSensorsSyllabus } from './data/electronicSensorsSyllabus'
import { electronicSensorsQuiz } from './data/electronicSensorsQuiz'
import { electronicSensorsModelPaper } from './data/electronicSensorsModelPaper'
import { electronicSensorsModelPaper2 } from './data/electronicSensorsModelPaper2'
import { electronicSensorsModelPaper3 } from './data/electronicSensorsModelPaper3'
import { electronicSensorsTips } from './data/electronicSensorsTips'
import { electronicSensorsFlashcards } from './data/electronicSensorsFlashcards'

import { ppleSyllabus } from './data/ppleSyllabus'
import { ppleQuiz } from './data/ppleQuiz'
import { ppleModelPaper } from './data/ppleModelPaper'
import { ppleTips } from './data/ppleTips'
import { ppleFlashcards } from './data/ppleFlashcards'
import './tips.css'
import './quiz.css'
import './mindmap.css'

// Actually, I overwrote the file to export named exports.
import { mobileMindmaps, electronicSensorsMindmaps } from './data/mindmaps'
import ReloadPrompt from './ReloadPrompt'
import { changelog } from './data/changelog'

const MindMapNode = ({ node }) => (
  <div className="mm-node">
    <div className="mm-content">{node.label}</div>
    {node.children && node.children.length > 0 && (
      <div className="mm-children">
        {node.children.map((child) => (
          <MindMapNode key={child.id} node={child} />
        ))}
      </div>
    )}
  </div>
)

function App() {
  const [currentSubject, setCurrentSubject] = useState(null) // null (selection), 'mobile', 'sensors'

  // Data State (Derived from currentSubject)
  const getSubjectData = () => {
    if (currentSubject === 'sensors') {
      return {
        title: "Electronic Sensors",
        syllabus: electronicSensorsSyllabus,
        quizzes: electronicSensorsQuiz,
        papers: [electronicSensorsModelPaper, electronicSensorsModelPaper2, electronicSensorsModelPaper3],
        tips: electronicSensorsTips,
        flashcards: electronicSensorsFlashcards,
        mindmaps: electronicSensorsMindmaps,
        progressKey: 'electronicSensorsProgress'
      }
    }
    if (currentSubject === 'pple') {
      return {
        title: "Professional Practice, Law & Ethics",
        syllabus: ppleSyllabus,
        quizzes: ppleQuiz,
        papers: [ppleModelPaper],
        tips: ppleTips,
        flashcards: ppleFlashcards,
        mindmaps: null, // No mindmaps yet for PPLE
        progressKey: 'ppleProgress'
      }
    }
    // Default to Mobile Computing
    return {
      title: "Mobile Computing",
      syllabus: mobileSyllabus,
      quizzes: mobileQuizzes,
      papers: [modelPaper1, modelPaper2, modelPaper3, modelPaper4],
      tips: mobileTips,
      flashcards: mobileFlashcards,
      mindmaps: mobileMindmaps,
      progressKey: 'mobileComputingProgress'
    }
  }


  const subjectData = getSubjectData()

  const [expandedUnit, setExpandedUnit] = useState(null)
  const [quizMode, setQuizMode] = useState(null)
  const [viewMode, setViewMode] = useState('study')
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [showScore, setShowScore] = useState(false)
  const [finalExamQuestions, setFinalExamQuestions] = useState([])
  const [progress, setProgress] = useState({})

  const [selectedPaperId, setSelectedPaperId] = useState(0)
  const [revealedAnswers, setRevealedAnswers] = useState({})
  const [userAnswers, setUserAnswers] = useState({})
  const [selectedTopic, setSelectedTopic] = useState(null)
  const [activeMindMap, setActiveMindMap] = useState(null)
  const [zoomLevel, setZoomLevel] = useState(1)
  const [unitView, setUnitView] = useState({}) // { [unitId]: 'notes' | null }

  const [currentCardIndex, setCurrentCardIndex] = useState(0)
  const [isFlipped, setIsFlipped] = useState(false)
  const [shuffledCards, setShuffledCards] = useState([])

  // Tips State
  const [activeTipCategory, setActiveTipCategory] = useState(0)

  useEffect(() => {
    if (currentSubject) {
      const savedProgress = localStorage.getItem(subjectData.progressKey)
      if (savedProgress) {
        setProgress(JSON.parse(savedProgress))
      } else {
        setProgress({})
      }
      // Reset views when subject changes
      setViewMode('study')
      setExpandedUnit(null)
      setQuizMode(null)
      setShuffledCards([...subjectData.flashcards])
      setCurrentCardIndex(0)
      setSelectedPaperId(0)
    }
  }, [currentSubject, subjectData.progressKey, subjectData.flashcards])

  const saveProgress = (unitId, newScore, totalQuestions) => {
    const currentBestScore = progress[unitId]?.score || 0;
    if (newScore > currentBestScore) {
      const newProgress = { ...progress, [unitId]: { score: newScore, total: totalQuestions } }
      setProgress(newProgress)
      localStorage.setItem(subjectData.progressKey, JSON.stringify(newProgress))
    }
  }

  const toggleSection = (unitId, section) => {
    setUnitView(prev => ({
      ...prev,
      [unitId]: prev[unitId] === section ? null : section
    }))
  }

  const openTopic = (topic) => setSelectedTopic(topic)
  const closeTopic = () => setSelectedTopic(null)

  const startQuiz = (unitId) => {
    if (subjectData.quizzes[unitId]) {
      setQuizMode(unitId)
      setCurrentQuestion(0)
      setScore(0)
      setShowScore(false)
    } else {
      alert('Quiz coming soon for this unit!')
    }
  }

  const startFinalExam = () => {
    let allQuestions = []
    Object.values(subjectData.quizzes).forEach(unitQuestions => {
      allQuestions = [...allQuestions, ...unitQuestions]
    })
    const shuffled = allQuestions.sort(() => 0.5 - Math.random())
    const selected = shuffled.slice(0, 10)
    setFinalExamQuestions(selected)
    setQuizMode('FINAL')
    setCurrentQuestion(0)
    setScore(0)
    setShowScore(false)
  }

  const handleAnswer = (optionIndex) => {
    let isCorrect = false
    const questions = quizMode === 'FINAL' ? finalExamQuestions : subjectData.quizzes[quizMode]

    if (optionIndex === questions[currentQuestion].answer) {
      isCorrect = true
    }

    if (isCorrect) setScore(score + 1)

    const nextQuestion = currentQuestion + 1
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion)
    } else {
      setShowScore(true)
      saveProgress(quizMode, isCorrect ? score + 1 : score, questions.length)
    }
  }

  const closeQuiz = () => {
    setQuizMode(null)
    setCurrentQuestion(0)
    setScore(0)
    setShowScore(false)
    setFinalExamQuestions([])
  }

  const getCurrentQuestions = () => {
    if (quizMode === 'FINAL') return finalExamQuestions
    return subjectData.quizzes[quizMode]
  }

  const toggleAnswer = (id) => {
    setRevealedAnswers(prev => ({ ...prev, [id]: !prev[id] }))
  }

  const handleUserAnswerChange = (id, value) => {
    setUserAnswers(prev => ({ ...prev, [id]: value }))
  }

  const switchPaper = (index) => {
    setSelectedPaperId(index)
    setRevealedAnswers({})
    setUserAnswers({})
    window.scrollTo(0, 0)
  }

  // Flashcard Functions
  const nextCard = () => {
    setIsFlipped(false)
    setTimeout(() => setCurrentCardIndex((prev) => (prev + 1) % shuffledCards.length), 200)
  }

  const prevCard = () => {
    setIsFlipped(false)
    setTimeout(() => setCurrentCardIndex((prev) => (prev - 1 + shuffledCards.length) % shuffledCards.length), 200)
  }

  const flipCard = () => setIsFlipped(!isFlipped)

  const shuffleFlashcards = () => {
    setIsFlipped(false)
    setTimeout(() => {
      const shuffled = [...subjectData.flashcards].sort(() => 0.5 - Math.random())
      setShuffledCards(shuffled)
      setCurrentCardIndex(0)
    }, 200)
  }


  // ... existing state
  const [showAbout, setShowAbout] = useState(false)
  const [showHistory, setShowHistory] = useState(false)

  if (!currentSubject) {
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
            <div className="card" style={{ cursor: 'pointer' }} onClick={() => setCurrentSubject('mobile')}>
              <h2>📱 Mobile Computing</h2>
              <p>Unit I - V, Quizzes, Model Papers</p>
              <button className="btn btn-primary">Start Learning</button>
            </div>
            <div className="card" style={{ cursor: 'pointer' }} onClick={() => setCurrentSubject('sensors')}>
              <h2>🌡️ Electronic Sensors</h2>
              <p>Unit I - V, Open Elective-II</p>
              <button className="btn btn-primary">Start Learning</button>
            </div>
            <div className="card" style={{ cursor: 'pointer' }} onClick={() => setCurrentSubject('pple')}>
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

  const currentPaper = subjectData.papers[selectedPaperId]

  return (
    <div className="container">
      <header>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
          <button className="btn" onClick={() => setCurrentSubject(null)}>&larr; Switch Subject</button>
          <span className="unit-badge">{subjectData.title}</span>
        </div>
        <h1>{subjectData.title} Prep</h1>
        <p className="subtitle">Comprehensive B.Tech Exam Preparation</p>

        {/* Breadcrumbs */}
        <div className="breadcrumbs" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', color: '#64748b', margin: '1rem 0', justifyContent: 'center' }}>
          <span style={{ cursor: 'pointer' }} onClick={() => setCurrentSubject(null)}>Home</span>
          <span>&gt;</span>
          <span style={{ fontWeight: 'bold', color: 'var(--primary-color)' }}>{subjectData.title}</span>
          {viewMode !== 'study' && (
            <>
              <span>&gt;</span>
              <span>{viewMode === 'paper' ? 'Model Papers' : viewMode === 'tips' ? 'Exam Tips' : 'Flashcards'}</span>
            </>
          )}
        </div>

        <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', marginTop: '1rem', flexWrap: 'wrap' }}>
          <button className={`btn ${viewMode === 'study' ? 'btn-primary' : ''}`} onClick={() => setViewMode('study')}>Study Mode</button>
          <button className={`btn ${viewMode === 'paper' ? 'btn-primary' : ''}`} onClick={() => setViewMode('paper')}>Model Papers</button>
          <button className={`btn ${viewMode === 'tips' ? 'btn-primary' : ''}`} onClick={() => setViewMode('tips')}>Exam Tips</button>
          <button className={`btn ${viewMode === 'flashcards' ? 'btn-primary' : ''}`} onClick={() => setViewMode('flashcards')}>Flashcards</button>
        </div>

        {viewMode === 'study' && (
          <>
            <button className="btn btn-primary" style={{ marginTop: '1rem' }} onClick={startFinalExam}>
              Start Final Exam (Mixed)
            </button>
            {progress['FINAL'] && (
              <p style={{ marginTop: '0.5rem', fontSize: '0.9rem', color: 'var(--primary-color)' }}>
                Best Final Exam Score: {progress['FINAL'].score}/{progress['FINAL'].total}
              </p>
            )}
          </>
        )}
      </header>

      {viewMode === 'study' && (
        <main className="grid">
          {subjectData.syllabus.map((unit) => (
            <div key={unit.unit} className="card">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span className="unit-badge">Unit {unit.unit}</span>
                {progress[unit.unit] && (
                  <span style={{ fontSize: '0.8rem', color: 'green', fontWeight: 'bold' }}>
                    Score: {progress[unit.unit].score}/{progress[unit.unit].total}
                  </span>
                )}
              </div>
              <h2>{unit.title}</h2>

              {unitView[unit.unit] === 'notes' && unit.notes ? (
                <div className="notes-content">
                  <div dangerouslySetInnerHTML={{ __html: unit.notes }} />
                </div>
              ) : (
                <div className="topics-list-container">
                  <p style={{ fontSize: '0.9rem', color: '#666', marginBottom: '0.5rem' }}>Select a topic to learn:</p>
                  <div className="topics-grid">
                    {unit.topics.map((topic, index) => (
                      <button key={index} className="topic-btn" onClick={() => openTopic(topic)}>
                        {topic.title}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div className="actions">
                <button
                  className={`btn ${unitView[unit.unit] === 'notes' ? 'btn-primary' : ''}`}
                  onClick={() => unit.notes ? toggleSection(unit.unit, 'notes') : alert('Notes coming soon!')}
                >
                  {unitView[unit.unit] === 'notes' ? 'Hide Overview' : 'Unit Overview'}
                </button>

                <button
                  className="btn btn-primary"
                  onClick={() => {
                    setActiveMindMap(unit.unit)
                    setZoomLevel(1)
                  }}
                >
                  Mind Map
                </button>

                <button className="btn btn-primary" onClick={() => startQuiz(unit.unit)}>Take Quiz</button>
              </div>
            </div>
          ))}
        </main>
      )}

      {viewMode === 'paper' && (
        <main className="paper-container">
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '2rem' }}>
            {subjectData.papers.map((paper, index) => (
              <button
                key={index}
                className={`btn ${selectedPaperId === index ? 'btn-primary' : ''}`}
                onClick={() => switchPaper(index)}
              >
                Paper Set {index + 1}
              </button>
            ))}
          </div>

          <div className="paper-header">
            <h2>{currentPaper.title}</h2>
            <h3>{currentPaper.subject}</h3>
            <div className="paper-meta">
              <span>Time: {currentPaper.time}</span>
              <span>Max Marks: {currentPaper.maxMarks}</span>
            </div>
          </div>

          <div className="paper-section">
            <h3>PART-A (Short Answer Questions)</h3>
            <p>Answer all 10 questions. Each question carries 1 mark.</p>
            <div className="questions-list">
              {currentPaper.partA.map((q) => (
                <div key={q.id} className="question-item">
                  <div className="question-text"><strong>{q.id}.</strong> {q.question} <span className="marks">[1M]</span></div>
                  <textarea
                    className="answer-input"
                    placeholder="Write your answer here..."
                    value={userAnswers[`A-${q.id}`] || ''}
                    onChange={(e) => handleUserAnswerChange(`A-${q.id}`, e.target.value)}
                  />
                  <button className="btn-text" onClick={() => toggleAnswer(`A-${q.id}`)}>
                    {revealedAnswers[`A-${q.id}`] ? 'Hide Model Answer' : 'Show Model Answer'}
                  </button>
                  {revealedAnswers[`A-${q.id}`] && (
                    <div className="model-answer" dangerouslySetInnerHTML={{ __html: q.answer }} />
                  )}
                </div>
              ))}
            </div>
          </div>

          {currentPaper.partB && (
            <div className="paper-section">
              <h3>PART-B (Long Answer Questions)</h3>
              <p>Answer any 5 questions. Each question carries 10 marks.</p>
              <div className="questions-list">
                {currentPaper.partB.map((q) => (
                  <div key={q.questionNumber} className="question-group">
                    <h4>Unit {q.unit}</h4>
                    {q.choices.map((choice, cIndex) => (
                      <div key={cIndex}>
                        <div className="question-item">
                          <div className="question-text">
                            <strong>{q.questionNumber} ({String.fromCharCode(97 + cIndex)}).</strong> {choice.question} <span className="marks">[10M]</span>
                          </div>
                          <textarea
                            className="answer-input large"
                            placeholder="Write your answer here..."
                            value={userAnswers[`B-${q.questionNumber}${cIndex}`] || ''}
                            onChange={(e) => handleUserAnswerChange(`B-${q.questionNumber}${cIndex}`, e.target.value)}
                          />
                          <button className="btn-text" onClick={() => toggleAnswer(`B-${q.questionNumber}${cIndex}`)}>
                            {revealedAnswers[`B-${q.questionNumber}${cIndex}`] ? 'Hide Model Answer' : 'Show Model Answer'}
                          </button>
                          {revealedAnswers[`B-${q.questionNumber}${cIndex}`] && (
                            <div className="model-answer" dangerouslySetInnerHTML={{ __html: choice.answer }} />
                          )}
                        </div>
                        {cIndex === 0 && <div className="or-divider">OR</div>}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          )}
        </main>
      )}

      {viewMode === 'tips' && (
        <main className="tips-container-pro">
          <div className="tips-sidebar">
            <h3>Exam Strategy</h3>
            <ul>
              {subjectData.tips.map((section, index) => (
                <li
                  key={index}
                  className={activeTipCategory === index ? 'active' : ''}
                  onClick={() => setActiveTipCategory(index)}
                >
                  {section.category.split(' ')[0]} {/* Show first word or icon if possible, or full title */}
                  <span className="sidebar-subtitle">{section.category}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="tips-content-area">
            <div className="tips-header-pro">
              <h2>{subjectData.tips[activeTipCategory].category}</h2>
              <div className="progress-bar">
                <div
                  className="progress-fill"
                  style={{ width: `${((activeTipCategory + 1) / subjectData.tips.length) * 100}%` }}
                ></div>
              </div>
            </div>

            <div className="tips-cards-pro">
              {subjectData.tips[activeTipCategory].tips.map((tip, tipIndex) => (
                <div key={tipIndex} className="tip-card-pro">
                  <div className="tip-icon-pro">{tipIndex + 1}</div>
                  <div className="tip-text-pro">
                    <h4>{tip.title}</h4>
                    <div dangerouslySetInnerHTML={{ __html: tip.content }} />
                  </div>
                </div>
              ))}
            </div>

            <div className="tips-navigation">
              <button
                className="btn"
                disabled={activeTipCategory === 0}
                onClick={() => setActiveTipCategory(prev => prev - 1)}
              >
                &larr; Previous
              </button>
              <span className="page-indicator">
                {activeTipCategory + 1} of {subjectData.tips.length}
              </span>
              <button
                className="btn btn-primary"
                disabled={activeTipCategory === subjectData.tips.length - 1}
                onClick={() => setActiveTipCategory(prev => prev + 1)}
              >
                Next &rarr;
              </button>
            </div>
          </div>
        </main>
      )}

      {viewMode === 'flashcards' && shuffledCards.length > 0 && (
        <main className="flashcard-container">
          <div className="flashcard-header">
            <h2>Interactive Flashcards</h2>
            <p>Test your knowledge with active recall. Click the card to flip.</p>
          </div>

          <div className="flashcard-scene">
            <div className={`flashcard ${isFlipped ? 'flipped' : ''}`} onClick={flipCard}>
              <div className="flashcard-face flashcard-front">
                <span className="card-unit">Unit {shuffledCards[currentCardIndex].unit}</span>
                <h3>{shuffledCards[currentCardIndex].front}</h3>
                <p className="tap-hint">Tap to flip</p>
              </div>
              <div className="flashcard-face flashcard-back">
                <div dangerouslySetInnerHTML={{ __html: shuffledCards[currentCardIndex].back }} />
              </div>
            </div>
          </div>

          <div className="flashcard-controls" style={{ gap: '1rem' }}>
            <button className="btn btn-primary" onClick={prevCard}>&larr; Previous</button>
            <span className="card-count">{currentCardIndex + 1} / {shuffledCards.length}</span>
            <button className="btn btn-primary" onClick={nextCard}>Next &rarr;</button>
          </div>

          <div style={{ textAlign: 'center', marginTop: '1rem' }}>
            <button className="btn btn-primary" onClick={shuffleFlashcards}>Shuffle Cards</button>
          </div>
        </main>
      )}

      {/* Enhanced Quiz Modal */}
      {quizMode && (
        <div className="quiz-overlay">
          <div className="quiz-card">
            <button className="close-btn" onClick={closeQuiz} style={{ position: 'absolute', right: '1.5rem', top: '1.5rem', zIndex: 10 }}>&times;</button>

            {showScore ? (
              <div className="score-container">
                <div
                  className="score-circle"
                  style={{ '--score-percent': `${(score / (quizMode === 'FINAL' ? finalExamQuestions.length : subjectData.quizzes[quizMode].length)) * 100}%` }}
                >
                  <div className="score-text">
                    <span className="score-number">{score}</span>
                    <span className="score-total">of {quizMode === 'FINAL' ? finalExamQuestions.length : subjectData.quizzes[quizMode].length}</span>
                  </div>
                </div>
                <h2 className="score-message">
                  {score / (quizMode === 'FINAL' ? finalExamQuestions.length : subjectData.quizzes[quizMode].length) > 0.7 ? 'Excellent Work! 🎉' : 'Keep Practicing! 💪'}
                </h2>
                <p className="score-submessage">You've completed the {quizMode === 'FINAL' ? 'Final Exam' : `Unit ${quizMode}`} quiz.</p>
                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                  <button className="btn btn-outline" onClick={closeQuiz}>Close</button>
                  <button className="btn btn-primary" onClick={() => {
                    setShowScore(false)
                    setCurrentQuestion(0)
                    setScore(0)
                    // If final exam, reshuffle? For now just restart.
                  }}>Try Again</button>
                </div>
              </div>
            ) : (
              <>
                <div className="quiz-header">
                  <div className="quiz-meta">
                    <span>{quizMode === 'FINAL' ? 'Final Exam' : `Unit ${quizMode} Quiz`}</span>
                    <span>Question {currentQuestion + 1} / {quizMode === 'FINAL' ? finalExamQuestions.length : subjectData.quizzes[quizMode].length}</span>
                  </div>
                  <div className="quiz-progress-track">
                    <div
                      className="quiz-progress-fill"
                      style={{ width: `${((currentQuestion + 1) / (quizMode === 'FINAL' ? finalExamQuestions.length : subjectData.quizzes[quizMode].length)) * 100}%` }}
                    ></div>
                  </div>
                </div>

                <div className="quiz-content">
                  {(() => {
                    const questions = quizMode === 'FINAL' ? finalExamQuestions : subjectData.quizzes[quizMode]
                    return (
                      <>
                        <p className="quiz-question">{questions[currentQuestion].question}</p>
                        <div className="quiz-options">
                          {questions[currentQuestion].options.map((option, index) => (
                            <button key={index} className="quiz-option-btn" onClick={() => handleAnswer(index)}>
                              {option}
                            </button>
                          ))}
                        </div>
                      </>
                    )
                  })()}
                </div>
              </>
            )}
          </div>
        </div>
      )}

      {/* Topic Content Modal */}
      {selectedTopic && (
        <div className="modal-overlay">
          <div className="modal-content topic-modal">
            <button className="close-btn" onClick={closeTopic}>&times;</button>
            <div className="topic-content">
              <h2>{selectedTopic.title}</h2>
              <div dangerouslySetInnerHTML={{ __html: selectedTopic.content }} />
            </div>
            <button className="btn btn-primary" onClick={closeTopic} style={{ marginTop: '2rem' }}>Close</button>
          </div>
        </div>
      )}
      {/* Mind Map Modal */}
      {activeMindMap && subjectData.mindmaps && subjectData.mindmaps[activeMindMap] && (
        <div className="modal-overlay">
          <div className="modal-content" style={{ width: '95%', height: '95%', maxWidth: '100%', display: 'flex', flexDirection: 'column', padding: '1rem' }}>
            <button className="close-btn" onClick={() => setActiveMindMap(null)} style={{ top: '10px', right: '10px' }}>&times;</button>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
              <h2 style={{ color: 'var(--primary-color)', fontSize: '1.5rem', margin: 0 }}>
                🧠 Concept Map: Unit {activeMindMap}
              </h2>
              <div className="zoom-controls" style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                <button className="btn btn-outline" style={{ padding: '0.2rem 0.8rem' }} onClick={() => setZoomLevel(z => Math.max(0.5, z - 0.1))}>-</button>
                <span style={{ minWidth: '3rem', textAlign: 'center', fontWeight: 'bold' }}>{Math.round(zoomLevel * 100)}%</span>
                <button className="btn btn-outline" style={{ padding: '0.2rem 0.8rem' }} onClick={() => setZoomLevel(z => Math.min(2, z + 0.1))}>+</button>
                <button className="btn btn-outline" style={{ padding: '0.2rem 0.8rem' }} onClick={() => setZoomLevel(1)}>Reset</button>
              </div>
            </div>

            <div className="mindmap-container" style={{
              flex: 1,
              overflow: 'auto',
              marginTop: 0,
              borderRadius: '12px',
              border: '1px solid #e2e8f0',
              position: 'relative',
              display: 'flex',           // Use flex for centering/scrolling
              alignItems: 'flex-start',  // Allow scrolling from top
              justifyContent: 'flex-start' // Allow scrolling from left
            }}>
              <div className="mm-tree mm-root" style={{
                zoom: zoomLevel,         // Use zoom for layout-aware scaling
                margin: 'auto',          // Center content if smaller than container
                transformOrigin: 'top left' // Fallback if zoom fails (though zoom overrides)
              }}>
                <MindMapNode node={subjectData.mindmaps[activeMindMap]} />
              </div>
            </div>

            <button
              className="btn btn-primary"
              onClick={() => setActiveMindMap(null)}
              style={{
                alignSelf: 'center',
                marginTop: '1rem',
                padding: '0.8rem 2rem',
                width: 'auto',
                height: 'auto',
                flexShrink: 0,
                boxShadow: '0 4px 12px rgba(0,0,0,0.2)'
              }}
            >
              Close Map
            </button>
          </div>
        </div>
      )}
      <footer style={{ textAlign: 'center', padding: '2rem', color: '#64748b', fontSize: '0.9rem', marginTop: 'auto' }}>
        <p>Designed & Developed by <strong>BTK Creations</strong> 🚀</p>
        <p style={{ fontSize: '0.8rem', opacity: 0.7 }}>© {new Date().getFullYear()} Mobile Computing Prep</p>
      </footer>
      <ReloadPrompt />
    </div>
  )
}

export default App
