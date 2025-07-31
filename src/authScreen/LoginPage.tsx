import React, { useState, useEffect } from "react";
import {
  Box,
  Card,
  CardContent,
  TextField,
  Button,
  Typography,
  Stack,
  Alert,
  InputAdornment,
  IconButton,
  Checkbox,
  FormControlLabel,
  Link,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { colors } from "../styles/colors";

const LoginContainer = styled(Box)(() => ({
  minHeight: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  padding: "20px",
  fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
}));

const LoginCard = styled(Card)(() => ({
  width: "100%",
  maxWidth: "400px",
  borderRadius: "16px",
  border: `1px solid ${colors.gray200}`,
  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
  backgroundColor: colors.baseWhite,
  overflow: "visible",
}));

const LogoSection = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginBottom: "32px",
}));

const Logo = styled(Box)(() => ({
  width: "48px",
  height: "48px",
  borderRadius: "12px",
  background: `linear-gradient(135deg, ${colors.blue500} 0%, ${colors.blue600} 100%)`,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: colors.baseWhite,
  fontSize: "20px",
  fontWeight: "bold",
  marginRight: "12px",
}));

const StyledTextField = styled(TextField)(() => ({
  "& .MuiOutlinedInput-root": {
    borderRadius: "8px",
    backgroundColor: colors.baseWhite,
    fontSize: "14px",
    "& fieldset": {
      borderColor: colors.gray200,
    },
    "&:hover fieldset": {
      borderColor: colors.gray300,
    },
    "&.Mui-focused fieldset": {
      borderColor: colors.blue500,
    },
  },
  "& .MuiInputLabel-root": {
    fontSize: "14px",
    color: colors.gray600,
  },
}));

const LoginButton = styled(Button)(() => ({
  height: "48px",
  borderRadius: "8px",
  fontSize: "14px",
  fontWeight: 600,
  textTransform: "none",
  background: `linear-gradient(135deg, ${colors.blue500} 0%, ${colors.blue600} 100%)`,
  boxShadow: "0 4px 12px 0 rgba(59, 130, 246, 0.15)",
  "&:hover": {
    background: `linear-gradient(135deg, ${colors.blue600} 0%, ${colors.blue700} 100())`,
    boxShadow: "0 6px 16px 0 rgba(59, 130, 246, 0.2)",
  },
  "&:disabled": {
    background: colors.gray300,
    boxShadow: "none",
  },
}));

const GoogleButton = styled(Button)(() => ({
  height: "48px",
  borderRadius: "8px",
  fontSize: "14px",
  fontWeight: 500,
  textTransform: "none",
  backgroundColor: colors.baseWhite,
  color: colors.gray700,
  border: `1px solid ${colors.gray200}`,
  "&:hover": {
    backgroundColor: colors.gray50,
    border: `1px solid ${colors.gray300}`,
  },
}));

const FooterContainer = styled(Box)(() => ({
  position: "fixed",
  bottom: "20px",
  left: "50%",
  transform: "translateX(-50%)",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: "calc(100% - 40px)",
  maxWidth: "400px",
  color: "rgba(255, 255, 255, 0.8)",
  fontSize: "12px",
  zIndex: 1,
}));

// Eye icon for password visibility
const EyeIcon = ({ isVisible }: { isVisible: boolean }) => (
  <Box
    component="svg"
    sx={{ width: 20, height: 20, color: colors.gray400 }}
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    {isVisible ? (
      <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
    ) : (
      <path d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z" />
    )}
  </Box>
);

// Google icon
const GoogleIcon = () => (
  <Box
    component="svg"
    sx={{ width: 20, height: 20, marginRight: "8px" }}
    viewBox="0 0 24 24"
  >
    <path
      fill="#4285F4"
      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
    />
    <path
      fill="#34A853"
      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
    />
    <path
      fill="#FBBC05"
      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
    />
    <path
      fill="#EA4335"
      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
    />
  </Box>
);

interface LoginPageProps {
  onLogin: (userData: { 
    email: string; 
    name?: string; 
    role?: string; 
    accessToken?: string;
    id?: string;
  }) => void;
  onSignup?: () => void;
}

