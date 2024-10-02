const express = require("express");
const mongoose = require("mongoose");
var cors = require("cors");

const dotenv = require("dotenv");

// Get Routes
const authPath = require("./routes/auth");
const userPath = require("./routes/user");
const servicePath = require("./routes/service");
const portfolioPath = require("./routes/portfolio");
const CommentsService = require("./routes/commentsServices");
const CommentBlogPath = require("./routes/commentsBlogs");
const blogPath = require("./routes/Blog");
const favoritePath = require("./routes/favorite");

// dotenv configuration
dotenv.config();

const app = express();
const PORT = 4500;
app.use(cors());

// Connection to DataBase
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Connected to MongoDB..."))
  .catch((error) => console.log("Connection Failed to MongoDB", error));

// Apply Middlewares
app.use(express.json());

// Serve static files from the "uploads" directory
app.use("/uploads", express.static("uploads"));
// app.use(express.static(path.join(__dirname, "public")));

// Routes
app.use("/api/auth", authPath);
app.use("/api/user", userPath);
app.use("/api/service", servicePath);
app.use("/api/portfolio", portfolioPath);
app.use("/api/commentsService", CommentsService);
app.use("/api/commentsBlog", CommentBlogPath);
app.use("/api/blog", blogPath);
app.use("/api/favorites", favoritePath);

// Server Listener
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
