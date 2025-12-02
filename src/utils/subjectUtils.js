import { syllabus as mobileSyllabus } from '../data/syllabus'
import { quizzes as mobileQuizzes } from '../data/quiz'
import { modelPaper as modelPaper1 } from '../data/modelPaper'
import { modelPaper2 } from '../data/modelPaper2'
import { modelPaper3 } from '../data/modelPaper3'
import { modelPaper4 } from '../data/modelPaper4'
import { examTips as mobileTips } from '../data/examTips'
import { flashcards as mobileFlashcards } from '../data/flashcards'

import { electronicSensorsSyllabus } from '../data/electronicSensorsSyllabus'
import { electronicSensorsQuiz } from '../data/electronicSensorsQuiz'
import { electronicSensorsModelPaper } from '../data/electronicSensorsModelPaper'
import { electronicSensorsModelPaper2 } from '../data/electronicSensorsModelPaper2'
import { electronicSensorsModelPaper3 } from '../data/electronicSensorsModelPaper3'
import { electronicSensorsTips } from '../data/electronicSensorsTips'
import { electronicSensorsFlashcards } from '../data/electronicSensorsFlashcards'

import { ppleSyllabus } from '../data/ppleSyllabus'
import { ppleQuiz } from '../data/ppleQuiz'
import { ppleModelPaper } from '../data/ppleModelPaper'
import { ppleTips } from '../data/ppleTips'
import { ppleFlashcards } from '../data/ppleFlashcards'

import { mobileMindmaps, electronicSensorsMindmaps } from '../data/mindmaps'

export const getSubjectData = (subjectId) => {
    if (subjectId === 'sensors') {
        return {
            id: 'sensors',
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
    if (subjectId === 'pple') {
        return {
            id: 'pple',
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
        id: 'mobile',
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
