import "reflect-metadata";
import express, { NextFunction, Request, Response } from "express";
import "express-async-errors";

import "../container"
import { router } from "./routes";
import { AppDataSource } from "../typeorm/data-source";
import { AppError } from "../errors/AppError";

const app = express();

AppDataSource.initialize().then(() => console.log("Conectou ao banco")).catch(() => console.log("Erro ao conectar ao banco"))

app.use(express.json());
app.use(router);

app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({
        message: err.message,
      });
    }

    return response.status(500).json({
      status: "error",
      message: `Internal server error - ${err.message}`,
    });
  }
);

app.listen(3000, () => console.log('Server running on port 3000'));
