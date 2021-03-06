import mongoose from "mongoose";

import app from "./server";

const PORT = process.env.PORT || 5000;

//connect db and start server
mongoose
  .connect(process.env.DATABASE_URL!)
  .then(() => {
    console.log("db connected");
    app.listen(PORT, () => console.log(`server running at PORT - ${PORT}`));
  })
  .catch((err) => console.error(err));
