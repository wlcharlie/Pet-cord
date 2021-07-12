const petsController = {
  getPage: async (req, res, next) => {
    try {
      return res.render('pets')
    } catch (error) {
      next(error)
    }
  }
}

module.exports = petsController
