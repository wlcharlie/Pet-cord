const petsService = require('../service/petsService')

const petsController = {
  getPets: async (req, res, next) => {
    try {
      const data = await petsService.getPets()
      return res.render('pets', { data })
    } catch (error) {
      next(error)
    }
  }
}

module.exports = petsController
