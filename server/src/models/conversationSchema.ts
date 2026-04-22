import { Schema } from "mongoose";

export const conversationSchema = new Schema(
	{
		type: {
			type: String,
			enum: ["direct", "group"],
			default: "direct",
		},
		name: {
			type: String,
			required: function () {
				return this.type == "group";
			},
		},
		admin: {
			type: Schema.Types.ObjectId,
			ref: "User",
			required: function () {
				return this.type == "group";
			},
		},
		participants: {
			type: [
				{
					type: Schema.Types.ObjectId,
					ref: "User",
					index: true,
				},
			],
			required: true,
			validate: {
				validator: function (participants: any[]) {
					if (this.type === "direct") return participants.length === 2;
					if (this.type === "group") return participants.length >= 2;
					return true;
				},
				message: "Direct chat must have exactly 2 participants, group must have at least 2",
			},
		},
	},
	{
		timestamps: {
			createdAt: "created_at",
			updatedAt: "updated_at",
		},
	},
);
