export default async function handler(req: any, res: any) {
    try {
      const response = await fetch(
        "https://www.gamerpower.com/api/giveaways?platform=steam&type=loot&sort-by=popularity"
      );
      
      if (!response.ok) {
        throw new Error("Failed to fetch giveaways");
      }
  
      const data = await response.json();
      res.status(200).json(data);
      
    } catch (error) {
      console.error("API error:", error);
      res.status(500).json({ error: "Upstream API error" });
    }
  }
  