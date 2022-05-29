import { Project } from '../models/Project.js'

export const getProjects = (req, res) => {
  res.send('getting projects')
}

export const createProject = async (req, res) => {
  const { name, priority, description } = req.body

  const project = await Project.create({
    name,
    priority,
    description,
  })

  console.log(project)

  res.send(project)
}
