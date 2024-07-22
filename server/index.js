const { app } = require("../src/shared/shared");

// secure access middleware settings
const cors = require("cors");
app.use(
  cors({
    origin: "*",
  })
);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`I am listening on port number ${PORT}`);
});

const userRoutes = require("../src/routes/UserRoutes");
//const gardenRoutes = require("../src/routes/GardenRoutes");
//const cartRoutes = require("../src/routes/CartRoutes");

app.use("/api/botanica/gardenscape", userRoutes);
//app.use("/api/botanica/gardenscape", gardenRoutes);
//app.use("/api/botanica/gardenscape", cartRoutes);
