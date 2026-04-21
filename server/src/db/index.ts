import mongoose from "mongoose";
import { MONGODB_URL } from "@config";

export async function connectMongoDB(): Promise<void> {
	try {
		const instance = await mongoose.connect(MONGODB_URL);
		console.log("Mongdob connection established :", instance.connection.host);
	} catch (err) {
		console.log("Mongodb connection failed!\n", err);
		process.exit(1);
	}
}
