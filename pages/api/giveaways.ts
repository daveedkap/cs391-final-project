import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const response = await fetch(
      "https://www.gamerpower.com/api/giveaways?platform=steam&type=loot&sort-by=popularity"
    );
    const data = await response.json();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: "Upstream API failed" });
  }
}
