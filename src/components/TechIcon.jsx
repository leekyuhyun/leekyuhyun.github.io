import {
  SiAxios,
  SiExpress,
  SiFigma,
  SiFirebase,
  SiGit,
  SiGithub,
  SiKakao,
  SiMockserviceworker,
  SiNextdotjs,
  SiNodedotjs,
  SiNotion,
  SiPostgresql,
  SiReact,
  SiRender,
  SiSocketdotio,
  SiSupabase,
  SiSwagger,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
  SiVuedotjs,
} from "react-icons/si";
import { LuBraces, LuCloud, LuDatabase, LuMessageSquare, LuRadio } from "react-icons/lu";

const icons = {
  React: SiReact,
  "Next.js": SiNextdotjs,
  "Vue.js": SiVuedotjs,
  TypeScript: SiTypescript,
  "Tailwind CSS": SiTailwindcss,
  "Node.js": SiNodedotjs,
  Express: SiExpress,
  "Socket.IO": SiSocketdotio,
  "REST API": LuBraces,
  PostgreSQL: SiPostgresql,
  Supabase: SiSupabase,
  Firebase: SiFirebase,
  "Firebase Admin": SiFirebase,
  Firestore: LuDatabase,
  Vercel: SiVercel,
  Render: SiRender,
  Git: SiGit,
  GitHub: SiGithub,
  Notion: SiNotion,
  Slack: LuMessageSquare,
  Figma: SiFigma,
  MSW: SiMockserviceworker,
  Swagger: SiSwagger,
  Axios: SiAxios,
  WebSocket: LuRadio,
  "Kakao Map API": SiKakao,
  "Gemini API": LuCloud,
};

export default function TechIcon({ name }) {
  const Icon = icons[name];
  return Icon ? <Icon aria-hidden="true" /> : null;
}
