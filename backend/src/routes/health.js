import express from "express";
import logger from "../utils/logger.js";
const healthRouter = express.Router();

healthRouter.get("/", (req, res) => {
  logger.info("Fetching api/health");
  const healthStatus = {
    status: "OK",
    timestamp: new Date().toISOString(),
  };
  res.json(healthStatus);
}
);

export default healthRouter;
