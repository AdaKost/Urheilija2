require("dotenv").config(); // Ympäristömuuttuja

const express = require("express");
/*const cors = require("cors");
app.use(
  cors({
    origin: ["http://localhost:3000/", "http://localhost:3001/"],
  })
);*/

const app = express();

// Middleware
app.use(express.json()); // parse json bodies in the request object

// Redirect requests to endpoint starting with /urheilijat to urheilijatRoutes.js
app.use("/urheilijat", require("./routes/urheilijaRoutes"));

// Global Error Handler. IMPORTANT function params MUST start with err
app.use((err, req, res, next) => {
  console.log(err.stack);
  console.log(err.name);
  console.log(err.code);

  res.status(500).json({
    message: "Jotain on pielessä.",
  });
});

// Listen on pc port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));
