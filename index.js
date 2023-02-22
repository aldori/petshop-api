import express from "express";
import winston from "winston";
import ownerRouter from "./routes/owner.routes.js";
import animalRouter from "./routes/animal.routes.js";
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import { swaggerDocument } from "./doc.js";

const { combine, timestamp, label, printf } = winston.format;
const myFormat = printf(({ level, message, label, timestamp }) => {
  return `${timestamp} [${label}] ${level}: ${message}`;
});
global.logger = winston.createLogger({
  level: "silly",
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: "pet-shop-api.log" }),
  ],
  format: combine(label({ label: "pet-shop-api" }), timestamp(), myFormat),
});

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.static("public"));
app.use("/doc", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use("/proprietario", ownerRouter);
app.use("/animal", animalRouter);

app.listen(3000, async () => {
    console.log("PETSHOP-API - Listen port:3000")
});
