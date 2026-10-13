import type { LucideIcon } from "lucide-react";

export interface NavItem {
  key: string;
  path: string;
  icon: LucideIcon;
  isContentType: boolean;
}

// 导航配置暂为空，待后续阶段按新游戏内容重建。
// 内容类型（CONTENT_TYPES）从该配置派生，保持单一真相源。
export const NAVIGATION_CONFIG: readonly NavItem[] = [];

export const CONTENT_TYPES = NAVIGATION_CONFIG.filter((item) => item.isContentType).map((item) =>
  item.path.replace(/^\//, ""),
);
