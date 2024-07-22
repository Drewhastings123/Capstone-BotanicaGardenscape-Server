const { bcrypt, prisma, jwt, uuid } = require("../shared/shared");

const registerQuery = async ({
  email,
  username,
  password,
  firstname,
  lastname,
  zone_id,
  user_role_id,
}) => {

  const hashPassword = password; // await bcrypt.hash(password, 10);

  const registerUser = await prisma.user.create({
    data: {
      id: uuid.v4(),
      email,
      password: hashPassword,
      firstname,
      lastname,
      zone_id,
      user_role_id,
    },
  });
  console.log(hashPassword);

  const token = jwt.sign(
    {
      id: registerUser.id,
    },
    process.env.WEB_TOKEN,
    {
      expiresIn: "1h",
    }
  );
  return { token, registerUser };
};

const loginQuery = async ({ username, password }) => {
  try {
    console.log(username);
    console.log(password);
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });
    // console.log(res);
    if (!user) {
      const error = Error("no user authorized");
      error.status = 401;
      throw error;
    }
    if ((await bcrypt.compare(password, user.password)) === false) {
      const error = Error("not authorized");
      error.status = 401;
      throw error;
    }
    console.log(user);
    const token = jwt.sign({ id: user.id }, process.env.WEB_TOKEN);

    return { token, user };
  } catch (error) {
    // next(error);
    console.log(error);
  }
};

const findUserByTokenQuery = async (id) => {
  console.log(id);
  try {
    let userTokenId;
    if (id)
      userTokenId = await prisma.user.findUnique({
        where: { id: id },
      });
    return userTokenId;
  } catch (error) {
    //next(error);

    console.log(error);
  }
};

const deleteUserQuery = async (id) => {
  try {
    const user = await prisma.user.delete({
      where: {
        id,
      },
    });

    if (!user) {
      return res.status(404).send("User not found.");
    }

    return user;
  } catch (error) {
    console.log(error);
  }
};

const getUserQuery = async (id) => {
  try {
    console.log("getUserQuery");
    const user = await prisma.user.findUnique({
      where: { id },
    });

    return { user };
  } catch (error) {
    // next(error);
    console.log(error);
  }
};

const getAllUsersQuery = async () => {
  try {
    console.log("getAllUsersQuery");
    const users = await prisma.user.findMany({
      where: {},
    });

    return { users };
  } catch (error) {
    // next(error);
    console.log(error);
  }
};

const updateUserQuery = async (id, body) => {
  // need separate reset functionality
  const hashPassword = await bcrypt.hash(body.password, 10);

  try {
    const updateUser = await prisma.user.update({
      where: {
        id,
      },
      data: {
        email: body.email,
        firstname: body.firstname,
        lastname: body.lastname,

        phone_number: body.phone_number,
        user_role_id: body.user_role_id,
        zone_id: body.zone_id,
      },
    });
    return updateUser;
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  registerQuery,
  findUserByTokenQuery,
  loginQuery,
  getUserQuery,
  getAllUsersQuery,
  deleteUserQuery,
  updateUserQuery,
};
