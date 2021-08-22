const User = require("../models/user")

const usersService = {
  getUser: async ({ UID }) => {
    return await User.findOne({ UID }).lean()
  },

  addUser: async data => {
    return await User.create(data)
    // return { status: "success", message: "a new user data has created" }
  },

  updateUser: async () => {},

  deleteUser: async () => {},
}

module.exports = usersService
