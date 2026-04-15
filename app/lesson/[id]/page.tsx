import { getLessonData, STRAPI_URL } from '@/lib/api';
import LessonClientView from './LessonClientView';

export default async function LessonPlayer({ params }: { params: { id: string } }) {
  
  // 1. Fetch live data safely using our new API
  const lessonData = await getLessonData(params.id);
  
  // 2. Safe Fallbacks
  const lesson = lessonData?.attributes || {
      title_en: "Module Loading...",
      week_number: params.id,
      video_url: null,
  };

  const videoSource = lesson.video_url ? `${STRAPI_URL}${lesson.video_url}` : null;
  
  // We pass a fallback hardcoded video strictly for testing the player if Strapi video_url is null
  const fallbackVideoSrc = "https://www.w3schools.com/html/mov_bbb.mp4";

  return <LessonClientView lesson={lesson} videoSource={videoSource} fallbackVideoSrc={fallbackVideoSrc} />;
}