export const LoginPage = ({ onLogin, onSignup }: LoginPageProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Load remembered credentials on component mount
  useEffect(() => {
    const rememberedEmail = localStorage.getItem("looptrack_remembered_email");
    const rememberedPassword = localStorage.getItem("looptrack_remembered_password");
    const wasRemembered = localStorage.getItem("looptrack_remember_me") === "true";
    
    if (wasRemembered && rememberedEmail) {
      setEmail(rememberedEmail);
      setRememberMe(true);
      if (rememberedPassword) {
        // Decode the stored password (using simple base64 for security)
        try {
          const decodedPassword = atob(rememberedPassword);
          setPassword(decodedPassword);
        } catch (err) {
          console.error("Error decoding remembered password:", err);
          // Clear corrupted data
          localStorage.removeItem("looptrack_remembered_password");
        }
      }
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      console.log("Sending login request to API...");
      
      const response = await fetch("https://looptrack.up.railway.app/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          email: email.trim(),
          password: password,
        }),
      });

      const data = await response.json();
      
      console.log("Response status:", response.status);
      console.log("Response data:", data);

      if (response.ok && data.accessToken) {
        // Handle remember me functionality
        if (rememberMe) {
          localStorage.setItem("looptrack_remembered_email", email);
          // Store encoded password for security (base64)
          localStorage.setItem("looptrack_remembered_password", btoa(password));
          localStorage.setItem("looptrack_remember_me", "true");
        } else {
          // Clear remembered credentials if user unchecked remember me
          localStorage.removeItem("looptrack_remembered_email");
          localStorage.removeItem("looptrack_remembered_password");
          localStorage.removeItem("looptrack_remember_me");
        }

        // Store access token for API requests
        localStorage.setItem("looptrack_access_token", data.accessToken);

        // Extract user information from API response
        const userData = {
          id: data.id,
          email: data.email || email,
          name: `${data.firstName || ""} ${data.lastName || ""}`.trim() || "User",
          role: data.emailVerified ? "Verified User" : "User",
          accessToken: data.accessToken,
          firstName: data.firstName,
          lastName: data.lastName,
          emailVerified: data.emailVerified,
          metaConnected: data.metaConnected,
          shopifyConnected: data.shopifyConnected,
        };

        console.log("Login successful, user data:", userData);
        onLogin(userData);
      } else {
        // Handle API error response
        const errorMessage = data.message || data.error || "Invalid email or password. Please try again.";
        setError(errorMessage);
        console.error("Login failed:", errorMessage);
      }
    } catch (err) {
      // Handle network or other errors
      console.error("Login error:", err);
      setError("Unable to connect to the server. Please check your connection and try again.");
    }

    setIsLoading(false);
  };

  const handleGoogleLogin = () => {
    // Redirect to Google OAuth endpoint
    window.location.href = "https://looptrack.up.railway.app/api/auth/google";
  };

  const handleForgotPassword = () => {
    if (email) {
      // Redirect to forgot password page with email
      window.location.href = `https://looptrack.up.railway.app/auth/forgot-password?email=${encodeURIComponent(email)}`;
    } else {
      // Redirect to forgot password page
      window.location.href = "https://looptrack.up.railway.app/auth/forgot-password";
    }
  };

  return (
    <LoginContainer>
      <Box sx={{ width: "100%", maxWidth: "400px", position: "relative" }}>
        <LoginCard>
          <CardContent sx={{ padding: "48px 40px" }}>
            <LogoSection>
              <Logo>L</Logo>
              <Typography
                sx={{
                  fontSize: "24px",
                  fontWeight: 700,
                  color: colors.gray900,
                }}
              >
                LoopTrack
              </Typography>
            </LogoSection>

            <Typography
              variant="h4"
              sx={{
                fontSize: "28px",
                fontWeight: 700,
                color: colors.gray900,
                textAlign: "center",
                marginBottom: "8px",
              }}
            >
              Welcome back
            </Typography>

            <Typography
              variant="body1"
              sx={{
                fontSize: "16px",
                color: colors.gray600,
                textAlign: "center",
                marginBottom: "32px",
              }}
            >
              Please enter your details
            </Typography>

            {error && (
              <Alert 
                severity="error" 
                sx={{ 
                  marginBottom: "24px",
                  borderRadius: "8px",
                  "& .MuiAlert-message": {
                    fontSize: "14px",
                  }
                }}
              >
                {error}
              </Alert>
            )}

            <form onSubmit={handleSubmit}>
              <Stack spacing={3}>
                <Box>
                  <StyledTextField
                    fullWidth
                    label="Email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    autoComplete="email"
                  />
                </Box>

                <Box>
                  <StyledTextField
                    fullWidth
                    label="Password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    required
                    autoComplete="current-password"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            onClick={() => setShowPassword(!showPassword)}
                            edge="end"
                            size="small"
                          >
                            <EyeIcon isVisible={showPassword} />
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                </Box>

                <Stack direction="row" justifyContent="space-between" alignItems="center">
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={rememberMe}
                        onChange={(e) => setRememberMe(e.target.checked)}
                        size="small"
                        sx={{
                          color: colors.gray400,
                          '&.Mui-checked': {
                            color: colors.blue500,
                          },
                        }}
                      />
                    }
                    label={
                      <Typography sx={{ fontSize: "14px", color: colors.gray600 }}>
                        Remember for 30 days
                      </Typography>
                    }
                  />
                  <Link
                    onClick={handleForgotPassword}
                    sx={{
                      fontSize: "14px",
                      color: colors.blue600,
                      textDecoration: "none",
                      fontWeight: 500,
                      cursor: "pointer",
                      "&:hover": {
                        textDecoration: "underline",
                      },
                    }}
                  >
                    Forgot password
                  </Link>
                </Stack>

                <LoginButton
                  type="submit"
                  fullWidth
                  variant="contained"
                  disabled={isLoading || !email || !password}
                >
                  {isLoading ? "Signing in..." : "Sign in"}
                </LoginButton>

                <GoogleButton
                  fullWidth
                  variant="outlined"
                  onClick={handleGoogleLogin}
                  disabled={isLoading}
                >
                  <GoogleIcon />
                  Sign in with Google
                </GoogleButton>
              </Stack>
            </form>

            <Typography
              sx={{
                textAlign: "center",
                marginTop: "32px",
                fontSize: "14px",
                color: colors.gray600,
              }}
            >
              Don't have an account?{" "}
              <Link
                onClick={onSignup}
                sx={{
                  color: colors.blue600,
                  textDecoration: "none",
                  fontWeight: 500,
                  cursor: "pointer",
                  "&:hover": {
                    textDecoration: "underline",
                  },
                }}
              >
                Sign up
              </Link>
            </Typography>
          </CardContent>
        </LoginCard>

        <FooterContainer>
          <Typography sx={{ fontSize: "12px" }}>
            © LoopTrack 2025
          </Typography>
          <Typography sx={{ fontSize: "12px" }}>
            help@looptrack.ai
          </Typography>
        </FooterContainer>
      </Box>
    </LoginContainer>
  );
};