import { useState } from "react";
import Box from "@mui/material/Box";
import { Sidebar } from "../components/Sidebar/Sidebar";
import { DashboardHeader } from "../components/Header/DashboardHeader";
import { DashboardContent } from "../views/DashboardContent";

// Type for page paths (should match the ones in menuItems)
type PagePath = "/" | "/analytics" | "/attribution" | "/revenue" | "/reports" | 
  "/performance-hub" | "/customer-journey" | "/ai-insights" | "/dashboard-builder" | 
  "/integrations" | "/support" | "/settings";

// Page content component that renders different content based on active page
const PageContent = ({ activePage }: { activePage: PagePath }) => {
  switch (activePage) {
    case "/":
      return <DashboardContent />;
    case "/analytics":
      return (
        <Box sx={{ 
          padding: "40px", 
          textAlign: "center", 
          backgroundColor: "#ffffff", 
          borderRadius: "12px",
          border: "1px solid #e1e5e9",
          boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.08)",
          margin: "20px"
        }}>
          <h2 style={{ 
            margin: "0 0 16px 0", 
            color: "#1f2937",
            fontSize: "24px",
            fontWeight: 600
          }}>
            Analytics Page
          </h2>
          <p style={{ 
            margin: "0", 
            color: "#6b7280",
            fontSize: "16px",
            lineHeight: 1.6
          }}>
            Deep dive into your performance metrics and trends will be displayed here.
          </p>
        </Box>
      );
    case "/attribution":
      return (
        <Box sx={{ 
          padding: "40px", 
          textAlign: "center", 
          backgroundColor: "#ffffff", 
          borderRadius: "12px",
          border: "1px solid #e1e5e9",
          boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.08)",
          margin: "20px"
        }}>
          <h2 style={{ 
            margin: "0 0 16px 0", 
            color: "#1f2937",
            fontSize: "24px",
            fontWeight: 600
          }}>
            Attribution Page
          </h2>
          <p style={{ 
            margin: "0", 
            color: "#6b7280",
            fontSize: "16px",
            lineHeight: 1.6
          }}>
            Track customer touchpoints and conversion paths analytics will be shown here.
          </p>
        </Box>
      );
    case "/revenue":
      return (
        <Box sx={{ 
          padding: "40px", 
          textAlign: "center", 
          backgroundColor: "#ffffff", 
          borderRadius: "12px",
          border: "1px solid #e1e5e9",
          boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.08)",
          margin: "20px"
        }}>
          <h2 style={{ 
            margin: "0 0 16px 0", 
            color: "#1f2937",
            fontSize: "24px",
            fontWeight: 600
          }}>
            Revenue Page
          </h2>
          <p style={{ 
            margin: "0", 
            color: "#6b7280",
            fontSize: "16px",
            lineHeight: 1.6
          }}>
            Monitor revenue streams and financial performance data will be displayed here.
          </p>
        </Box>
      );
    default:
      return (
        <Box sx={{ 
          padding: "40px", 
          textAlign: "center", 
          backgroundColor: "#ffffff", 
          borderRadius: "12px",
          border: "1px solid #e1e5e9",
          boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.08)",
          margin: "20px"
        }}>
          <h2 style={{ 
            margin: "0 0 16px 0", 
            color: "#1f2937",
            fontSize: "24px",
            fontWeight: 600
          }}>
            {activePage.slice(1).charAt(0).toUpperCase() + activePage.slice(2)} Page
          </h2>
          <p style={{ 
            margin: "0", 
            color: "#6b7280",
            fontSize: "16px",
            lineHeight: 1.6
          }}>
            This page is under development. Content for {activePage} will be added soon.
          </p>
        </Box>
      );
  }
};

export const DefaultLayout = () => {
  const [activePage, setActivePage] = useState<PagePath>("/");

  const handlePageChange = (path: string) => {
    setActivePage(path as PagePath);
  };

  return (
    <Box sx={{ 
      display: "flex", 
      height: "100vh", 
      backgroundColor: "#fafbfc",
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif"
    }}>
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
          borderBottom: "1px solid #e1e5e9",
          zIndex: 10,
          boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.05)"
        }}>
          <DashboardHeader activePage={activePage} />
        </Box>
        
        {/* Page Content - Scrollable */}
        <Box sx={{ 
          flex: 1, 
          backgroundColor: "#fafbfc",
          overflow: "auto"
        }}>
          <PageContent activePage={activePage} />
        </Box>
      </Box>
    </Box>
  );
};

export default DefaultLayout;

