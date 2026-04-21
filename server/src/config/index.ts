import dotenv from "dotenv";
dotenv.config();

const MONGODB_URL = process.env.MONGODB_URL!;
const CORS_ORIGIN = process.env.CORS_ORIGIN!;
const PORT = process.env.PORT!;

export { MONGODB_URL, CORS_ORIGIN, PORT };
