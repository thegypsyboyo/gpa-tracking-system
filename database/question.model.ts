import { Schema, models, model, Document } from 'mongoose'

// Create a shape or type for the schema;

export interface IQuestion extends Document {
    // Reference another databse table by use of .ObjectId[];
    title: string;
    content: string;
    tags: Schema.Types.ObjectId[];
    views: number;
    upvotes: Schema.Types.ObjectId[];
    downvotes: Schema.Types.ObjectId[];
    author: Schema.Types.ObjectId[];
    answers: Schema.Types.ObjectId[];
}

// Now create the MODEL itself that follows the shape of IQuestion;

const QuestionSchema = new Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    tags: [{ type: Schema.Types.ObjectId, ref: 'Tag' }],
    views: { type: Number, default: 0 },
    upvotes: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    downvotes: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    answers: [{ type: Schema.Types.ObjectId, ref: 'Answer' }],
    author: { type: Schema.Types.ObjectId, ref: 'User' },
    createdAt: { type: Date, default: Date.now }
})

const Question = models.Question || model('Question', QuestionSchema)

export default Question;