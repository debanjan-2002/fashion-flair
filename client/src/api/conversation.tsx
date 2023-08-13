const AddConversation = async (
    text: string,
    role: string = "user"
): Promise<any> => {
    const auth = localStorage.getItem("auth");
    const response = await fetch("http://localhost:3000/api/conversations", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "x-access-token": auth!,
        },
        body: JSON.stringify({
            text,
            role,
        }),
    });
    if (!response.ok) throw new Error("API Error: Add conversation");
    const data = await response.json();
    return data;
};

const FetchConversation = async (): Promise<any> => {
    const auth = localStorage.getItem("auth");
    const response = await fetch("http://localhost:3000/api/conversations", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "x-access-token": auth!,
        },
    });
    if (!response.ok) throw new Error("API Error: Fetch conversation");
    const data = await response.json();
    return data;
};

const DeleteConversation = async (): Promise<any> => {
    const auth = localStorage.getItem("auth");
    const response = await fetch("http://localhost:3000/api/conversations", {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "x-access-token": auth!,
        },
    });
    if (!response.ok) throw new Error("API Error: Delete conversation");
    const data = await response.json();
    return data;
};

export { AddConversation, FetchConversation, DeleteConversation };
