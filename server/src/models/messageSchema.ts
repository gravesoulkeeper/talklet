import { Schema } from "mongoose";

const mediaSchema = new Schema(
	{
		url: {
			type: String,
			required: true,
		},
		resource_type: {
			type: String,
			enum: ["image", "video", "file", "voice"],
			required: true,
		},
		format: {
			type: String,
			required: true,
		},
	},
	{ _id: false },
);

export const messageSchema = new Schema(
	{
		conversation_id: {
			type: Schema.Types.ObjectId,
			ref: "Conversation",
			required: true,
			index: true,
		},
		sender_id: {
			type: Schema.Types.ObjectId,
			ref: "User",
			required: true,
			index: true,
		},
		content: {
			type: String,
			default: null,
		},
		media: {
			type: [mediaSchema],
			default: [],
		},
		read_by: [
			{
				type: Schema.Types.ObjectId,
				ref: "User",
				index: true,
			},
		],
		is_deleted: {
			type: Boolean,
			default: false,
		},
	},
	{
		timestamps: {
			createdAt: "created_at",
			updatedAt: "updated_at",
		},
	},
);
