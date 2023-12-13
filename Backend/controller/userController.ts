import {Request, Response} from "express"
import {HTTP, Food} from "../utils/enums"
import crypto from "crypto"
import bcrypt from "bcrypt"
import  userModel  from "../model/userModel"
import jwt from "jsonwebtoken"
import { sendMail, sendResetPasswordEmail } from "../utils/emails"


export const createUser = async(req:Request, res:Response) =>{
    try {
        const {email, password} = req.body

        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        const token = crypto.randomBytes(3).toString("hex")
        const foodCode = crypto.randomBytes(4).toString("hex")

        const user = await userModel.create({ email, password: hashedPassword, foodCode, token});

        sendMail(user,token).then(()=>{
            console.log("An email has been sent")
        }) 
        return res.status(HTTP.CREATED).json({
            message: "User Created Successfully",
            data: user
        })
    } catch (error: any) {
        return res.status(HTTP.CREATED).json({
            mesaage: "Error creating user"
        });
    }
};


export const createAdmin = async(req:Request, res:Response) =>{
    try {
        const {email, password} = req.body

        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        const token = crypto.randomBytes(3).toString("hex")
        const schoolCode = crypto.randomBytes(4).toString("hex")

        const user = await userModel.create({ email, password: hashedPassword, schoolCode, token, status: Food.Admin});


        return res.status(HTTP.CREATED).json({
            message: "Admin Created Successfully",
            data: user
        })
    } catch (error: any) {
        return res.status(HTTP.CREATED).json({
            mesaage: "Error creating Admin"
        });
    }
};

export const createClient = async(req:Request, res:Response) =>{
    try {
        const {email, password} = req.body

        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        const token = crypto.randomBytes(3).toString("hex")
        const schoolCode = crypto.randomBytes(4).toString("hex")

        const user = await userModel.create({ email, password: hashedPassword, schoolCode, token, status: Food.Client});


        return res.status(HTTP.CREATED).json({
            message: "Client Created Successfully",
            data: user
        })
    } catch (error: any) {
        return res.status(HTTP.CREATED).json({
            mesaage: "Error creating Client"
        });
    }
};

export const createDispatcher = async(req:Request, res:Response) =>{
    try {
        const {email, password} = req.body

        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        const token = crypto.randomBytes(3).toString("hex")
        const schoolCode = crypto.randomBytes(4).toString("hex")

        const user = await userModel.create({ email, password: hashedPassword, schoolCode, token, status: Food.Dispatcher});


        return res.status(HTTP.CREATED).json({
            message: "Dispatcher Created Successfully",
            data: user
        })
        
    } catch (error: any) {
        return res.status(HTTP.CREATED).json({
            mesaage: "Error creating Dispatcher"
        });
    }
};

export const createVendor = async(req:Request, res:Response) =>{
    try {
        const {email, password} = req.body

        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        const token = crypto.randomBytes(3).toString("hex")
        const schoolCode = crypto.randomBytes(4).toString("hex")

        const user = await userModel.create({ email, password: hashedPassword, schoolCode, token, status: Food.Vendor});


        return res.status(HTTP.CREATED).json({
            message: "Vendor Created Successfully",
            data: user
        })
    } catch (error: any) {
        return res.status(HTTP.CREATED).json({
            mesaage: "Error creating Vendor"
        });
    }
};

export const verifyUser = async (req: Request, res:Response) =>{
    try {
        const {token} = req.body;
        const getUser = await userModel.findOne({token});
        if (getUser){
            await userModel.findByIdAndUpdate(
                getUser._id,
                {
                    token: "",
                    verify: true,
                },
                {new: true}
            );

            return res.status(HTTP.OK).json({
                message: "User Has Been Verified"
            })
        } else {
            return res.status(HTTP.BAD).json({
                message: "No User Found"
            })
        }
    } catch (error) {
        return res.status(HTTP.BAD).json({
            message: "Error Creating User"
        });
    }
};

