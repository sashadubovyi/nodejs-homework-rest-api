import nodemailer from "nodemailer";
import "dotenv/config";

const { UKR_NET_EMAIL, UKR_NET_PASSWORD } = process.env;

const nodemailerConfig = {
  host: "smtp.ukr.net",
  port: 465,
  secure: true,
  auth: {
    user: UKR_NET_EMAIL,
    pass: UKR_NET_PASSWORD,
  },
};

const transport = nodemailer.createTransport(nodemailerConfig);

const sendEmail = async (data) => {
  const email = { ...data, from: UKR_NET_EMAIL };
  await transport.sendMail(email);
  return true;
};

const email = {
  from: UKR_NET_EMAIL,
  to: "nehinac606@v1zw.com",
  subject: "Link to me GitHub page",
  html: "<strong>Hi there, it's a email with link on my GitHub page</strong><br><p>If you don't want to view my page, don't open it</p><br><a href=\"https://github.com/sashadubovyi\">Link to GitHub</a>",
};

export default sendEmail;
