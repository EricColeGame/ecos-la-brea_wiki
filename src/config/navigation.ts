import { BookOpen, Code2, Compass, Flame, Map, Users, Zap } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface NavItem {
  key: string;
  path: `/${string}`;
  icon: LucideIcon;
  isContentType: boolean;
}

// 导航分类来自关键词聚类的 categories，与 content/<locale>/ 下的文章子目录一一对应。
// key 是翻译键，path 是 URL，二者必须同时存在，消费者（site.tsx）依赖 item.path。
export const NAVIGATION_CONFIG = [
  { key: "guide", path: "/guide", icon: BookOpen, isContentType: true },
  { key: "characters", path: "/characters", icon: Users, isContentType: true },
  { key: "maps", path: "/maps", icon: Map, isContentType: true },
  { key: "mechanics", path: "/mechanics", icon: Flame, isContentType: true },
  { key: "controls", path: "/controls", icon: Compass, isContentType: true },
  { key: "updates", path: "/updates", icon: Zap, isContentType: true },
  { key: "codes", path: "/codes", icon: Code2, isContentType: true },
] satisfies readonly NavItem[];

// 内容类型（CONTENT_TYPES）从该配置派生，保持单一真相源。
export const CONTENT_TYPES = NAVIGATION_CONFIG.filter((item) => item.isContentType).map((item) =>
  item.path.replace(/^\//, ""),
);
