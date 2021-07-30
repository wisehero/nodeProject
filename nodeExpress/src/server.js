import express from "express";
import logger from "morgan";
import morgan from "morgan";

const PORT = 8080;

const app = express();
const logger = morgan("dev");

app.use(logger);
app.use("/", rootRouter);
app.use("/users", userRouter);

app.listen(PORT, handleListening);
