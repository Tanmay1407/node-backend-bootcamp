import express from "express"
import logger from "./logger.js";
import morgan from "morgan";

const morganFormat = ":method :url :status :response-time ms";


const app = express()
app.use(
  morgan(morganFormat, {
    stream: {
      write: (message) => {
        const logObject = {
          method: message.split(" ")[0],
          url: message.split(" ")[1],
          status: message.split(" ")[2],
          responseTime: message.split(" ")[3],
        };
        logger.info(JSON.stringify(logObject));
      },
    },
  })
);

app.get("/", (req,res) => {
    res.send("Hello! from Express Server")
})
app.get("/namaste", (req,res) => {
    res.send("Namaste! from Express Server")
})


const PORT = 3000
app.listen(PORT, () => {
    logger.info(`Server running at PORT: ${PORT}`)
})