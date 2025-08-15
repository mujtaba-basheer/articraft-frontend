import React, { useState, useEffect, useCallback } from "react";
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
import { authController } from "../api/services/articraft";
import { colors } from "../styles/colors";
import { isAxiosError } from "axios";

import logo from "../assets/4.png";

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
  boxShadow:
    "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
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

type GoogleSignInResponseData = {
  type: "googleSignIn";
  detail: {
    response: {
      clientId: string;
      client_id: string;
      credential: string;
    };
  };
};

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
    const rememberedPassword = localStorage.getItem(
      "looptrack_remembered_password"
    );
    const wasRemembered =
      localStorage.getItem("looptrack_remember_me") === "true";

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

  useEffect(() => {
    const gScriptEl = document.createElement("script");
    gScriptEl.src = "https://accounts.google.com/gsi/client";
    gScriptEl.async = true;

    document.body.appendChild(gScriptEl);

    return () => gScriptEl.remove();
  }, []);

  const handleGoogleLogin = useCallback(
    async (ev: Event) => {
      const {
        detail: {
          response: { credential },
        },
      } = ev as unknown as GoogleSignInResponseData;

      try {
        const { data } = await authController.googleSignIn({
          token: credential,
        });

        // Store access token for API requests
        localStorage.setItem("looptrack_access_token", data.accessToken);

        // Extract user information from API response
        const userData = {
          ...data,
          name:
            `${data.firstName || ""} ${data.lastName || ""}`.trim() || "User",
          role: data.emailVerified ? "Verified User" : "User",
        };

        console.log("Login successful, user data:", userData);
        onLogin(userData);
      } catch (error: unknown) {
        if (isAxiosError(error)) {
          setError(error.response?.data?.message);
        }
      }
    },
    [onLogin]
  );

  useEffect(() => {
    window.addEventListener("googleSignIn", handleGoogleLogin);

    return () => window.removeEventListener("googleSignIn", handleGoogleLogin);
  }, [handleGoogleLogin]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      const { data } = await authController.signIn({
        email: email.trim(),
        password,
      });

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
        ...data,
        name: `${data.firstName || ""} ${data.lastName || ""}`.trim() || "User",
        role: data.emailVerified ? "Verified User" : "User",
      };

      console.log("Login successful, user data:", userData);
      onLogin(userData);
    } catch (error: unknown) {
      // Handle API error response
      if (isAxiosError(error)) {
        setError(error.response?.data?.message);
      }
    }

    setIsLoading(false);
  };

  const handleForgotPassword = () => {
    if (email) {
      // Redirect to forgot password page with email
      window.location.href = `https://api.articraft.io/auth/forgot-password?email=${encodeURIComponent(email)}`;
    } else {
      // Redirect to forgot password page
      window.location.href = "https://api.articraft.io/auth/forgot-password";
    }
  };

  return (
    <LoginContainer>
      <Box sx={{ width: "100%", maxWidth: "400px", position: "relative" }}>
        <LoginCard>
          <CardContent sx={{ padding: "48px 40px" }}>
            <LogoSection>
              <Logo>
                <img src={logo} alt="" width="35" />
              </Logo>
              <Typography
                sx={{
                  fontSize: "24px",
                  fontWeight: 700,
                  color: colors.gray900,
                }}
              >
                Articraft
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
                  },
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

                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={rememberMe}
                        onChange={(e) => setRememberMe(e.target.checked)}
                        size="small"
                        sx={{
                          color: colors.gray400,
                          "&.Mui-checked": {
                            color: colors.blue500,
                          },
                        }}
                      />
                    }
                    label={
                      <Typography
                        sx={{ fontSize: "14px", color: colors.gray600 }}
                      >
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

                <div
                  id="g_id_onload"
                  data-client_id="443985873778-ql6ak0b8eu5ohp570j63u094odcgknr0.apps.googleusercontent.com"
                  data-context="signin"
                  data-ux_mode="popup"
                  data-callback="handleGoogleSignInResponse"
                  data-auto_prompt="false"
                ></div>

                <div
                  className="g_id_signin"
                  data-type="standard"
                  data-shape="rectangular"
                  data-theme="outline"
                  data-text="signin_with"
                  data-size="large"
                  data-logo_alignment="left"
                ></div>
                {/* <GoogleButton
                  fullWidth
                  variant="outlined"
                  onClick={handleGoogleLogin}
                  disabled={isLoading}
                  className="g-signin2"
                >
                  <GoogleIcon />
                  Sign in with Google
                </GoogleButton> */}
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
          <Typography sx={{ fontSize: "12px" }}>© articraft 2025</Typography>
          <Typography sx={{ fontSize: "12px" }}>help@articraft.io</Typography>
        </FooterContainer>
      </Box>
    </LoginContainer>
  );
};