export const signInUser = async (req: Request, res: Response) =>{
    try {
        const { email, password} = req.body;
        const getUser = await userModel.findOne({ email });

        if (getUser){
            const passwordCheck = await bcrypt.compare(password, getUser.password);

            if(passwordCheck){
                if (getUser.verify && getUser.token === ""){
                    const token  = jwt.sign(
                        {
                            id: getUser._id,
                            status: getUser.status,
                        },
                        "justasecret",
                        {expiresIn: "2d"}
                    );

                    return res.status(HTTP.OK).json({
                        message: "User Has Been Verified",
                        data: token,
                    });
                } else {
                    return res.status(HTTP.BAD).json({
                        message: "User Hasn't Been Verified",
                    });
                }
            } else {
                return res.status(HTTP.BAD).json({
                    message: "password Error",
                });
            }
        } else {
            return res.status(HTTP.BAD).json({
                message: "No User Found"
            })
        }
    } catch (error: any) {
        return res.status(HTTP.BAD).json({
            message: "Error Creating user"
        });
    }
};

export const resetUserPassword = async (req: Request, res: Response) =>{
    try {
        const {email} = req.body
        const getUser = await userModel.findOne({ email });
        if(getUser){
            const token = crypto.randomBytes(16).toString("hex");

            const checkUser = await userModel.findByIdAndUpdate(
                getUser._id,
                {
                    token,
                },
                { new: true}
            );

            sendResetPasswordEmail(checkUser);

            return res.status(HTTP.OK).json({
                message: "An email has been sent to confirm your request",
            });
        } else{
            return res.status(HTTP.BAD).json({
                message: "No user Found"
            })
        }
    } catch (error) {
        return res.status(HTTP.BAD).json({
            message: "Error Creating User"
        });
    }
};

export const changeUserPassword = async (req:Request, res: Response) =>{
    try {
        const {password}  = req.body
        const {userId} = req.params;

        const getUser = await userModel.findById(userId);
        const salt = await bcrypt.genSalt(10);

        const hashedPassword = await bcrypt.hash(password, salt);

        if (getUser) {
            if (getUser.token !== "" && getUser.verify){
                await userModel.findByIdAndUpdate(
                    getUser._id,
                    {
                        password: hashedPassword,
                        token: "",
                    },
                    { new: true}
                );

                return res.status(HTTP.OK).json({
                    message: "Your Password has been changed",
                });
            } else {
                return res.status(HTTP.BAD).json({
                    message: "Pls go and Verify your Account"
                });
            }
        } else {
            return res.status(HTTP.BAD).json({
                message: "No User Found",
            })
        }
    } catch (error: any) {
        return res.status(HTTP.BAD).json({
            message: "Error Creating User"
        });
    }
};

export const getAllUsers = async (req: any, res:Response) =>{
    try {
        const getUsers = await userModel.find();
        const data = req.data;

        console.log(data)

        if (data.status === "admin") {
            return res.status(HTTP.OK).json({
                message: "Users found",
                data: getUsers,
            });
        } else {
            return res.status(HTTP.BAD).json({
                message: "You don't have the pass for this"
            })
        }
    } catch (error: any) {
        return res.status(HTTP.BAD).json({
            message: "Error getting Users"
        })
    }
}

export const getUser = async (req: Request, res: Response) =>{
    try {
        const getUser = await userModel.find();

        return res.status(HTTP.OK).json({
            message: "User Found",
            data: getUser,
        });
    } catch (error) {
        return res.status(HTTP.BAD).json({
            message: "Error Fetching User"
        });
    }
}

export const deleteUser = async (req: Request, res: Response) =>{
    try {
        const {userID} = req.params
        const removeUser = await userModel.findByIdAndDelete(userID);

        return res.status(HTTP.OK).json({
            message: "User deleted",
            data: removeUser,
        });
    } catch (error) {
        return res.status(HTTP.BAD).json({
            message: "Error removing User"
        });
    }
}

export const logOutUser = async (req: any, res:Response) =>{
    try {
        req.session.destroy();

        return res.status(HTTP.OK).json({
            message: "User has been Logged Out"
        })
    } catch (error) {
        return res.status(HTTP.BAD).json({
            message: "Error Creating User"
        });
    }
};