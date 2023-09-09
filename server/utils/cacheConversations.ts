import { IConversation } from "../models/conversations.ts";

export const cacheConversations = (
    conversationsHistory: Map<string, { role: string; content: string }[]>,
    conversationFromDB: IConversation[],
    id: string
) => {
    if (!conversationsHistory.has(id)) {
        conversationsHistory.clear();
        const conversations = [];
        for (let i = 0; i < conversationFromDB.length; i++) {
            conversations.push({
                role: conversationFromDB[i].role,
                content: conversationFromDB[i].text
            });
        }
        conversationsHistory.set(id, conversations);
    }
};

export const addNewConversationToHistory = (
    conversationHistory: Map<string, { role: string; content: string }[]>,
    question: { content: string | null; role: string },
    id: string
) => {
    if (conversationHistory.has(id)) {
        conversationHistory
            ?.get(id)
            ?.push({ role: question.role, content: question.content ?? "" });
    }
};
