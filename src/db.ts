import mongoose from "mongoose";

const connectionString: string =
  "mongodb+srv://EdenMarom:Aa123456@eden-picmt.mongodb.net/test?retryWrites=true&w=majority";
const connectionOptions: object = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  socketTimeoutMS: 0,
  keepAlive: true,
};
export let db: mongoose.Connection;

export const initDb = () => {
  db = mongoose.connection;

  db.on("connected", () => {
    console.log("DB connected!");
  }),
    db.on("disconnected", () => {
      console.log("DB disconnected! Trying to reconnect...");
      mongoose.connect(connectionString, connectionOptions);
    });
  db.on("error", (error) => {
    console.log("DB connection error : " + error);
  });

  mongoose
    .connect(connectionString, connectionOptions)
    .catch((error) => console.log("DB connection error : " + error));
};
