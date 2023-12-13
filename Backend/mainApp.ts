import { Application, NextFunction, Request, Response } from "express";
import {mainError } from "./Error/mainError";
import { handleError } from "./Error/handleError";
import { HTTP } from "./utils/enums";
import auth from "./router/userRouter"




export const mainApp = (app:Application) =>{
    try {
        app.use("/api/v1", auth)
        app.get("/", (req:Request, res: Response) =>{
            try {
                return res.status(200).json({
                    message: "ApI connected"
                })
            } catch (error:any) {
                return res.status(404).json({
                    message: "Error",
                    data:error.message
                })
            }
        })
        app.all("*", (req: Request, res: Response, next: NextFunction) =>{
            next(new mainError({
                name: "Route Error",
                message: `This endPoint you entered ${req.originalUrl} is not supported`,
                status: HTTP.BAD,
                success: false,
            }))
        })
        app.use(handleError)
    } catch (error) {
        return error
    }
};