import express from "express";
import cookieParser from "cookie-parser";

const app = express();
const port = 3000;

app.use(cookieParser());

app.post("/api/login", (req, res) => {
  res.cookie("session", "loggedIn");
  res.send({
    success: true,
    description: "success",
  });
});

app.get("/api/get-something", (req, res) => {
  console.log(req.cookies.session);

  if (!req.cookies.session) {
    res.status(403).send({
      success: false,
      description: "Unauthorized",
    });
  }

  res.send({
    success: true,
    description: "success",
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
