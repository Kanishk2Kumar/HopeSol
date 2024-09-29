import { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "@/lib/dbConnect";
import Campaign from "@/model/Campaign";
import { campaignSchema } from "@/schemas/createCampaign";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await dbConnect();

  if (req.method === "POST") {
    try {

      // Validate the input data with Zod
      const validatedData = campaignSchema.parse(req.body);
      // console.log(validatedData);

      // Create and save the new campaign
      const newCampaign = await Campaign.create(validatedData);

      //   // Respond with the created campaign data, including its ID
      return res.status(201).json({ message: "Campaign created successfully", campaign: newCampaign });


    } catch (e: any) {
      console.error("Error creating a campaign:", e);

      // Handle Zod validation errors
      if (e.name === "ZodError") {
        return res.status(400).json({ message: "Validation error", errors: e.errors });
      }

      return res.status(400).json({ message: "Error creating a campaign", error: e.message });
    }
  } else {
    // Handle other methods
    res.setHeader("Allow", ["POST"]);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
