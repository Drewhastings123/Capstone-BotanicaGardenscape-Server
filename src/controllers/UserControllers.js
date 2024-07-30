const {
  registerQuery,
  loginQuery,
  findUserByTokenQuery,
  getUserQuery,
  getAllUsersQuery,
  deleteUserQuery,
  updateUserQuery,
} = require("../queries/UserQueries");

const { jwt } = require("../shared/shared");

const register = async (req, res, next) => {
  const returnInfo = await registerQuery(req.body);
  res.send(returnInfo);
};

const login = async (req, res, next) => {
  console.log(req.body);
  const returnInfo = await loginQuery(req.body);
  res.send(returnInfo);
};

const refresh = async (req, res, next) => {
  const returnInfo = await getUserQuery(req.user.id);
  res.send(returnInfo);
};

const findUserByToken = async (token) => {
  let id;

  try {
    const tokenSplit = token?.split(" ")[1];
    console.log("tokenSplit", tokenSplit);

    const payload = await jwt.verify(tokenSplit, process.env.WEB_TOKEN);

    id = payload.id;
    console.log("id from find user with token", id);
  } catch (ex) {
    const error = Error("Not Authorized to access this page");
    error.status = 401;
    throw error;
  }

  const userLoggedIn = await findUserByTokenQuery(id);
  return userLoggedIn;
};

const getAllUsers = async (req, res, next) => {
  console.log("getAllUsers");
  const returnUsers = await getAllUsersQuery();
  res.send(returnUsers);
};

const getUser = async (req, res, next) => {
  console.log("getUser");
  const returnUser = await getUserQuery(req.params.id);
  res.send(returnUser);
};

const deleteUser = async (req, res, next) => {
  if (req.user.id === req.params.id) {
    //TODO - if we have time make the error handling here
    // more elegant
    const error = Error("Very sorry, unable to delete yourself");
    error.status = 401;
    res.send(error);
  } else {
    const returnInfo = await deleteUserQuery(req.params.id);
    res.send(returnInfo);
  }
};

const updateUser = async (req, res, next) => {
  console.log(req.params);
  const returnInfo = await updateUserQuery(req.params.id, req.body);
  res.send(returnInfo);
};

module.exports = {
  findUserByToken,
  register,
  login,
  refresh,
  getUser,
  getAllUsers,
  deleteUser,
  updateUser,
};
