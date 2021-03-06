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

export const getTask = async (req, res) => {
  try {
    const { id } = req.params
    const task = await Task.findByPk(id)
    res.json(task)
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

export const updateTask = async (req, res) => {
  try {
    const { id } = req.params

    const task = await Task.findByPk(id)

    await task.set(req.body)
    task.save()

    res.json(task)
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    })
  }
}

export const deleteTask = async (req, res) => {
  try {
    const { id } = req.params

    const destroyed = await Task.destroy({
      where: {
        id,
      },
    })

    if (destroyed === 1) res.sendStatus(204)
    if (destroyed === 0) res.sendStatus(404)
  } catch (error) {
    res.sendStatus(500).json({ message: error.message })
  }
}
