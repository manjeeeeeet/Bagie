const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const helmet = require("helmet");
const morgan = require("morgan");

const connectDB = require("./config/db");

const authRoutes = require("./routes/authRoutes");

dotenv.config();

connectDB();

const app = express();

/* =========================
   Security & Middleware
========================= */

app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  })
);

app.use(helmet());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

/* =========================
   Routes
========================= */

app.use("/api/auth", authRoutes);

/* =========================
   Health Check
========================= */

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Bagie API is running 👜",
  });
});

/* =========================
   404 Handler
========================= */

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

/* =========================
   Server
========================= */

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Bagie server running on port ${PORT}`);
});