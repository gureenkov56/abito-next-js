import { PrismaClient } from "@prisma/client"
import { NextApiRequest, NextApiResponse } from "next"

const prisma = new PrismaClient()

export default async function handle(_: NextApiRequest, res: NextApiResponse) {
  try {
    const posts = await prisma.category.findMany()
    res.status(200).json(posts)
  } catch (err) {
    res.status(500).json({ error: 'failed to load data' })
  }
}