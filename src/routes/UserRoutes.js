const { routes, app } = require("../shared/shared");

const {
  findUserByToken,
  register,
  login,
  refresh,
  getAllUsers,
  getUser,
  deleteUser,
  updateUser,
} = require("../controllers/UserControllers");

const isLoggedIn = async (req, res, next) => {
  try {
    req.user = await findUserByToken(req.headers.authorization);
    next();
  } catch (error) {
    next(error);
  }
};

const isLoggedInAdmin = async (req, res, next) => {
    //TODO - is the user logged in, if yes are they admin 
    // - should use the isLoggedIn function rather than duplicate it
    try {
        req.user = await findUserByToken(req.headers.authorization);
        next();
      } catch (error) {
        next(error);
      }
    
  };


// create a user with info and password, "login"
// - return token and user info
routes.post("/register", register);

// "login" a user using username and password
// - return token and user info
routes.post("/login", login);

// "refresh" get a user who is already logged in with the token
routes.get("/refresh", isLoggedIn, refresh);

// update a particular user based on id - only their top tier of information
routes.put("/users/:id", isLoggedIn, updateUser);

// Admin Functions //

// delete a particular user and their garden and plants
routes.delete("/delete/:id", isLoggedInAdmin, deleteUser);

// get all users in the db - only their top tier of information
routes.get("/users", isLoggedInAdmin, getAllUsers);

// get a particular user in the db - only their top tier of information
routes.get("/user/:id", isLoggedInAdmin, getUser);

module.exports = routes;
