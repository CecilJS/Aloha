import type { NextApiRequest, NextApiResponse } from "next";
const postmark = require("postmark");

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { name, email, message } = req.body;

  const serverToken = process.env.NEXT_PUBLIC_POSTMARK_TOKEN;
  const client = new postmark.ServerClient(serverToken);

  client
    .sendEmail({
      From: process.env.NEXT_PUBLIC_EMAIL,
      To: email,
      Subject: `Message from ${name}`,
      TextBody: message,
      html: `<p>${message}</p>`,
    })
    .then((response: any) => {
      console.log("Sending message");
      console.log(response.To);
      console.log(response.Message);
    })
    .catch((error: any) => console.log(error.message));

  res.status(200).json({ name: name });
}
