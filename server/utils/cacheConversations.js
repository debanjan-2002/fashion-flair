export const cacheConversations = (
    conversationsHistory,
    conversationFromDB,
    id
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
    conversationHistory,
    question,
    id
) => {
    if (conversationHistory.has(id)) {
        conversationHistory
            .get(id)
            .push({ role: question.role, content: question.content });
    }
};
