import express from "express";
import "dotenv/config";

const app = express();

app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});
app.use(express.json());

app.get("/", (req, res) => {
  try {
    return res.status(200).json("My Week 2 API!");
  } catch (error) {
    console.log("something went wrong ", error);
    return res.status(500).json({
      message: "Internal server error",
    });
  }
});

app.post("/user", (req, res) => {
  try {
    const { name, email } = req.body;
    return res.status(200).json(`Hello, ${name}`);
  } catch (error) {
    console.log("something went wrong ", error);
    return res.status(500).json("Internal Sever Error");
  }
});

app.get("/user/:id", (req, res) => {
  try {
    const { id } = req.params;
    return res.status(200).json(`Hello ${id} profile`);
  } catch (error) {
    console.log("something went wrong ", error);
    return res.status(500).json("Internal Sever Error");
  }
});

app.use((req, res) => {
  return res.status(404).json({ success: false, message: "Not found" });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`running on http://localhost:${PORT}`);
});
