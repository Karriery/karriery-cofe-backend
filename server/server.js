const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const app = express();

const cors = require("cors");
const bodyParser = require("body-parser");
const multer = require("multer");

const upload = multer({ dest: "uploads" });
const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: "whah",
  api_key: "967934588341829",
  api_secret: "5tGQ-PeH3P4psCWHmTkZfzbsEsc",
});
const authAdminRout = require("./auth/admin/adminAuthRouter/router.js");
const authEmployeRout = require("./auth/employe/employeAuthRouter/router.js");
const adminRouter = require("./router/adminRouter.js");
const employeRouter = require("./router/employeRouter.js");
const productRouter = require("./router/productRouter.js");
const tableRouter = require("./router/tableRouter.js");
const orderRouter = require("./router/orderRouter.js");

const PORT = process.env.PORT || 3001;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "*",
  })
);
const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  console.log("A user connected");
  io.emit("message", "ahahahah");

  // Handle events from connected clients here.
  socket.on("order", (message) => {
    console.log("Received message:", message);
    // Broadcast the message to all connected clients.
    io.emit("neworder", message);
  });

  socket.on("disconnect", () => {
    console.log("A user disconnected");
  });
});

app.use("/auth/admin", authAdminRout);
app.use("/auth/employe", authEmployeRout);
app.use("/admin", adminRouter);
app.use("/employe", employeRouter);
app.use("/product", productRouter);
app.use("/order", orderRouter);
app.use("/table", tableRouter);
app.use("/static", express.static("public"));

app.get("/", (req, res) => {
  res.send("auto deploy test");
});

app.post("/upload", upload.any(0), (req, res) => {
  let image = req.files[0].path;
  try {
    cloudinary.uploader.upload(image, (error, result) => {
      error && res.send({ status: false, msg: error });
      res.send({ status: true, msg: result });
    });
  } catch (err) {
    res.status(401).json(err);
  }
});

server.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
