const express = require("express");
const app = express();

app.use(express.json());

const subscribersRouter = require("./routes/subscribers");

app.use("/subscribers", subscribersRouter);

const port = process.env.PORT;

app.listen(port, () => console.log("server Started"));

process.on("SIGTERM", () => {
  console.log("SIGTERM received");
  server.close(() => {
    console.log("Process terminated");
  });
});
