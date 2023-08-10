import { Configuration, OpenAIApi } from "openai";
import dotenv from "dotenv";

import { addNewConversationToHistory } from "../utils/cacheConversations.js";

dotenv.config();

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY
});

const openai = new OpenAIApi(configuration);

const getSystemMessage = () => ({
    role: "system",
    content: "You are a helpful assistant."
});

export const conversationsHistory = new Map();

export const fetchResponse = async (question, id) => {
    addNewConversationToHistory(conversationsHistory, question, id);
    const message = [getSystemMessage(), ...conversationsHistory.get(id)];

    try {
        const completion = await openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: message
        });
        const answer = completion.data.choices[0].message;
        addNewConversationToHistory(conversationsHistory, answer, id);

        return answer;
    } catch (err) {
        console.log(err);
    }
};
