import { useState, useEffect } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material";
import DefaultLayout from "./layout/DefaultLayout";
import { LoginPage } from "./authScreen/LoginPage";
import { SignupFlow } from "./authScreen/SignupFlow";
import { theme } from "./styles";

interface User {
  email: string;
  role: string;
  name?: string;
}

interface SignupData {
  name: string;
  email: string;
  password: string;
  organizationGoal: string;
  selectedChannels: string[];
  setupType: string;
  organizationName: string;
  organizationDescription: string;
  brandLogo?: File;
}

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [showSignup, setShowSignup] = useState(false);

  // Check for existing session on app load
  useEffect(() => {
    const checkAuthStatus = () => {
      const savedUser = localStorage.getItem("looptrack_user");
      const savedAuth = localStorage.getItem("looptrack_auth");
      
      if (savedUser && savedAuth === "true") {
        try {
          const parsedUser = JSON.parse(savedUser);
          setUser(parsedUser);
          setIsAuthenticated(true);
        } catch (error) {
          // Clear invalid data
          localStorage.removeItem("looptrack_user");
          localStorage.removeItem("looptrack_auth");
        }
      }
      
      setIsLoading(false);
    };

    checkAuthStatus();
  }, []);

  const handleLogin = (credentials: { email: string; password: string }) => {
    // Determine user role and name based on email
    let role = "User";
    let name = "User";
    
    if (credentials.email === "admin@looptrack.ai") {
      role = "Admin";
      name = "Admin User";
    } else if (credentials.email === "manager@looptrack.ai") {
      role = "Manager";
      name = "Manager User";
    } else if (credentials.email === "vishal@looptrack.ai") {
      role = "User";
      name = "Vishal Shaw";
    }

    const user: User = {
      email: credentials.email,
      role: role,
      name: name,
    };

    // Save to localStorage for persistence
    localStorage.setItem("looptrack_user", JSON.stringify(user));
    localStorage.setItem("looptrack_auth", "true");

    setUser(user);
    setIsAuthenticated(true);
    setShowSignup(false);
  };

  const handleSignup = (signupData: SignupData) => {
    // Create user from signup data
    const user: User = {
      email: signupData.email,
      role: "User", // Default role for new signups
      name: signupData.name,
    };

    // Save to localStorage for persistence
    localStorage.setItem("looptrack_user", JSON.stringify(user));
    localStorage.setItem("looptrack_auth", "true");

    setUser(user);
    setIsAuthenticated(true);
    setShowSignup(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("looptrack_user");
    localStorage.removeItem("looptrack_auth");
    setUser(null);
    setIsAuthenticated(false);
    setShowSignup(false);
  };

  const handleShowSignup = () => {
    setShowSignup(true);
  };

  const handleBackToLogin = () => {
    setShowSignup(false);
  };

  // Show loading state while checking authentication
  if (isLoading) {
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center', 
          height: '100vh',
          backgroundColor: '#fafbfc',
          fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif"
        }}>
          <div style={{
            color: '#6b7280',
            fontSize: '16px'
          }}>
            Loading...
          </div>
        </div>
      </ThemeProvider>
    );
  }

  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        {isAuthenticated ? (
          <DefaultLayout user={user} onLogout={handleLogout} />
        ) : showSignup ? (
          <SignupFlow onSignup={handleSignup} onBackToLogin={handleBackToLogin} />
        ) : (
          <LoginPage onLogin={handleLogin} onSignup={handleShowSignup} />
        )}
      </ThemeProvider>
    </>
  );
}

export default App;