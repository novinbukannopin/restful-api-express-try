import winston from "winston"

export const logger = winston.createLogger({
    level: "info",
    format: winston.format.json(),
    transport: [
        new winston.transport.Console({})
    ]
})