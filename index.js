import express from "express";

const app = express();
const PORT = process.env.PORT ?? 3000;

app.get("/", (req, res) => {
  res.json({ msg: "Hello from server from v1 and v2 " });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
