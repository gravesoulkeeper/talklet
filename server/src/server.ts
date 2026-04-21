import { connectMongoDB } from "@/db";
import { PORT } from "@config";
import { httpServer } from "@/app";

(async (): Promise<void> => {
	try {
		await connectMongoDB();
		httpServer.listen(PORT, () => {
			console.log(`Server is listening on port ${PORT}`);
		});
	} catch (err) {
		console.log("Error occured while running the server!\n", err);
		process.exit(1);
	}
})();
