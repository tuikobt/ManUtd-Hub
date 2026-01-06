export default async function handler(req, res) {
  const apiKey = process.env.VITE_SERPAPI_KEY;

  if (!apiKey) {
    return res
      .status(500)
      .json({ error: "Missing API Key configuration on Vercel" });
  }

  const params = new URLSearchParams({
    engine: "google",
    q: "Manchester United F.C.",
    location: "austin, texas, united states",
    api_key: apiKey,
  });

  const url = `https://serpapi.com/search.json?${params.toString()}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch data from SerpApi" });
  }
}
