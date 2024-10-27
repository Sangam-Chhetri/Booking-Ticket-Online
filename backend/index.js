import cors from "cors";
import express from "express";

const app = express();
app.use(cors());

app.get("/getData", (req, res) => {
  res.send("App is Working");
});
app.listen(5000, () => console.log("app is running"));
