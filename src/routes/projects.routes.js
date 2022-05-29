import { Router } from 'express'
import {
  getProjects,
  createProject,
} from '../controllers/projects.controllers.js'

const router = Router()

router.get('/projects', getProjects)
router.get('/projects/:id')
router.post('/projects', createProject)
router.put('/projects/:id')
router.delete('/projects/:id')

export default router
