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
    const { file } = req
    if (file) {
      const avatar = await imgur(file.path)
      req.body.avatar = avatar
    }
    console.log(req.body)
    try {
      const data = await usersService.putUser({
        id: req.params.id,
        update: req.body,
      })
      return res.json(data)
    } catch (err) {
      next(err)
    }
  },
}

module.exports = usersController
