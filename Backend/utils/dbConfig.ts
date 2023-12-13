import { connect } from "mongoose";
import dotEnv from "dotenv";
dotEnv.config();

const URL: string  = "mongodb+srv://gabrieldotajayi4real:tobez007@cluster0.ao76l4h.mongodb.net/authFlowDB2?retryWrites=true&w=majority";

export const dbConfig = async () => {
  try {
    await connect(process.env.DATABASE_STRING!).then(() => {
      console.log("DB connected...🚀🚀🚀!");
    });
  } catch (error) {
    return error;
  }
};
