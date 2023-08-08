import express from "express";

const app = express();

app.get("/api/test", (req, res) => {
    res.json({ message: "Success" });
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Connected to PORT ${PORT}`));
