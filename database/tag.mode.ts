import { Schema, models, model, Document } from 'mongoose'

// Create a shape or type for the schema;

export interface ITag extends Document {
    // Reference another databse table by use of .ObjectId[];
    name: string;
    description: string;
    questions: Schema.Types.ObjectId[];
    followers: Schema.Types.ObjectId[];
    createdOn: Date;
}

// Now create the MODEL itself that follows the shape of ITag;

const TagSchema = new Schema({
    name: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    questions: [{ type: Schema.Types.ObjectId, required: true }],
    followers: [{ type: Schema.Types.ObjectId, required: true }],
    createdOn: { type: Date, default: Date.now },
})

const Tag = models.Tag || model('Tag', TagSchema)

export default Tag;