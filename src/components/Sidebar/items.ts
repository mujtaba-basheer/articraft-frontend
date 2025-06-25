import type { IconNameT } from "../Icon/Icon";

export type SidebarItemT = {
  label: string;
  path: string;
  iconName?: IconNameT;
};

export const menuItems: SidebarItemT[] = [
  {
    label: "Dashboard",
    path: "/",
    iconName: "AssessmentOutlined",
  },
  {
    label: "Analytics",
    path: "/analytics",
  },
  {
    label: "Attribution",
    path: "/attribution",
  },
  {
    label: "Revenue",
    path: "/revenue",
  },
  {
    label: "Reports",
    path: "/reports",
  },
  {
    label: "Performance Hub",
    path: "/performance-hub",
  },
  {
    label: "Customer Journey",
    path: "/customer-journey",
  },
  {
    label: "AI Insights",
    path: "/ai-insights",
  },
  {
    label: "Dashboard Builder",
    path: "/dashboard-builder",
  },
  {
    label: "Integrations",
    path: "/integrations",
  },
];
