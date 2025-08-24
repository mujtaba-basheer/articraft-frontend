import { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Drawer from "@mui/material/Drawer";
import { useMediaQuery, useTheme } from "@mui/material";
import { Sidebar } from "../components/Sidebar/Sidebar";
import { DashboardHeader } from "../components/Header/DashboardHeader";
import { DashboardContent } from "../views/DashboardContent";
import { AnalyticsContent } from "../views/AnalyticsContent";
import { AttributionContent } from "../views/AttributionContent";
import { IntegrationsPage } from "../views/IntegrationsPage";
import { RevenueDashboard } from "../views/RevenueDashboard";
import { PerformanceHub } from "../views/PerformanceHub";
import CustomerJourney from "../views/CustomerJourney";
import SettingsPage from "../views/SettingsPage";

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
      return <AnalyticsContent />;
    case "/attribution":
      return <AttributionContent />; 
      case "/integrations":
      return <IntegrationsPage />
    case "/revenue":
      return <RevenueDashboard />
      case "/performance-hub":
      return <PerformanceHub />
      case "/customer-journey":
      return <CustomerJourney />
      case "/settings":
      return <SettingsPage />
    default:
      const pageName = activePage.slice(1).charAt(0).toUpperCase() + activePage.slice(2).replace(/-/g, ' ');
      return (
        <Box sx={{ 
          padding: { xs: "24px", sm: "40px" },
          textAlign: "center",
          backgroundColor: "#ffffff", 
          borderRadius: { xs: "8px", sm: "12px" },
          border: "1px solid #e1e5e9",
          boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.08)",
          margin: { xs: "12px", sm: "20px" }
        }}>
          <Typography
            variant="h2"
            sx={{
              margin: "0 0 16px 0", 
              color: "#1f2937",
              fontSize: { xs: "20px", sm: "24px" },
              fontWeight: 600
            }}
          >
            {pageName} Page
          </Typography>
          <Typography
            sx={{
              margin: "0", 
              color: "#6b7280",
              fontSize: { xs: "14px", sm: "16px" },
              lineHeight: 1.6
            }}
          >
            This page is under development. Content for {activePage} will be added soon.
          </Typography>
        </Box>
      );
  }
};

interface User {
  email: string;
  role: string;
  name?: string;
}

interface DefaultLayoutProps {
  user: User | null;
  onLogout: () => void;
}

export const DefaultLayout = ({ user, onLogout }: DefaultLayoutProps) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  
  const [activePage, setActivePage] = useState<PagePath>("/");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handlePageChange = (path: string) => {
    setActivePage(path as PagePath);
    // Close mobile sidebar when navigating
    if (isMobile) {
      setSidebarOpen(false);
    }
  };

  const handleMenuToggle = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleSidebarClose = () => {
    setSidebarOpen(false);
  };

  return (
    <Box sx={{ 
      display: "flex", 
      height: "100vh", 
      backgroundColor: "#fafbfc",
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif"
    }}>
      {/* Desktop Sidebar - Always visible on desktop */}
      {!isMobile && (
        <Box sx={{ width: 280, flexShrink: 0 }}>
          <Sidebar 
            onPageChange={handlePageChange} 
            user={user}
            onLogout={onLogout}
          />
        </Box>
      )}

      {/* Mobile Sidebar Drawer - Only on mobile */}
      {isMobile && (
        <Drawer
          anchor="left"
          open={sidebarOpen}
          onClose={handleSidebarClose}
          ModalProps={{
            keepMounted: true, // Better mobile performance
          }}
          sx={{
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: 280,
            },
          }}
        >
          <Sidebar 
            onPageChange={handlePageChange} 
            user={user}
            onLogout={onLogout}
          />
        </Drawer>
      )}
      
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
          <DashboardHeader 
            activePage={activePage} 
            onMenuToggle={handleMenuToggle}
          />
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

