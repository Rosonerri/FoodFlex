import nodemailer from "nodemailer";
import { google } from "googleapis";
import path from "path"
import ejs from "ejs"
import env from "dotenv"
env.config();

const GOOGLE_ID = process.env.GOOGLE_ID

const GOOGLE_SECRET = process.env.GOOGLE_SECRET;
const GOOGLE_REDIRECT_URL = process.env.GOOLE_SECRET;
const GOOGLE_REFRESH = process.env.GOOGLE_REFRESH;

const oAuth = new google.auth.OAuth2(
  GOOGLE_ID,
  GOOGLE_SECRET,
  GOOGLE_REDIRECT_URL
);

oAuth.setCredentials({ refresh_token: GOOGLE_REFRESH });

const URL: string = `http://localhost:2244`;

export const sendMail = async (user: any,token:string) => {
  try {
    const accessToken: any = (await oAuth.getAccessToken()).token;

    const transport = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: "gabrieldotajayi4real@gmail.com",
        clientId: GOOGLE_ID,
        clientSecret: GOOGLE_SECRET,
        refreshToken: GOOGLE_REFRESH,
        accessToken,
      },
    });

    const getFile = path.join(__dirname, "../views/index.ejs");

    const data = {
      token: user.token,
      email: user.email,
      url: `${URL}/user-verify/${user._id}`,
    };

    const html = await ejs.renderFile(getFile, {data});

    const mailer = {
      from: "Homeland ❤❤ <gabrieldotajayi4real@gmail.com>",
      to: user.email,
      subject: "Account Opening",
      html: "<p>hello</p>"
    };

    await transport.sendMail(mailer).then(() => {
      console.log("send")
    }).catch((error)=>{
      console.log(error)
      console.log("Transport error")
    });
  } catch (error) {
    return error;
  }
};

export const sendResetPasswordEmail = async (user: any) => {
  try {
    const accessToken: any = (await oAuth.getAccessToken()).token;

    const transport = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: "gabrieldotajayi4real@gmail.com",
        clientSecret: GOOGLE_SECRET,
        clientId: GOOGLE_ID,
        refreshToken: GOOGLE_REFRESH,
        accessToken
      }
    });

    const getFile = path.join(__dirname, "../views/resetPassword.ejs");

    const data = {
      token: user.token,
      email: user.email,
      url: `${URL}/user-verify/${user._id}`,
    };

    const html = await ejs.renderFile(getFile, {data});

    const mailer = {
      from: "Homeland❤❤   <gabrieldotajayi4real@gmail.com>",
      to: user.email,
      subject: "Account Opening",
      html,
    };

    await transport.sendMail(mailer).then(() =>{
      console.log("send")
    })
  } catch (error) {
    return error
  }
}