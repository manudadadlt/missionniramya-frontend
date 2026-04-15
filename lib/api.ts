export const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://127.0.0.1:1337';
const STRAPI_TOKEN = process.env.STRAPI_TOKEN;

/**
 * Fetches the active curriculum from the headless CMS.
 */
export async function getLessonData(id: string) {
  try {
    const res = await fetch(`${STRAPI_URL}/api/lessons?filters[week_number][$eq]=${id}&populate=*`, {
      headers: {
        Authorization: `Bearer ${STRAPI_TOKEN}`,
      },
      // Since it's a CMS, revalidate cache dynamically or set no-store for now
      cache: 'no-store' 
    });

    if (!res.ok) {
      console.error("❌ Failed to fetch from Strapi", res.statusText);
      return null;
    }

    const json = await res.json();
    return json.data[0]; // Returning the exact lesson matching the ID
  } catch (error) {
    console.error("💥 Network Error:", error);
    return null;
  }
}
