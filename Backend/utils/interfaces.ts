import { HTTP } from "./enums";
import Document from "mongoose"

export interface iError{
    name: string,
    message: string,
    status: HTTP,
    success: boolean,
}
export interface iUser{
    email: string;
    password: string;
    token: string;
    verify: boolean;
    status: string;
    FoodCode: string;
}
 export interface iUserData extends iUser, Document{} 
