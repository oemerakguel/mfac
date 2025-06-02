import express from "express";
import cors from "cors";
import itemsRouter from "./routes/items.js";
import healthRouter from "./routes/health.js";
import shutdown from "./utils/shutdown.js";
import logger from "./utils/logger.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.use("/api/items", itemsRouter);
// Feature Flag: health
if (process.env.FEATURE_HEALTH === "true") {
  logger.info("Health check feature is enabled");
  app.use("/api/health", healthRouter);
}

if (process.env.DB_HOST !== "") {
  logger.info("--------------------------");
  logger.info("DB Configuration:");
  logger.info(`DB Host: ${process.env.DB_HOST}`);
  logger.info(`DB User: ${process.env.DB_USER}`);
  logger.info(`DB Password: ${process.env.DB_PASSWORD}`);
  logger.info(`DB PORT: ${process.env.PORT}`);
  logger.info(`DB NAME: ${process.env.DB_NAME}`);
  logger.info("--------------------------");
}
// delay server start for 30 sec
setTimeout(() => {
  const server = app.listen(PORT, () => {
    logger.info(`Server is running on http://localhost:${PORT}`);
  });
}, 30000);

// Gracefull shutdown
// SIGINT = Signal Interrupt (Ctrl+C)
// SIGTERM = Signal Terminate (kill command)
process.on("SIGINT", () => shutdown(server));
process.on("SIGTERM", () => shutdown(server));
