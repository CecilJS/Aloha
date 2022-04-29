import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { name, email, message } = req.body;
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.email",
    port: 465,
    secure: true,
    auth: {
      user: process.env.user,
      pass: process.env.pass,
    },
  });

  try {
    const mailResponse = await transporter.sendMail({
      from: email,
      to: process.env.user,
      subject: "New Message from " + name,
      text: message,
      html: `<p>${message}</p>`,
    });
    console.log("Message sent: %s", mailResponse.messageId);
  } catch (error) {}

  res.status(200).json({ name: "John Doe" });
}
