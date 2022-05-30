import { Project } from '../models/Project.js'

export const getProjects = async (req, res) => {
  try {
    const projects = await Project.findAll()
    res.json(projects)
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    })
  }
}

export const createProject = async (req, res) => {
  try {
    const { name, priority, description } = req.body

    const project = await Project.create({
      name,
      priority,
      description,
    })

    console.log(project)

    res.json(project)
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    })
  }
}

export const updateProject = async (req, res) => {
  try {
    const { id } = req.params
    const { name, priority, description } = req.body

    const project = await Project.findByPk(id)

    await project.update({
      name,
      priority,
      description,
    })

    res.json(project)
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    })
  }
}

export const deleteProject = async (req, res) => {
  try {
    const { id } = req.params
    const deleted = await Project.destroy({
      where: {
        id,
      },
    })

    res.sendStatus(204)
  } catch (error) {
    res.sendStatus(500).json({ error: error.message })
  }
}
