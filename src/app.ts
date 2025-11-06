import compression from "compression";
import cors from "cors";
import express from "express";
import { UserRouter } from "./modules/user/user.route";
import { PostRouter } from "./modules/post/post.route";
import { AuthRoute } from "./modules/auth/auth.route";

const app = express();

// Middleware
app.use(cors()); // Enables Cross-Origin Resource Sharing
app.use(compression()); // Compresses response bodies for faster delivery
app.use(express.json()); // Parse incoming JSON requests

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use("/api/v1/user",UserRouter)
app.use("/api/v1/post",PostRouter)
app.use("/api/v1/auth",AuthRoute)

// Default route for testing
app.get("/", (_req, res) => {
  res.send("API is running");
});


// 404 Handler
app.use((req, res, next) => {
  res.status(404).json({
    success: false,
    message: "Route Not Found",
  });
});

export default app;
