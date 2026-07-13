const CACHE_TTL_MS = 24 * 60 * 60 * 1000; // 24 hodín

let cache = {
  data: null,
  timestamp: 0,
};

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res
      .status(405)
      .json({ success: false, message: "Method not allowed" });
  }

  const now = Date.now();
  const isCacheValid = cache.data && now - cache.timestamp < CACHE_TTL_MS;

  if (isCacheValid) {
    return res.status(200).json({ success: true, ...cache.data, cached: true });
  }

  try {
    const placeId = process.env.GOOGLE_PLACE_ID;
    const apiKey = process.env.GOOGLE_PLACES_API_KEY;

    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews,rating,user_ratings_total&key=${apiKey}&language=sk`;

    const response = await fetch(url);
    const json = await response.json();

    if (json.status !== "OK") {
      console.error(
        "Google Places API error:",
        json.status,
        json.error_message,
      );
      throw new Error(json.error_message || "Places API request failed");
    }

    const result = {
      reviews: json.result.reviews || [],
      rating: json.result.rating,
      totalRatings: json.result.user_ratings_total,
    };

    cache = { data: result, timestamp: now };

    return res.status(200).json({ success: true, ...result, cached: false });
  } catch (error) {
    console.error("Chyba pri načítaní recenzií:", error);

    // Fallback - show cached older reviews if exist
    if (cache.data) {
      return res
        .status(200)
        .json({ success: true, ...cache.data, cached: true, stale: true });
    }

    return res
      .status(500)
      .json({ success: false, message: "Nepodarilo sa načítať recenzie." });
  }
}
