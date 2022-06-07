import { Router } from 'express'
import { getTasks, createTask } from '../controllers/tasks.controller.js'

const router = Router()

router.get('/tasks', getTasks)
router.get('/tasks/:id')
router.post('/tasks', createTask)
router.put('/tasks/:id')
router.delete('/tasks/:id')

export default router
