import type { IconNameT } from "../Icon/Icon";

export type SidebarItemT = {
  label: string;
  path: string;
  iconName: IconNameT;
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
    iconName: "AdsClick",
  },
  {
    label: "Attribution",
    path: "/attribution",
    iconName: "AdsClick",
  },
  {
    label: "Revenue",
    path: "/revenue",
    iconName: "PaidOutlined",
  },
  {
    label: "Reports",
    path: "/reports",
    iconName: "SummarizeOutlined",
  },
  {
    label: "Performance Hub",
    path: "/performance-hub",
    iconName: "AutoGraph",
  },
  {
    label: "Customer Journey",
    path: "/customer-journey",
    iconName: "PeopleOutline",
  },
  {
    label: "AI Insights",
    path: "/ai-insights",
    iconName: "ElectricBoltOutlined",
  },
  // {
  //   label: "Dashboard Builder",
  //   path: "/dashboard-builder",
  //   iconName: "ConstructionOutlined",
  // },
  {
    label: "Integrations",
    path: "/integrations",
    iconName: "PolylineOutlined",
  },
];

// Additional menu items for footer section - using items.ts structure
export const footerMenuItems = [
  {
    label: "Support",
    path: "/support",
    iconName: "AssessmentOutlined" as const,
  },
  {
    label: "Settings", 
    path: "/settings",
    iconName: "ConstructionOutlined" as const,
  },
];

