const usersService = require("../../service/usersService")
const imgur = require("../../utils/imgur")

const usersController = {
  getUser: async (req, res, next) => {
    try {
      const data = await usersService(req.body)
      return res.json(data)
    } catch (err) {
      next(err)
    }
  },

  addUser: async (req, res, next) => {
    try {
      const data = await usersService(req.body)
      return res.json(data)
    } catch (err) {
      next(err)
    }
  },
}

module.exports = usersController
