
import { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "@/lib/dbConnect";
import Campaign from "@/model/Campaign";


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;
  const { id } = req.query;
  await dbConnect();

  switch (method) {
    case 'GET':
      try {
        const campaign = await Campaign.findById(id);
        if (!campaign) {
          return res.status(404).json({ message: "Campaign not found" });
        }
        res.status(200).json(campaign);
      } catch (e) {
        res.status(500).json({ message: "Error fetching campaign", e });
      }
      break;
    default:
      res.status(400).json({ message: 'Method not allowed' });
      break;
  }
}