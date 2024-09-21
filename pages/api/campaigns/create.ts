import { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "@/lib/dbConnect";
import Campaign from "@/model/Campaign";
import { campaignSchema } from "@/schemas/createCampaign";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await dbConnect();
  if (req.method === "POST") {
    try {
      const validatedData = campaignSchema.parse(req.body);
      const newCampaign = await Campaign.create(validatedData);
      return res.status(200).json(newCampaign);
    } catch (e) {
      console.log("Error creating a campaign", e);
      return res.status(400).json({ message: "Error creating a campaign", e })
    }
  } else {
    // return res.setHeader("Allow", ["POST"]).status(405).end(`Method ${req.method} Not Allowed`);
    res.send("Get in create page");
  }
}