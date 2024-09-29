import { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "@/lib/dbConnect";
import Campaign from "@/model/Campaign";


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;
  await dbConnect();

  if (method === 'GET') {
    try {
      const campaigns = await Campaign.find();
      res.status(200).json(campaigns);
    } catch (e) {
      console.error("Error fetching all campaigns: ", e);
      res.status(500).json({ message: "Internal Server error" });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${method} Not Allowed`);
  }


}