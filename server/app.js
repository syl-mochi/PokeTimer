import express from "express";

const app = express();

app.get("/", (req, res) => {
    res.send("dis is where it starts :v");
});

export default app;
