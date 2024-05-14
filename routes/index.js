import { Router } from 'express'
import homeRouter from './homeRouter.js'
import trainingRouter from './trainingRouter.js'
const router = new Router()

router.use('/', homeRouter)
router.use('/training', trainingRouter)

export default router
