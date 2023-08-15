import { NextApiRequest, NextApiResponse } from "next";
import db from "../../../lib/db";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const user = await db.user.create({
      data: req.body
    });
  }
  const users = await db.user.findMany();
  res.json(users);
}
