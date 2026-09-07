export default async function handler(req, res) {
  const { userId } = req.query;

  res.setHeader('Access-Control-Allow-Origin', '*');

  if (!userId || isNaN(Number(userId))) {
    return res.status(400).json({ error: 'invalid userId' });
  }

  try {
    const response = await fetch(`https://users.roblox.com/v1/users/${userId}`);
    const data = await response.json();
    return res.status(200).json({ description: data.description || '' });
  } catch (err) {
    return res.status(500).json({ error: 'failed to fetch description' });
  }
}
