import { useState, useEffect } from 'react'
import { syllabus as mobileSyllabus } from './data/syllabus'
import { quizzes as mobileQuizzes } from './data/quiz'
import { modelPaper as mobilePaper1 } from './data/modelPaper'
import { modelPaper2 as mobilePaper2 } from './data/modelPaper2'
import { modelPaper3 as mobilePaper3 } from './data/modelPaper3'
import { examTips as mobileTips } from './data/examTips'
import { flashcards as mobileFlashcards } from './data/flashcards'

import { electronicSensorsSyllabus } from './data/electronicSensorsSyllabus'
import { electronicSensorsQuiz } from './data/electronicSensorsQuiz'
import { electronicSensorsModelPaper } from './data/electronicSensorsModelPaper'
import { electronicSensorsTips } from './data/electronicSensorsTips'
import { electronicSensorsFlashcards } from './data/electronicSensorsFlashcards'

function App() {
  const [currentSubject, setCurrentSubject] = useState(null) // null (selection), 'mobile', 'sensors'

  // Data State (Derived from currentSubject)
  const getSubjectData = () => {
    if (currentSubject === 'sensors') {
      return {
        title: "Electronic Sensors",
        syllabus: electronicSensorsSyllabus,
        quizzes: electronicSensorsQuiz,
        papers: [electronicSensorsModelPaper], // Only 1 paper for now
        tips: electronicSensorsTips,
        flashcards: electronicSensorsFlashcards,
        progressKey: 'electronicSensorsProgress'
      }
    }
    // Default to Mobile Computing
    return {
      title: "Mobile Computing",
      syllabus: mobileSyllabus,
      quizzes: mobileQuizzes,
      papers: [mobilePaper1, mobilePaper2, mobilePaper3],
      tips: mobileTips,
      flashcards: mobileFlashcards,
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

  const [currentCardIndex, setCurrentCardIndex] = useState(0)
  const [isFlipped, setIsFlipped] = useState(false)
  const [shuffledCards, setShuffledCards] = useState([])

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

  const toggleNotes = (unitId) => {
    setExpandedUnit(expandedUnit === unitId ? null : unitId)
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

  if (!currentSubject) {
    return (
      <div className="container" style={{ textAlign: 'center', marginTop: '4rem' }}>
        <h1>Select Your Subject</h1>
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
        </div>
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
        <p className="subtitle">B.Tech Exam Preparation Companion</p>

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

              {expandedUnit === unit.unit && unit.notes ? (
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
                <button className={`btn ${expandedUnit === unit.unit ? 'btn-primary' : ''}`} onClick={() => unit.notes ? toggleNotes(unit.unit) : alert('Notes coming soon!')}>
                  {expandedUnit === unit.unit ? 'Hide Overview' : 'Unit Overview'}
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
        <main className="tips-container">
          <div className="tips-header">
            <h2>Exam Tips & Hacks</h2>
            <p>Master the art of writing exams with these strategic insights.</p>
          </div>

          <div className="tips-grid">
            {subjectData.tips.map((section, index) => (
              <div key={index} className="tip-section">
                <h3>{section.category}</h3>
                <div className="tips-list">
                  {section.tips.map((tip, tipIndex) => (
                    <div key={tipIndex} className="tip-card">
                      <h4>{tip.title}</h4>
                      <div dangerouslySetInnerHTML={{ __html: tip.content.replace(/\n/g, '<br/>').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
                    </div>
                  ))}
                </div>
              </div>
            ))}
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

      {/* Quiz Modal */}
      {quizMode && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="close-btn" onClick={closeQuiz}>&times;</button>
            {showScore ? (
              <div className="score-section">
                <h2>Quiz Completed!</h2>
                <p>Your Score: {score} / {quizMode === 'FINAL' ? finalExamQuestions.length : subjectData.quizzes[quizMode].length}</p>
                <button className="btn btn-primary" onClick={closeQuiz}>Close</button>
              </div>
            ) : (
              <div className="quiz-section">
                <h3>
                  {quizMode === 'FINAL' ? 'Final Exam' : `Unit ${quizMode} Quiz`}
                  - Question {currentQuestion + 1}/{quizMode === 'FINAL' ? finalExamQuestions.length : subjectData.quizzes[quizMode].length}
                </h3>
                {(() => {
                  const questions = quizMode === 'FINAL' ? finalExamQuestions : subjectData.quizzes[quizMode]
                  return (
                    <>
                      <p className="question-text">{questions[currentQuestion].question}</p>
                      <div className="options-grid">
                        {questions[currentQuestion].options.map((option, index) => (
                          <button key={index} className="option-btn" onClick={() => handleAnswer(index)}>
                            {option}
                          </button>
                        ))}
                      </div>
                    </>
                  )
                })()}
              </div>
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
    </div>
  )
}

export default App
