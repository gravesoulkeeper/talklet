import { Schema } from "mongoose";

const sessionSchema = new Schema(
	{
		device_info: { type: String, required: true },
		ip_address: { type: String, required: true },
		refresh_token: { type: String, required: true },
		is_revoked: { type: Boolean, default: false },
	},
	{ _id: false },
);

export const userSchema = new Schema(
	{
		username: {
			type: String,
			unique: true,
			trim: true,
			lowercase: true,
			minLength: 4,
			maxLength: 20,
			required: true,
		},
		display_name: {
			type: String,
			trim: true,
			minLength: 4,
			maxLength: 20,
			required: true,
		},
		avatar: {
			type: String,
			default: null,
		},
		email: {
			type: String,
			unique: true,
			trim: true,
			lowercase: true,
			required: true,
		},
		password: {
			type: String,
			minLength: 8,
			required: true,
		},
		session: {
			type: sessionSchema,
			required: true,
		},

		conversations: [
			{
				type: Schema.Types.ObjectId,
				ref: "Conversation",
			},
		],
		friends: [
			{
				type: Schema.Types.ObjectId,
				ref: "User",
				index: true,
			},
		],
		incoming_requests: [
			{
				type: Schema.Types.ObjectId,
				ref: "User",
				index: true,
			},
		],
		pending_requests: [
			{
				type: Schema.Types.ObjectId,
				ref: "User",
				index: true,
			},
		],
	},
	{
		timestamps: {
			createdAt: "created_at",
			updatedAt: "updated_at",
		},
	},
);
