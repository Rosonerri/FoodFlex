import { Schema, model } from "mongoose";
import  { iUserData }  from "../utils/interfaces";


const userModel =  new Schema <iUserData>({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
    },
    token: {type: String},
    FoodCode: 
    {type: String, unique: true},
    verify: {type: Boolean, default: false},
},
{timestamps: true}
);

export default model<iUserData>("Users", userModel)


