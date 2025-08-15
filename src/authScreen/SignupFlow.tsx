import { useState } from "react";
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
  Link,
  Fade,
  Modal,
  Backdrop,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { colors } from "../styles/colors";
import { authController } from "../api/services/articraft";
import { isAxiosError } from "axios";
import logo from "../assets/4.png";

const SignupContainer = styled(Box)(() => ({
  minHeight: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  padding: "20px",
  fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
}));

const SignupCard = styled(Card)(() => ({
  width: "100%",
  maxWidth: "500px",
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
  marginBottom: "24px",
}));

const Logo = styled(Box)(() => ({
  width: "32px",
  height: "32px",
  borderRadius: "8px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: colors.baseWhite,
  fontSize: "16px",
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

const OtpTextField = styled(TextField)(() => ({
  "& .MuiOutlinedInput-root": {
    borderRadius: "8px",
    backgroundColor: colors.baseWhite,
    fontSize: "18px",
    textAlign: "center",
    "& input": {
      textAlign: "center",
      fontSize: "18px",
      fontWeight: "600",
      letterSpacing: "8px",
    },
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
}));

const ContinueButton = styled(Button)(() => ({
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

const ResendButton = styled(Button)(() => ({
  fontSize: "14px",
  fontWeight: 500,
  textTransform: "none",
  color: colors.blue600,
  backgroundColor: "transparent",
  padding: "4px 8px",
  "&:hover": {
    backgroundColor: colors.blue50,
  },
  "&:disabled": {
    color: colors.gray400,
  },
}));

const SuccessModal = styled(Modal)(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "20px",
}));

const SuccessCard = styled(Card)(() => ({
  width: "100%",
  maxWidth: "400px",
  borderRadius: "20px",
  border: `2px solid ${colors.green200}`,
  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
  backgroundColor: colors.baseWhite,
  position: "relative",
  overflow: "visible",
}));

const SuccessIconContainer = styled(Box)(() => ({
  position: "absolute",
  top: "-30px",
  left: "50%",
  transform: "translateX(-50%)",
  width: "60px",
  height: "60px",
  borderRadius: "50%",
  background: `linear-gradient(135deg, ${colors.green500} 0%, ${colors.green600} 100%)`,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  boxShadow: "0 8px 20px 0 rgba(34, 197, 94, 0.3)",
}));

const CelebrationContainer = styled(Box)(() => ({
  position: "absolute",
  top: "-40px",
  left: "50%",
  transform: "translateX(-50%)",
  width: "80px",
  height: "80px",
  borderRadius: "50%",
  background: `radial-gradient(circle, ${colors.green100} 0%, transparent 70%)`,
  animation: "celebrate 2s ease-in-out infinite",
  "@keyframes celebrate": {
    "0%, 100%": {
      transform: "translateX(-50%) scale(1)",
      opacity: 0.3,
    },
    "50%": {
      transform: "translateX(-50%) scale(1.2)",
      opacity: 0.6,
    },
  },
}));

const SuccessButton = styled(Button)(() => ({
  height: "48px",
  borderRadius: "12px",
  fontSize: "16px",
  fontWeight: 600,
  textTransform: "none",
  background: `linear-gradient(135deg, ${colors.green500} 0%, ${colors.green600} 100())`,
  color: colors.baseWhite,
  boxShadow: "0 4px 12px 0 rgba(34, 197, 94, 0.25)",
  "&:hover": {
    background: `linear-gradient(135deg, ${colors.green600} 0%, ${colors.green700} 100())`,
    boxShadow: "0 6px 16px 0 rgba(34, 197, 94, 0.35)",
    transform: "translateY(-1px)",
  },
  transition: "all 0.2s ease",
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
  maxWidth: "500px",
  color: "rgba(255, 255, 255, 0.8)",
  fontSize: "12px",
  zIndex: 1,
}));

const SuccessCheckIcon = () => (
  <Box
    component="svg"
    sx={{ width: 32, height: 32, color: colors.baseWhite }}
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
  </Box>
);

const SparkleIcon = ({ delay = 0 }: { delay?: number }) => (
  <Box
    component="svg"
    sx={{
      width: 16,
      height: 16,
      color: colors.yellow400,
      position: "absolute",
      animation: `sparkle 2s ease-in-out infinite`,
      animationDelay: `${delay}s`,
      "@keyframes sparkle": {
        "0%, 100%": {
          transform: "scale(0) rotate(0deg)",
          opacity: 0,
        },
        "50%": {
          transform: "scale(1) rotate(180deg)",
          opacity: 1,
        },
      },
    }}
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M12 2l2.09 6.26L20 10l-5.91 1.74L12 18l-2.09-6.26L4 10l5.91-1.74L12 2z" />
  </Box>
);

// Icons
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

const MailIcon = () => (
  <Box
    component="svg"
    sx={{ width: 48, height: 48, color: colors.blue500, mb: 2 }}
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
  </Box>
);

// Step interfaces
interface SignupData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

interface SignupFlowProps {
  onSignup: (userData: {
    email: string;
    firstName: string;
    lastName: string;
  }) => void;
  onBackToLogin: () => void;
}

export const SignupFlow = ({ onSignup, onBackToLogin }: SignupFlowProps) => {
  const [step, setStep] = useState(1); // 1: Signup, 2: OTP Verification
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [otp, setOtp] = useState("");
  const [resendCooldown, setResendCooldown] = useState(0);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const [signupData, setSignupData] = useState<SignupData>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const updateSignupData = (updates: Partial<SignupData>) => {
    setSignupData((prev) => ({ ...prev, ...updates }));
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      await authController.signup(signupData);

      setStep(2);
    } catch (error) {
      console.error("Signup error:", error);
      if (isAxiosError(error)) {
        setError(error.response?.data?.message);
      }
    }

    setIsLoading(false);
  };

  const handleOtpVerification = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      const response = await fetch(
        "https://api.articraft.io/api/auth/verify-email",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: signupData.email,
            otp: otp,
          }),
        }
      );

      const data = await response.json();

      if (response.ok && data.result) {
        // OTP verified successfully, show success modal
        setShowSuccessModal(true);

        // Auto-proceed to dashboard after 3 seconds
        setTimeout(() => {
          onSignup({
            email: signupData.email,
            firstName: signupData.firstName,
            lastName: signupData.lastName,
          });
        }, 3000);
      } else {
        setError("Invalid OTP. Please check your code and try again.");
      }
    } catch (err) {
      console.error("OTP verification error:", err);
      setError("Unable to verify OTP. Please try again.");
    }

    setIsLoading(false);
  };

  const handleResendOtp = async () => {
    if (resendCooldown > 0) return;

    setError("");
    setResendCooldown(60); // 60 second cooldown

    try {
      // Call signup again to resend OTP
      await fetch("https://api.articraft.io/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName: signupData.firstName,
          lastName: signupData.lastName,
          email: signupData.email,
          password: signupData.password,
        }),
      });

      // Start cooldown timer
      const timer = setInterval(() => {
        setResendCooldown((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } catch (err) {
      console.error("Resend OTP error:", err);
      setResendCooldown(0);
    }
  };

  const handleGoogleSignup = () => {
    // Redirect to Google OAuth endpoint
    window.location.href = "https://api.articraft.io/api/auth/google";
  };

  // Step 1: Create Account
  const renderSignupStep = () => (
    <Fade in={true}>
      <Box>
        <LogoSection>
          <Logo>
            <img src={logo} alt="" width="35" />
          </Logo>
          <Typography
            sx={{ fontSize: "20px", fontWeight: 700, color: colors.gray900 }}
          >
            Articraft
          </Typography>
        </LogoSection>

        <Typography
          variant="h4"
          sx={{
            fontSize: "24px",
            fontWeight: 700,
            color: colors.gray900,
            textAlign: "center",
            marginBottom: "8px",
          }}
        >
          Create a new account
        </Typography>

        <Typography
          variant="body1"
          sx={{
            fontSize: "14px",
            color: colors.gray600,
            textAlign: "center",
            marginBottom: "32px",
          }}
        >
          Start your 30-day free trial.
        </Typography>

        {error && (
          <Alert
            severity="error"
            sx={{ marginBottom: "24px", borderRadius: "8px" }}
          >
            {error}
          </Alert>
        )}

        <form onSubmit={handleSignup}>
          <Stack spacing={3}>
            <Box sx={{ display: "flex", gap: "12px" }}>
              <StyledTextField
                fullWidth
                label="First Name*"
                value={signupData.firstName}
                onChange={(e) =>
                  updateSignupData({ firstName: e.target.value })
                }
                placeholder="Enter your first name"
                required
              />
              <StyledTextField
                fullWidth
                label="Last Name*"
                value={signupData.lastName}
                onChange={(e) => updateSignupData({ lastName: e.target.value })}
                placeholder="Enter your last name"
                required
              />
            </Box>

            <StyledTextField
              fullWidth
              label="Email*"
              type="email"
              value={signupData.email}
              onChange={(e) => updateSignupData({ email: e.target.value })}
              placeholder="Enter your email"
              required
            />

            <Box>
              <StyledTextField
                fullWidth
                label="Password*"
                type={showPassword ? "text" : "password"}
                value={signupData.password}
                onChange={(e) => updateSignupData({ password: e.target.value })}
                placeholder="Create a password"
                required
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
              <Typography
                sx={{ fontSize: "12px", color: colors.gray500, mt: 1 }}
              >
                Must be at least 8 characters.
              </Typography>
            </Box>

            <ContinueButton
              type="submit"
              fullWidth
              variant="contained"
              disabled={
                isLoading ||
                !signupData.firstName ||
                !signupData.lastName ||
                !signupData.email ||
                signupData.password.length < 8
              }
            >
              {isLoading ? "Creating Account..." : "Get Started"}
            </ContinueButton>
          </Stack>
        </form>

        <Typography
          sx={{
            textAlign: "center",
            marginTop: "24px",
            fontSize: "14px",
            color: colors.gray600,
          }}
        >
          Already have an account?{" "}
          <Link
            onClick={onBackToLogin}
            sx={{
              color: colors.blue600,
              textDecoration: "none",
              fontWeight: 500,
              cursor: "pointer",
              "&:hover": { textDecoration: "underline" },
            }}
          >
            Log in
          </Link>
        </Typography>
      </Box>
    </Fade>
  );

  // Success Modal
  const renderSuccessModal = () => (
    <SuccessModal
      open={showSuccessModal}
      BackdropComponent={Backdrop}
      BackdropProps={{
        style: {
          backgroundColor: "rgba(0, 0, 0, 0.7)",
          backdropFilter: "blur(8px)",
        },
      }}
    >
      <Fade in={showSuccessModal}>
        <Box sx={{ position: "relative" }}>
          {/* Sparkle Effects */}
          <Box sx={{ position: "absolute", top: "10px", left: "50px" }}>
            <SparkleIcon delay={0} />
          </Box>
          <Box sx={{ position: "absolute", top: "30px", right: "60px" }}>
            <SparkleIcon delay={0.5} />
          </Box>
          <Box sx={{ position: "absolute", bottom: "60px", left: "30px" }}>
            <SparkleIcon delay={1} />
          </Box>
          <Box sx={{ position: "absolute", bottom: "40px", right: "40px" }}>
            <SparkleIcon delay={1.5} />
          </Box>

          <SuccessCard>
            {/* Celebration Animation */}
            <CelebrationContainer />

            {/* Success Icon */}
            <SuccessIconContainer>
              <SuccessCheckIcon />
            </SuccessIconContainer>

            <CardContent
              sx={{ padding: "60px 40px 40px 40px", textAlign: "center" }}
            >
              <Typography
                variant="h4"
                sx={{
                  fontSize: "28px",
                  fontWeight: 700,
                  color: colors.gray900,
                  marginBottom: "12px",
                }}
              >
                Welcome to LoopTrack! 🎉
              </Typography>

              <Typography
                sx={{
                  fontSize: "16px",
                  color: colors.gray600,
                  lineHeight: 1.6,
                  marginBottom: "8px",
                }}
              >
                Hi {signupData.firstName}! Your account has been created
                successfully.
              </Typography>

              <Typography
                sx={{
                  fontSize: "14px",
                  color: colors.gray500,
                  marginBottom: "32px",
                }}
              >
                Get ready to unlock powerful insights for your marketing
                campaigns.
              </Typography>

              <Box
                sx={{
                  backgroundColor: colors.green50,
                  borderRadius: "12px",
                  padding: "20px",
                  marginBottom: "32px",
                  border: `1px solid ${colors.green200}`,
                }}
              >
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: 600,
                    color: colors.green700,
                    marginBottom: "8px",
                  }}
                >
                  🚀 What's next?
                </Typography>
                <Typography
                  sx={{
                    fontSize: "13px",
                    color: colors.green600,
                    lineHeight: 1.5,
                  }}
                >
                  You'll be redirected to your dashboard where you can start
                  connecting your marketing channels and exploring powerful
                  analytics.
                </Typography>
              </Box>

              <SuccessButton
                fullWidth
                onClick={() => {
                  onSignup({
                    email: signupData.email,
                    firstName: signupData.firstName,
                    lastName: signupData.lastName,
                  });
                }}
                endIcon={
                  <Box
                    component="span"
                    sx={{
                      fontSize: "16px",
                      marginLeft: "4px",
                    }}
                  >
                    →
                  </Box>
                }
              >
                Go to Dashboard
              </SuccessButton>

              <Typography
                sx={{
                  fontSize: "12px",
                  color: colors.gray400,
                  marginTop: "16px",
                }}
              >
                Redirecting automatically in a few seconds...
              </Typography>
            </CardContent>
          </SuccessCard>
        </Box>
      </Fade>
    </SuccessModal>
  );

  // Step 2: OTP Verification
  const renderOtpStep = () => (
    <Fade in={true}>
      <Box>
        <LogoSection>
          <Logo>L</Logo>
          <Typography
            sx={{ fontSize: "20px", fontWeight: 700, color: colors.gray900 }}
          >
            LoopTrack
          </Typography>
        </LogoSection>

        <Box sx={{ textAlign: "center", marginBottom: "32px" }}>
          <MailIcon />
          <Typography
            variant="h4"
            sx={{
              fontSize: "24px",
              fontWeight: 700,
              color: colors.gray900,
              marginBottom: "8px",
            }}
          >
            Check your email
          </Typography>
          <Typography
            sx={{
              fontSize: "16px",
              color: colors.gray600,
              lineHeight: 1.5,
            }}
          >
            We sent a verification code to
          </Typography>
          <Typography
            sx={{
              fontSize: "16px",
              fontWeight: 600,
              color: colors.gray900,
              marginTop: "4px",
            }}
          >
            {signupData.email}
          </Typography>
        </Box>

        {error && (
          <Alert
            severity="error"
            sx={{ marginBottom: "24px", borderRadius: "8px" }}
          >
            {error}
          </Alert>
        )}

        <form onSubmit={handleOtpVerification}>
          <Stack spacing={3}>
            <Box>
              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: 500,
                  color: colors.gray700,
                  marginBottom: "8px",
                  textAlign: "center",
                }}
              >
                Enter verification code
              </Typography>
              <OtpTextField
                fullWidth
                value={otp}
                onChange={(e) => {
                  const value = e.target.value.slice(0, 6);
                  setOtp(value);
                }}
                placeholder="000000"
                inputProps={{
                  maxLength: 6,
                }}
              />
            </Box>

            <ContinueButton
              type="submit"
              fullWidth
              variant="contained"
              disabled={isLoading || otp.length !== 6}
            >
              {isLoading ? "Verifying..." : "Verify Email"}
            </ContinueButton>
          </Stack>
        </form>

        <Box sx={{ textAlign: "center", marginTop: "24px" }}>
          <Typography
            sx={{
              fontSize: "14px",
              color: colors.gray600,
              marginBottom: "8px",
            }}
          >
            Didn't receive the code?
          </Typography>
          <ResendButton onClick={handleResendOtp} disabled={resendCooldown > 0}>
            {resendCooldown > 0
              ? `Resend in ${resendCooldown}s`
              : "Resend code"}
          </ResendButton>
        </Box>

        <Typography
          sx={{
            textAlign: "center",
            marginTop: "16px",
            fontSize: "14px",
            color: colors.gray600,
          }}
        >
          Want to change email?{" "}
          <Link
            onClick={() => setStep(1)}
            sx={{
              color: colors.blue600,
              textDecoration: "none",
              fontWeight: 500,
              cursor: "pointer",
              "&:hover": { textDecoration: "underline" },
            }}
          >
            Go back
          </Link>
        </Typography>
      </Box>
    </Fade>
  );

  return (
    <>
      <SignupContainer>
        <Box sx={{ width: "100%", maxWidth: "500px", position: "relative" }}>
          <SignupCard>
            <CardContent sx={{ padding: "48px 40px" }}>
              {step === 1 ? renderSignupStep() : renderOtpStep()}
            </CardContent>
          </SignupCard>

          <FooterContainer>
            <Typography sx={{ fontSize: "12px" }}>© articraft 2025</Typography>
                    <Typography sx={{ fontSize: "12px" }}>help@articraft.io</Typography>
          </FooterContainer>
        </Box>
      </SignupContainer>

      {/* Success Modal */}
      {renderSuccessModal()}
    </>
  );
};
