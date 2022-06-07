import { Task } from '../models/Task.js'

export const getTasks = async (req, res) => {
  try {
    const tasks = await Task.findAll()
    res.json(tasks)
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    })
  }
}

export const createTask = async (req, res) => {
  try {
    const { name, done, projectId } = req.body

    const task = await Task.create({
      name,
      done,
      projectId,
    })

    res.json(task)
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    })
  }
}
