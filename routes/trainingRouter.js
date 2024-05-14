import { Router } from 'express'
import trainingController from '../controllers/trainingController.js'
const router = new Router();

router.get('/:id', trainingController.renderTrainingPage)
router.get('/:trainingId/exercise/:exerciseId/edit', trainingController.renderEditPage)
router.post('/:trainingId/exercise/:exerciseId/edit', trainingController.editExercise)
router.get('/:trainingId/exercise/:exerciseId/delete', trainingController.deleteExercise)


export default router;
