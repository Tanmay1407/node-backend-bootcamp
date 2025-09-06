import {createLogger, format, transports} from "winston";
const {combine, timestamp, json, colorize} = format;

// Custom format for console logging with colors
const consoleLogFormat = format.combine(
  format.colorize(),
  format.printf(({ level, message, timestamp }) => {
    return `${level}: ${message}`;
  })
);

// Create a Winston logger
const logger = createLogger({
  level: "info",
  format: combine(timestamp()), // base format, no color
  transports: [
    new transports.Console({
      format: consoleLogFormat,
    }),
    new transports.File({
      filename: "app.log",
      format: format.combine(
        format.timestamp(),
        format.json()
      ),
    }),
  ],
});

export default logger;