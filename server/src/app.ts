import type { CorsOptions } from "cors";
import { CORS_ORIGIN } from "./config";
import { createServer } from "http";
import { Server } from "socket.io";
import express from "express";
import cors from "cors";

const corsOption: CorsOptions = {
	origin: CORS_ORIGIN,
	methods: ["GET", "POST", "PATCH", "PUT", "DELETE"],
	credentials: true,
};

const app = express();
export const httpServer = createServer(app);
export const io = new Server(httpServer, { cors: corsOption });

app.use(cors(corsOption));
app.use(express.json({ limit: "100kb" }));
