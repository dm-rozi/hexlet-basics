// Typelizer digest b9bc3002651585141b5ae8a99a1acea5
//
// DO NOT MODIFY: This file was automatically generated by Typelizer.

type LanguageLessonMember = {
  id: number;
  user_id: number;
  state: "started" | "finished";
  openai_thread_id: string | null;
  messages_count: number | null;
  created_at: string;
  language_lesson_slug: string;
  language_slug: string;
  language_lesson_name: string;
}

export default LanguageLessonMember;
