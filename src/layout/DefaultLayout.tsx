import { useState } from "react";
import Box from "@mui/material/Box";
import { Sidebar } from "../components/Sidebar/Sidebar";
import { DashboardHeader } from "../components/Header/DashboardHeader";

// Type for page paths (should match the ones in menuItems)
type PagePath = "/" | "/analytics" | "/attribution" | "/revenue" | "/reports" | 
  "/performance-hub" | "/customer-journey" | "/ai-insights" | "/dashboard-builder" | 
  "/integrations" | "/support" | "/settings";

export const DefaultLayout = () => {
  const [activePage, setActivePage] = useState<PagePath>("/");

  const handlePageChange = (path: string) => {
    setActivePage(path as PagePath);
  };

  return (
    <Box sx={{ display: "flex", height: "100vh", backgroundColor: "#f8fafc" }}>
      {/* Sidebar - Fixed width */}
      <Box sx={{ width: 280, flexShrink: 0 }}>
        <Sidebar onPageChange={handlePageChange} />
      </Box>
      
      {/* Main Content Area */}
      <Box sx={{ 
        flex: 1, 
        display: "flex", 
        flexDirection: "column",
        minWidth: 0, // Prevents overflow
        overflow: "hidden"
      }}>
        {/* Dynamic Header - Fixed at top */}
        <Box sx={{ 
          backgroundColor: "#ffffff",
          borderBottom: "1px solid #e5e7eb",
          zIndex: 10
        }}>
          <DashboardHeader activePage={activePage} />
        </Box>
        
        {/* Page Content - Scrollable */}
        <Box sx={{ 
          flex: 1, 
          padding: "24px 32px", 
          backgroundColor: "#f8fafc",
          overflow: "auto"
        }}>
        
        </Box>
      </Box>
    </Box>
  );
};

export default DefaultLayout;

