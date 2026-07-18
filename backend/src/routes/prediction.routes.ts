import { Router } from "express";
import {
  predictFraud,
  getPredictionHistory,
} from "../controllers/prediction.controller";

const router = Router();

router.post("/", predictFraud);

router.get("/", getPredictionHistory);

export default router;