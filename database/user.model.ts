import { Schema, models, model, Document } from 'mongoose'

// Create a shape or type for the schema;

export interface IUser extends Document {
    // Reference another databse table by use of .ObjectId[];
    clerkId: string;
    name: string;
    username: string;
    email: string;
    password: string;
    bio?: string;
    picture: string;
    location?: string;
    portfolioWebsite?: string;
    reputation?: number;
    saved: Schema.Types.ObjectId[];
    joinedAt: Date;

}

// Now create the MODEL itself that follows the shape of IUser;

const UserSchema = new Schema({
    clerkId: { type: String, require: true },
    name: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String },
    bio: { type: String },
    picture: { type: String, require: true },
    location: { type: String },
    portfolioWebsite: { type: String },
    reputation: { type: Number, default: 0 },
    saved: [{ type: Schema.Types.ObjectId, ref: 'Question' }],
    joinedAt: { type: Date, default: Date.now },
})

const User = models.User || model('User', UserSchema)

export default User;