const AddToWishlist = async (
    productId: string,
    eventType: string
): Promise<any> => {
    const auth = localStorage.getItem("auth");
    const response = await fetch("http://localhost:3000/api/wishlist", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "x-access-token": auth!,
        },
        body: JSON.stringify({
            productId,
            eventType,
        }),
    });
    if (!response.ok) throw new Error("API Error: Add wishlist");
    const data = await response.json();
    return data;
};

const FetchWishlist = async (): Promise<any> => {
    const auth = localStorage.getItem("auth");
    const response = await fetch("http://localhost:3000/api/wishlist", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "x-access-token": auth!,
        },
    });
    if (!response.ok) throw new Error("API Error: Fetch wishlist");
    const data = await response.json();
    return data;
};

const DeleteFromWishlist = async (
    productId: string,
    eventType: string
): Promise<any> => {
    const auth = localStorage.getItem("auth");
    const response = await fetch("http://localhost:3000/api/wishlist", {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "x-access-token": auth!,
        },
        body: JSON.stringify({
            productId,
            eventType,
        }),
    });
    if (!response.ok) throw new Error("API Error: Delete wishlist");
    const data = await response.json();
    return data;
};

const DeleteAllFromWishlist = async (
): Promise<any> => {
    const auth = localStorage.getItem("auth");
    const response = await fetch("http://localhost:3000/api/wishlist/all", {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "x-access-token": auth!,
        }
    });
    if (!response.ok) throw new Error("API Error: Delete wishlist");
    const data = await response.json();
    return data;
};

export { AddToWishlist, FetchWishlist, DeleteFromWishlist , DeleteAllFromWishlist};
