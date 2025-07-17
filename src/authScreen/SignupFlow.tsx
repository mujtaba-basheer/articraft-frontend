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
  Chip,
  Fade,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { colors } from "../styles/colors";

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
  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
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
  background: `linear-gradient(135deg, ${colors.blue500} 0%, ${colors.blue600} 100%)`,
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

const ContinueButton = styled(Button)(() => ({
  height: "48px",
  borderRadius: "8px",
  fontSize: "14px",
  fontWeight: 600,
  textTransform: "none",
  background: `linear-gradient(135deg, ${colors.blue500} 0%, ${colors.blue600} 100%)`,
  boxShadow: "0 4px 12px 0 rgba(59, 130, 246, 0.15)",
  "&:hover": {
    background: `linear-gradient(135deg, ${colors.blue600} 0%, ${colors.blue700} 100%)`,
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

const SelectableCard = styled(Card)<{ selected?: boolean }>(({ selected }) => ({
  padding: "20px",
  borderRadius: "12px",
  border: selected ? `2px solid ${colors.blue500}` : `1px solid ${colors.gray200}`,
  backgroundColor: selected ? colors.blue50 : colors.baseWhite,
  cursor: "pointer",
  transition: "all 0.2s ease",
  "&:hover": {
    borderColor: colors.blue300,
    backgroundColor: selected ? colors.blue50 : colors.gray50,
  },
}));

const IntegrationCard = styled(Box)<{ connected?: boolean }>(({ connected }) => ({
  padding: "24px",
  borderRadius: "12px",
  border: connected ? `2px solid ${colors.green500}` : `2px dashed ${colors.gray300}`,
  backgroundColor: connected ? colors.green50 : colors.baseWhite,
  textAlign: "center",
  position: "relative",
  transition: "all 0.2s ease",
  minHeight: "120px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
}));

const ProgressDots = styled(Box)(() => ({
  display: "flex",
  justifyContent: "center",
  gap: "8px",
  marginBottom: "24px",
}));

const Dot = styled(Box)<{ active?: boolean }>(({ active }) => ({
  width: "8px",
  height: "8px",
  borderRadius: "50%",
  backgroundColor: active ? colors.blue500 : colors.gray300,
  transition: "all 0.2s ease",
}));

const FooterContainer = styled(Box)(() => ({
 position: "fixed",
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

const CheckIcon = () => (
  <Box
    component="svg"
    sx={{ width: 16, height: 16, color: colors.green600 }}
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
  </Box>
);

const AddIcon = () => (
  <Box
    component="svg"
    sx={{ width: 24, height: 24, color: colors.gray400 }}
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
  </Box>
);

const UserIcon = () => (
  <Box
    component="svg"
    sx={{ width: 24, height: 24, color: colors.gray600 }}
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
  </Box>
);

// Step interfaces
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

interface SignupFlowProps {
  onSignup: (data: SignupData) => void;
  onBackToLogin: () => void;
}

export const SignupFlow = ({ onSignup, onBackToLogin }: SignupFlowProps) => {
  const [step, setStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  
  const [signupData, setSignupData] = useState<SignupData>({
    name: "",
    email: "",
    password: "",
    organizationGoal: "",
    selectedChannels: [],
    setupType: "",
    organizationName: "",
    organizationDescription: "",
  });

  const totalSteps = 6;

  const organizationGoals = [
    "Increase E-Commerce Sales",
    "Boost Brand Awareness",
    "Generate Leads",
    "App installs"
  ];

  const adChannels = [
    { name: "Google ads", icon: "🔍", color: "#4285F4" },
    { name: "Meta ads", icon: "📘", color: "#1877F2", selected: true },
    { name: "Snapchat ads", icon: "👻", color: "#FFFC00" },
    { name: "TikTok ads", icon: "🎵", color: "#000000" },
    { name: "LinkedIn ads", icon: "💼", color: "#0077B5" },
    { name: "Others", icon: "•••", color: "#6B7280" }
  ];

  const integrations = [
    { name: "Shopify", icon: "🛍️", connected: true },
    { name: "Meta", icon: "📘", connected: false },
    { name: "Google Ads", icon: "🔍", connected: false },
    { name: "Google Analytics 4", icon: "📊", connected: false },
    { name: "TikTok", icon: "🎵", connected: false },
    { name: "Amazon Ads", icon: "📦", connected: false }
  ];

  const setupTypes = [
    { id: "self", label: "Self", icon: <UserIcon /> },
    { id: "team", label: "Team", icon: <UserIcon />, selected: true },
    { id: "client", label: "Client", icon: <UserIcon /> }
  ];

  const handleNext = () => {
    if (step < totalSteps) {
      setStep(step + 1);
    } else {
      handleSubmit();
    }
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    setError("");

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    try {
      onSignup(signupData);
    } catch (err) {
      setError("Something went wrong. Please try again.");
    }

    setIsLoading(false);
  };

  const handleGoogleSignup = () => {
    onSignup({
      name: "Google User",
      email: "user@gmail.com",
      password: "",
      organizationGoal: "Increase E-Commerce Sales",
      selectedChannels: ["Meta ads"],
      setupType: "team",
      organizationName: "Google Company",
      organizationDescription: "A company that signed up with Google"
    });
  };

  const updateSignupData = (updates: Partial<SignupData>) => {
    setSignupData(prev => ({ ...prev, ...updates }));
  };

  // Step 1: Create Account
  const renderStep1 = () => (
    <Fade in={true}>
      <Box>
        <LogoSection>
          <Logo>L</Logo>
          <Typography sx={{ fontSize: "20px", fontWeight: 700, color: colors.gray900 }}>
            LoopTrack
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
          <Alert severity="error" sx={{ marginBottom: "24px", borderRadius: "8px" }}>
            {error}
          </Alert>
        )}

        <Stack spacing={3}>
          <StyledTextField
            fullWidth
            label="Name*"
            value={signupData.name}
            onChange={(e) => updateSignupData({ name: e.target.value })}
            placeholder="Enter your name"
            required
          />

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
            <Typography sx={{ fontSize: "12px", color: colors.gray500, mt: 1 }}>
              Must be at least 8 characters.
            </Typography>
          </Box>

          <ContinueButton
            fullWidth
            variant="contained"
            onClick={handleNext}
            disabled={!signupData.name || !signupData.email || signupData.password.length < 8}
          >
            Get Started
          </ContinueButton>

          <GoogleButton
            fullWidth
            variant="outlined"
            onClick={handleGoogleSignup}
          >
            <GoogleIcon />
            Sign up with Google
          </GoogleButton>
        </Stack>

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

  // Step 2: Choose Organization Goal
  const renderStep2 = () => (
    <Fade in={true}>
      <Box>
        <ProgressDots>
          {[...Array(totalSteps)].map((_, i) => (
            <Dot key={i} active={i === 0} />
          ))}
        </ProgressDots>

        <Typography
          variant="h4"
          sx={{
            fontSize: "28px",
            fontWeight: 700,
            color: colors.gray900,
            textAlign: "center",
            marginBottom: "16px",
          }}
        >
          Choose Your Organization Goal
        </Typography>

        <Typography
          sx={{
            fontSize: "16px",
            color: colors.gray600,
            textAlign: "center",
            marginBottom: "32px",
            lineHeight: 1.5,
          }}
        >
          Select the primary goal for your organization to tailor your dashboard and integrations. You can switch between Ecommerce Sales & Lead Generation anytime, ensuring you have the tools & insights you need.
        </Typography>

        <Stack spacing={2} sx={{ marginBottom: "32px" }}>
          {organizationGoals.map((goal) => (
            <SelectableCard
              key={goal}
              selected={signupData.organizationGoal === goal}
              onClick={() => updateSignupData({ organizationGoal: goal })}
            >
              <Typography
                sx={{
                  fontSize: "16px",
                  fontWeight: 500,
                  color: colors.gray800,
                  textAlign: "center",
                }}
              >
                {goal}
              </Typography>
            </SelectableCard>
          ))}
        </Stack>

        <ContinueButton
          fullWidth
          variant="contained"
          onClick={handleNext}
          disabled={!signupData.organizationGoal}
          endIcon={<Box component="span" sx={{ fontSize: "16px" }}>→</Box>}
        >
          Continue
        </ContinueButton>
      </Box>
    </Fade>
  );

  // Step 3: Select Channels
  const renderStep3 = () => (
    <Fade in={true}>
      <Box>
        <ProgressDots>
          {[...Array(totalSteps)].map((_, i) => (
            <Dot key={i} active={i === 1} />
          ))}
        </ProgressDots>

        <Typography
          variant="h4"
          sx={{
            fontSize: "24px",
            fontWeight: 700,
            color: colors.gray900,
            textAlign: "center",
            marginBottom: "16px",
          }}
        >
          Which paid media channels do you use for your digital marketing needs?
        </Typography>

        <Typography
          sx={{
            fontSize: "16px",
            color: colors.gray600,
            textAlign: "center",
            marginBottom: "32px",
          }}
        >
          This insight assists us in integrating LoopTrack seamlessly with your existing marketing channels.
        </Typography>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "16px",
            marginBottom: "32px",
          }}
        >
          {adChannels.map((channel) => (
            <SelectableCard
              key={channel.name}
              selected={signupData.selectedChannels.includes(channel.name)}
              onClick={() => {
                const isSelected = signupData.selectedChannels.includes(channel.name);
                if (isSelected) {
                  updateSignupData({
                    selectedChannels: signupData.selectedChannels.filter(c => c !== channel.name)
                  });
                } else {
                  updateSignupData({
                    selectedChannels: [...signupData.selectedChannels, channel.name]
                  });
                }
              }}
            >
              <Stack alignItems="center" spacing={1}>
                <Box sx={{ fontSize: "24px" }}>{channel.icon}</Box>
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: 500,
                    color: colors.gray800,
                  }}
                >
                  {channel.name}
                </Typography>
              </Stack>
            </SelectableCard>
          ))}
        </Box>

        <ContinueButton
          fullWidth
          variant="contained"
          onClick={handleNext}
          disabled={signupData.selectedChannels.length === 0}
          endIcon={<Box component="span" sx={{ fontSize: "16px" }}>→</Box>}
        >
          Continue
        </ContinueButton>
      </Box>
    </Fade>
  );

  // Step 4: Setup Progress
  const renderStep4 = () => (
    <Fade in={true}>
      <Box>
        <ProgressDots>
          {[...Array(totalSteps)].map((_, i) => (
            <Dot key={i} active={i === 2} />
          ))}
        </ProgressDots>

        <Box sx={{ textAlign: "center", marginBottom: "24px" }}>
          <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 1, mb: 2 }}>
            <Box
              component="span"
              sx={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                backgroundColor: colors.blue500,
                animation: "pulse 1.5s ease-in-out infinite",
                "@keyframes pulse": {
                  "0%": {
                    transform: "scale(0.95)",
                    opacity: 1,
                  },
                  "50%": {
                    transform: "scale(1.05)",
                    opacity: 0.7,
                  },
                  "100%": {
                    transform: "scale(0.95)",
                    opacity: 1,
                  },
                },
              }}
            />
            <Typography sx={{ fontSize: "14px", color: colors.blue600, fontWeight: 500 }}>
              Waiting for connections
            </Typography>
          </Box>
        </Box>

        <Typography
          variant="h4"
          sx={{
            fontSize: "24px",
            fontWeight: 700,
            color: colors.gray900,
            textAlign: "center",
            marginBottom: "16px",
          }}
        >
          You're almost ready to use Strique to its fullest!
        </Typography>

        <Typography
          sx={{
            fontSize: "16px",
            color: colors.gray600,
            textAlign: "center",
            marginBottom: "32px",
            lineHeight: 1.5,
          }}
        >
          Integrate with marketing tools such as Google Ads, Meta Ads, and other platforms that apply. We will notify you once the authentication is complete
        </Typography>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "16px",
            marginBottom: "32px",
          }}
        >
          {integrations.map((integration) => (
            <IntegrationCard key={integration.name} connected={integration.connected}>
              {integration.connected && (
                <Chip
                  label="Connected"
                  size="small"
                  icon={<CheckIcon />}
                  sx={{
                    position: "absolute",
                    top: "8px",
                    right: "8px",
                    backgroundColor: colors.green100,
                    color: colors.green700,
                    fontSize: "10px",
                    height: "20px",
                  }}
                />
              )}
              
              <Box sx={{ fontSize: "32px", marginBottom: "8px" }}>
                {integration.icon}
              </Box>
              
              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: 500,
                  color: colors.gray800,
                }}
              >
                {integration.name}
              </Typography>
              
              {!integration.connected && (
                <IconButton
                  sx={{
                    position: "absolute",
                    bottom: "8px",
                    right: "8px",
                    backgroundColor: colors.gray100,
                    width: "32px",
                    height: "32px",
                    "&:hover": {
                      backgroundColor: colors.gray200,
                    },
                  }}
                >
                  <AddIcon />
                </IconButton>
              )}
            </IntegrationCard>
          ))}
        </Box>

        <ContinueButton
          fullWidth
          variant="contained"
          onClick={handleNext}
          endIcon={<Box component="span" sx={{ fontSize: "16px" }}>→</Box>}
        >
          Finish Setup
        </ContinueButton>
      </Box>
    </Fade>
  );

  // Step 5: Setup Type
  const renderStep5 = () => (
    <Fade in={true}>
      <Box>
        <ProgressDots>
          {[...Array(totalSteps)].map((_, i) => (
            <Dot key={i} active={i === 3} />
          ))}
        </ProgressDots>

        <Box sx={{ textAlign: "right", marginBottom: "16px" }}>
          <Link
            onClick={handleNext}
            sx={{
              fontSize: "14px",
              color: colors.gray600,
              textDecoration: "none",
              cursor: "pointer",
              "&:hover": { textDecoration: "underline" },
            }}
          >
            Skip →
          </Link>
        </Box>

        <Typography
          variant="h4"
          sx={{
            fontSize: "24px",
            fontWeight: 700,
            color: colors.gray900,
            textAlign: "center",
            marginBottom: "16px",
          }}
        >
          Who are you setting up LoopTrack for?
        </Typography>

        <Typography
          sx={{
            fontSize: "16px",
            color: colors.gray600,
            textAlign: "center",
            marginBottom: "32px",
          }}
        >
          Knowing this enables us to optimize LoopTrack for your preferences better
        </Typography>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: "16px",
            marginBottom: "32px",
          }}
        >
          {setupTypes.map((type) => (
            <SelectableCard
              key={type.id}
              selected={signupData.setupType === type.id}
              onClick={() => updateSignupData({ setupType: type.id })}
            >
              <Stack alignItems="center" spacing={2}>
                {type.icon}
                <Typography
                  sx={{
                    fontSize: "16px",
                    fontWeight: 500,
                    color: colors.gray800,
                  }}
                >
                  {type.label}
                </Typography>
              </Stack>
            </SelectableCard>
          ))}
        </Box>

        <ContinueButton
          fullWidth
          variant="contained"
          onClick={handleNext}
          endIcon={<Box component="span" sx={{ fontSize: "16px" }}>→</Box>}
        >
          Continue
        </ContinueButton>
      </Box>
    </Fade>
  );

  // Step 6: Organization Details
  const renderStep6 = () => (
    <Fade in={true}>
      <Box>
        <ProgressDots>
          {[...Array(totalSteps)].map((_, i) => (
            <Dot key={i} active={i === 4} />
          ))}
        </ProgressDots>

        <Typography
          variant="h4"
          sx={{
            fontSize: "24px",
            fontWeight: 700,
            color: colors.gray900,
            textAlign: "center",
            marginBottom: "16px",
          }}
        >
          Tell us about your organisation
        </Typography>

        <Typography
          sx={{
            fontSize: "16px",
            color: colors.gray600,
            textAlign: "center",
            marginBottom: "32px",
          }}
        >
          Sharing a bit about your company helps us align LoopTrack with your brand identity and values.
        </Typography>

        <Stack spacing={3}>
          <StyledTextField
            fullWidth
            label="Organisation's Name *"
            value={signupData.organizationName}
            onChange={(e) => updateSignupData({ organizationName: e.target.value })}
            placeholder="Enter your answer"
            required
          />

          <StyledTextField
            fullWidth
            multiline
            rows={4}
            value={signupData.organizationDescription}
            onChange={(e) => updateSignupData({ organizationDescription: e.target.value })}
            placeholder="Write a description, this helps us serve you better"
            sx={{
              "& .MuiOutlinedInput-root": {
                alignItems: "flex-start",
              },
            }}
          />

          <Box>
            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: 500,
                color: colors.gray700,
                marginBottom: "8px",
              }}
            >
              Brand Logo
            </Typography>
            <Box
              sx={{
                border: `2px dashed ${colors.gray300}`,
                borderRadius: "8px",
                padding: "24px",
                textAlign: "center",
                backgroundColor: colors.gray50,
                cursor: "pointer",
                "&:hover": {
                  borderColor: colors.gray400,
                  backgroundColor: colors.gray100,
                },
              }}
              onClick={() => {
                const input = document.createElement('input');
                input.type = 'file';
                input.accept = 'image/*';
                input.onchange = (e) => {
                  const file = (e.target as HTMLInputElement).files?.[0];
                  if (file) {
                    updateSignupData({ brandLogo: file });
                  }
                };
                input.click();
              }}
            >
              <Typography sx={{ fontSize: "14px", color: colors.gray600 }}>
                {signupData.brandLogo ? signupData.brandLogo.name : "No File Chosen"}
              </Typography>
            </Box>
            <Typography sx={{ fontSize: "12px", color: colors.gray500, mt: 1 }}>
              jpg/ png/ jpeg files are accepted, maximum limit is 2 MB
            </Typography>
          </Box>
        </Stack>

        <Box sx={{ marginTop: "32px" }}>
          <ContinueButton
            fullWidth
            variant="contained"
            onClick={handleSubmit}
            disabled={!signupData.organizationName || isLoading}
            endIcon={<Box component="span" sx={{ fontSize: "16px" }}>→</Box>}
          >
            {isLoading ? "Creating Account..." : "Continue"}
          </ContinueButton>
        </Box>
      </Box>
    </Fade>
  );

  const renderCurrentStep = () => {
    switch (step) {
      case 1:
        return renderStep1();
      case 2:
        return renderStep2();
      case 3:
        return renderStep3();
      case 4:
        return renderStep4();
      case 5:
        return renderStep5();
      case 6:
        return renderStep6();
      default:
        return renderStep1();
    }
  };

  return (
    <SignupContainer>
      <Box sx={{ width: "100%", maxWidth: "500px", position: "relative" }}>
        <SignupCard>
          <CardContent sx={{ padding: "48px 40px" }}>
            {renderCurrentStep()}
          </CardContent>
        </SignupCard>

        <FooterContainer>
          <Typography sx={{ fontSize: "12px" }}>
            © LoopTrack 2025
          </Typography>
          <Typography sx={{ fontSize: "12px" }}>
            help@looptrack.ai
          </Typography>
        </FooterContainer>
      </Box>
    </SignupContainer>
  );
};