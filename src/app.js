import express from 'express'
import projectRoutes from './routes/projects.routes.js'

const app = express()

app.use(projectRoutes)

export default app
