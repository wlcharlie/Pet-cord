const usersService = require("../../service/usersService")
const imgur = require("../../utils/imgur")

const usersController = {
  getUser: async (req, res, next) => {
    try {
      const data = await usersService.getUser(req.params)
      return res.json(data)
    } catch (err) {
      next(err)
    }
  },

  addUser: async (req, res, next) => {
    try {
      const data = await usersService.addUser(req.body)
      return res.json(data)
    } catch (err) {
      next(err)
    }
  },

  putUser: async (req, res, next) => {
    try {
      const data = await usersService.putUser({
        UID: req.params.UID,
        update: req.body,
      })
      return res.json(data)
    } catch (err) {
      next(err)
    }
  },
}

module.exports = usersController
