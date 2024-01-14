"use server"

import Question from "@/database/question.model";
import { connectToDatabase } from "../mongoose"
import Tag from "@/database/tag.mode";
import { CreateQuestionParams, GetQuestionsParams } from "./shared.types";
import User from "@/database/user.model";
import { revalidatePath } from "next/cache";

export async function getQuestions(params: GetQuestionsParams) {
    try {
        connectToDatabase();

        const questions = await Question.find({})
            .populate({ path: 'tags', model: Tag })
            .populate({ path: 'author', model: User })
            .sort({ createdAt: -1 })

        return { questions };
    } catch (error) {
        console.log(error);
        throw (error);
    }
}

export async function createQuestion(params: CreateQuestionParams) {
    // eslint-disable-next-line no-empty
    try {
        connectToDatabase();

        // accept some params from the frontend.
        const { title, tags, author, content, path } = params;

        //  Create the Question

        const question = await Question.create({
            title,
            content,
            author,
        });

        // a different way to create a tag;
        const tagDocuments = [];

        //  Create the tags or get them if they already exist

        for (const tag of tags) {
            const existinngTag = await Tag.findOneAndUpdate(
                { name: { $regex: new RegExp(`^${tag}$`, "i") } }, // finnds your specific tag 
                { $setOnInsert: { name: tag }, $push: { question: question._id } },
                { upsert: true, new: true }
            )

            tagDocuments.push(existinngTag._id)
        }

        await Question.findByIdAndUpdate(question._id, {
            $push: { tags: { $each: tagDocuments } }
        })

        revalidatePath(path)
    } catch (error) {

    }
}