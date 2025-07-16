const UserModel = require('../../models/UserModel')
const UserService = {
  login: async ({ username, password }) => {
    return UserModel.find({
      username,
      password
    })
  },
  upload: async ({ _id, username, introduction, gender, avatar }) => {
    if (avatar) {
      return UserModel.updateOne({ _id }, {
        username, introduction, gender, avatar
      })
    } else {
      return UserModel.updateOne({ _id }, {
        username, introduction, gender
      })
    }
  },
  add: async ({ username, introduction, gender, avatar, password, role, state, createTime }) => {
    return UserModel.create({
      username,
      password,
      introduction,
      gender,
      avatar,
      role,
      state,
      createTime
    })
  },
  getlist: async ({ id }) => {
    return id ? UserModel.find({ _id: id }, ["username", "introduction", "gender", "role", "password", "state", "createTime"]) : UserModel.find({}, ["username", "introduction", "gender", "role", "avatar", "state", "state", "createTime"])

  },
  dellist: async ({ _id }) => {
    return UserModel.deleteOne({ _id })
  },
  putlist: async (body) => {
    return UserModel.updateOne({ _id: body._id }, body)
  },
  delManylist: async (body) => {
    return UserModel.deleteMany({ _id: { $in: body._ids } })
  },
  editUser: async ({
    _id,
    username,
    introduction,
    gender,
    role,
    state,
    avatar
  }) => {
    if (avatar) {
      return UserModel.updateOne(
        { _id },
        {
          username,
          introduction,
          gender,
          role,
          state,
          avatar
        }
      );
    } else {
      return UserModel.updateOne(
        { _id },
        {
          username,
          introduction,
          gender,
          role,
          state
        }
      );
    }
  }

}

module.exports = UserService