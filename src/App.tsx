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



// Add these interfaces to match what your components actually expect
interface LoginUserData {
  email: string;
  name?: string;
  role?: string;
  accessToken?: string;
  id?: string;
}

interface SignupUserData {
  email: string;
  firstName: string;
  lastName: string;
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

  // Fixed login handler - matches what LoginPage expects
  const handleLogin = (userData: LoginUserData) => {
    // Determine user role and name based on email
    let role = "User";
    let name = "User";
    
    if (userData.email === "admin@looptrack.ai") {
      role = "Admin";
      name = "Admin User";
    } else if (userData.email === "manager@looptrack.ai") {
      role = "Manager";
      name = "Manager User";
    } else if (userData.email === "vishal@looptrack.ai") {
      role = "User";
      name = "Vishal Shaw";
    }

    const user: User = {
      email: userData.email,
      role: userData.role || role, // Use provided role or fallback to determined role
      name: userData.name || name, // Use provided name or fallback to determined name
    };

    // Save to localStorage for persistence
    localStorage.setItem("looptrack_user", JSON.stringify(user));
    localStorage.setItem("looptrack_auth", "true");

    setUser(user);
    setIsAuthenticated(true);
    setShowSignup(false);
  };

  // Fixed signup handler - matches what SignupFlow expects
  const handleSignup = (userData: SignupUserData) => {
    // Create user from signup data - combine firstName and lastName into name
    const user: User = {
      email: userData.email,
      role: "User", // Default role for new signups
      name: `${userData.firstName} ${userData.lastName}`,
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