import UserModel from "../model/User";

export function registerUser(
  username: string,
  password: string,
  file_url?: string
) {
  return UserModel.find({ username }).then((users) => {
    if (users.length) {
      return Promise.reject({ message: "该用户已被注册" });
    }
    return UserModel.create({ username, password, avatar_url: file_url });
  });
}

export function loginUser(username: string, password: string) {
  return UserModel.findOne({ username, password });
}

export function getUser(id: string) {
  return UserModel.findById(id);
}
