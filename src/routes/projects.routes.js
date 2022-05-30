import { Router } from 'express'
import {
  getProjects,
  createProject,
  updateProject,
  deleteProject,
} from '../controllers/projects.controllers.js'

const router = Router()

router.get('/projects', getProjects)
router.get('/projects/:id')
router.post('/projects', createProject)
router.put('/projects/:id', updateProject)
router.delete('/projects/:id', deleteProject)

export default router
