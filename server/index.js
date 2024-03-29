const express = require("express");
const cors = require("cors");
const routes = require("./routes/index");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", routes);

app.listen(PORT, () => {
  console.log(`Server started on ${PORT} port!`);
});
