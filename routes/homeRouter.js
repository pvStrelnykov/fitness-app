import { Router } from 'express'
import homeController from '../controllers/homeController.js'

const router = new Router()

router.get('/', homeController.renderHomePage)
router.get('/add', homeController.renderAddPage)
router.post('/add', homeController.createTraining)
router.get('/edit/:id', homeController.renderEditPage)
router.post('/edit/:id', homeController.editTraining)
router.get('/delete/:id', homeController.deleteTraining)

export default router
