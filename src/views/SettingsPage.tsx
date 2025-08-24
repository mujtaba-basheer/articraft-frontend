import React, { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Stack,
  Button,
  TextField,
  Avatar,
  Tab,
  Tabs,
  Switch,
  FormControlLabel,
  Divider,
  IconButton,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { colors } from "../styles";

// Styled components
const SettingsContainer = styled(Box)(() => ({
  padding: "24px",
  backgroundColor: "#fafbfc",
  minHeight: "100vh",
  fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
}));

const SettingsCard = styled(Card)(() => ({
  borderRadius: "12px",
  border: `1px solid ${colors.gray200}`,
  boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.08)",
  backgroundColor: colors.baseWhite,
  marginBottom: "24px",
}));

const SaveButton = styled(Button)(() => ({
  height: "44px",
  borderRadius: "8px",
  fontSize: "14px",
  fontWeight: 600,
  textTransform: "none",
  padding: "12px 32px",
  background: colors.blue500,
  color: colors.baseWhite,
  "&:hover": {
    background: colors.blue600,
  },
}));

const UpdateButton = styled(Button)(() => ({
  height: "44px",
  borderRadius: "8px",
  fontSize: "14px",
  fontWeight: 600,
  textTransform: "none",
  padding: "12px 32px",
  background: colors.blue500,
  color: colors.baseWhite,
  "&:hover": {
    background: colors.blue600,
  },
}));

const ChangeAvatarButton = styled(Button)(() => ({
  fontSize: "14px",
  fontWeight: 500,
  textTransform: "none",
  color: colors.gray700,
  backgroundColor: "transparent",
  padding: "0",
  "&:hover": {
    backgroundColor: "transparent",
    textDecoration: "underline",
  },
}));

const StyledTextField = styled(TextField)(() => ({
  "& .MuiOutlinedInput-root": {
    borderRadius: "8px",
    backgroundColor: colors.baseWhite,
    "& fieldset": {
      borderColor: colors.gray300,
    },
    "&:hover fieldset": {
      borderColor: colors.gray400,
    },
    "&.Mui-focused fieldset": {
      borderColor: colors.blue500,
      borderWidth: "2px",
    },
  },
  "& .MuiInputLabel-root": {
    color: colors.gray600,
  },
}));



const GridLayout = styled(Box)(() => ({
  display: "grid",
  gap: "24px",
  gridTemplateColumns: "1fr",
  "@media (min-width: 640px)": {
    gridTemplateColumns: "1fr 1fr",
  },
}));

const SecurityIcon = () => (
  <Box sx={{ fontSize: "24px", mr: 2 }}>🔐</Box>
);

const ProfileIcon = () => (
  <Box sx={{ fontSize: "24px", mr: 2 }}>👤</Box>
);

const NotificationIcon = () => (
  <Box sx={{ fontSize: "24px", mr: 2 }}>🔔</Box>
);

const BillingIcon = () => (
  <Box sx={{ fontSize: "24px", mr: 2 }}>💳</Box>
);

const TeamIcon = () => (
  <Box sx={{ fontSize: "24px", mr: 2 }}>👥</Box>
);

const PreferencesIcon = () => (
  <Box sx={{ fontSize: "24px", mr: 2 }}>⚙️</Box>
);

export default function SettingsPage() {
  const [selectedTab, setSelectedTab] = useState(0);
  const [formData, setFormData] = useState({
    firstName: "John",
    lastName: "Doe",
    email: "john@example.com",
    company: "Acme Inc.",
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [notifications, setNotifications] = useState({
    emailNotifications: true,
    pushNotifications: false,
    marketingEmails: true,
    securityAlerts: true,
  });

  const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
    setSelectedTab(newValue);
  };

  const handleInputChange = (field: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [field]: event.target.value,
    }));
  };

  const handleNotificationChange = (field: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setNotifications(prev => ({
      ...prev,
      [field]: event.target.checked,
    }));
  };

  const handleSaveProfile = () => {
    console.log("Saving profile:", formData);
  };

  const handleUpdatePassword = () => {
    console.log("Updating password");
  };

  const handleAvatarChange = () => {
    console.log("Changing avatar");
  };

  return (
    <SettingsContainer>
      {/* Header */}
      

      {/* Navigation Tabs */}
      <Box sx={{ mb: 4 }}>
        <Tabs
          value={selectedTab}
          onChange={handleTabChange}
          variant="scrollable"
          scrollButtons="auto"
          sx={{
            borderBottom: `1px solid ${colors.gray200}`,
            "& .MuiTab-root": {
              textTransform: "none",
              fontWeight: 500,
              fontSize: "14px",
              color: colors.gray600,
              minHeight: "48px",
              "&.Mui-selected": {
                color: colors.gray900,
                fontWeight: 600,
              },
            },
            "& .MuiTabs-indicator": {
              backgroundColor: colors.gray900,
            },
          }}
        >
          <Tab 
            icon={<ProfileIcon />}
            iconPosition="start"
            label="Profile" 
          />
          <Tab 
            icon={<NotificationIcon />}
            iconPosition="start"
            label="Notifications" 
          />
          <Tab 
            icon={<BillingIcon />}
            iconPosition="start"
            label="Billing" 
          />
          <Tab 
            icon={<TeamIcon />}
            iconPosition="start"
            label="Team" 
          />
          <Tab 
            icon={<PreferencesIcon />}
            iconPosition="start"
            label="Preferences" 
          />
        </Tabs>
      </Box>

      {/* Profile Tab */}
      {selectedTab === 0 && (
        <Box>
          <SettingsCard>
            <CardContent sx={{ padding: "32px" }}>
              <Typography variant="h5" sx={{ fontWeight: 600, color: colors.gray900, mb: 1 }}>
                Profile Information
              </Typography>
              <Typography variant="body2" sx={{ color: colors.gray600, mb: 4 }}>
                Update your personal information and profile settings
              </Typography>

              {/* Avatar Section */}
              <Box sx={{ display: "flex", alignItems: "center", gap: 3, mb: 4 }}>
                <Avatar
                  sx={{
                    width: 80,
                    height: 80,
                    backgroundColor: colors.gray200,
                    fontSize: "24px",
                    color: colors.gray600,
                  }}
                >
                  JD
                </Avatar>
                <Box>
                  <ChangeAvatarButton onClick={handleAvatarChange}>
                    Change Avatar
                  </ChangeAvatarButton>
                  <Typography variant="body2" sx={{ color: colors.gray500, mt: 0.5 }}>
                    JPG, GIF or PNG. 1MB max.
                  </Typography>
                </Box>
              </Box>

              {/* Form Fields */}
              <GridLayout sx={{ mb: 4 }}>
                <Box>
                  <Typography variant="body2" sx={{ color: colors.gray700, mb: 1, fontWeight: 500 }}>
                    First Name
                  </Typography>
                  <StyledTextField
                    fullWidth
                    variant="outlined"
                    value={formData.firstName}
                    onChange={handleInputChange("firstName")}
                    placeholder="Enter your first name"
                  />
                </Box>
                <Box>
                  <Typography variant="body2" sx={{ color: colors.gray700, mb: 1, fontWeight: 500 }}>
                    Last Name
                  </Typography>
                  <StyledTextField
                    fullWidth
                    variant="outlined"
                    value={formData.lastName}
                    onChange={handleInputChange("lastName")}
                    placeholder="Enter your last name"
                  />
                </Box>
              </GridLayout>

              <Box sx={{ mb: 4 }}>
                <Typography variant="body2" sx={{ color: colors.gray700, mb: 1, fontWeight: 500 }}>
                  Email
                </Typography>
                <StyledTextField
                  fullWidth
                  variant="outlined"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange("email")}
                  placeholder="Enter your email address"
                />
              </Box>

              <Box sx={{ mb: 4 }}>
                <Typography variant="body2" sx={{ color: colors.gray700, mb: 1, fontWeight: 500 }}>
                  Company
                </Typography>
                <StyledTextField
                  fullWidth
                  variant="outlined"
                  value={formData.company}
                  onChange={handleInputChange("company")}
                  placeholder="Enter your company name"
                />
              </Box>

              <SaveButton onClick={handleSaveProfile}>
                Save Changes
              </SaveButton>
            </CardContent>
          </SettingsCard>

          {/* Security Section */}
          <SettingsCard>
            <CardContent sx={{ padding: "32px" }}>
              <Typography variant="h5" sx={{ fontWeight: 600, color: colors.gray900, mb: 1 }}>
                Security
              </Typography>
              <Typography variant="body2" sx={{ color: colors.gray600, mb: 4 }}>
                Manage your password and security settings
              </Typography>

              {/* Password Fields */}
              <Box sx={{ mb: 4 }}>
                <Typography variant="body2" sx={{ color: colors.gray700, mb: 1, fontWeight: 500 }}>
                  Current Password
                </Typography>
                <StyledTextField
                  fullWidth
                  variant="outlined"
                  type="password"
                  value={formData.currentPassword}
                  onChange={handleInputChange("currentPassword")}
                  placeholder="Enter your current password"
                  sx={{ mb: 3 }}
                />
              </Box>

              <Box sx={{ mb: 4 }}>
                <Typography variant="body2" sx={{ color: colors.gray700, mb: 1, fontWeight: 500 }}>
                  New Password
                </Typography>
                <StyledTextField
                  fullWidth
                  variant="outlined"
                  type="password"
                  value={formData.newPassword}
                  onChange={handleInputChange("newPassword")}
                  placeholder="Enter your new password"
                  sx={{ mb: 3 }}
                />
              </Box>

              <Box sx={{ mb: 4 }}>
                <Typography variant="body2" sx={{ color: colors.gray700, mb: 1, fontWeight: 500 }}>
                  Confirm New Password
                </Typography>
                <StyledTextField
                  fullWidth
                  variant="outlined"
                  type="password"
                  value={formData.confirmPassword}
                  onChange={handleInputChange("confirmPassword")}
                  placeholder="Confirm your new password"
                />
              </Box>

              {/* Two-Factor Authentication */}
             
              <UpdateButton onClick={handleUpdatePassword}>
                Update Password
              </UpdateButton>
            </CardContent>
          </SettingsCard>
        </Box>
      )}

      {/* Notifications Tab */}
      {selectedTab === 1 && (
        <SettingsCard>
          <CardContent sx={{ padding: "32px" }}>
            <Typography variant="h5" sx={{ fontWeight: 600, color: colors.gray900, mb: 1 }}>
              Notification Preferences
            </Typography>
            <Typography variant="body2" sx={{ color: colors.gray600, mb: 4 }}>
              Choose how you want to be notified about updates and changes
            </Typography>

            <Stack spacing={3}>
              <Box>
                <FormControlLabel
                  control={
                    <Switch
                      checked={notifications.emailNotifications}
                      onChange={handleNotificationChange("emailNotifications")}
                      sx={{
                        "& .MuiSwitch-switchBase.Mui-checked": {
                          color: colors.blue500,
                        },
                        "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
                          backgroundColor: colors.blue500,
                        },
                      }}
                    />
                  }
                  label={
                    <Box>
                      <Typography variant="body1" sx={{ fontWeight: 500, color: colors.gray900 }}>
                        Email Notifications
                      </Typography>
                      <Typography variant="body2" sx={{ color: colors.gray600 }}>
                        Receive email updates about your account activity
                      </Typography>
                    </Box>
                  }
                />
              </Box>

              <Divider />

              <Box>
                <FormControlLabel
                  control={
                    <Switch
                      checked={notifications.pushNotifications}
                      onChange={handleNotificationChange("pushNotifications")}
                      sx={{
                        "& .MuiSwitch-switchBase.Mui-checked": {
                          color: colors.blue500,
                        },
                        "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
                          backgroundColor: colors.blue500,
                        },
                      }}
                    />
                  }
                  label={
                    <Box>
                      <Typography variant="body1" sx={{ fontWeight: 500, color: colors.gray900 }}>
                        Push Notifications
                      </Typography>
                      <Typography variant="body2" sx={{ color: colors.gray600 }}>
                        Get push notifications on your device
                      </Typography>
                    </Box>
                  }
                />
              </Box>

              <Divider />

              <Box>
                <FormControlLabel
                  control={
                    <Switch
                      checked={notifications.marketingEmails}
                      onChange={handleNotificationChange("marketingEmails")}
                      sx={{
                        "& .MuiSwitch-switchBase.Mui-checked": {
                          color: colors.blue500,
                        },
                        "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
                          backgroundColor: colors.blue500,
                        },
                      }}
                    />
                  }
                  label={
                    <Box>
                      <Typography variant="body1" sx={{ fontWeight: 500, color: colors.gray900 }}>
                        Marketing Emails
                      </Typography>
                      <Typography variant="body2" sx={{ color: colors.gray600 }}>
                        Receive updates about new features and promotions
                      </Typography>
                    </Box>
                  }
                />
              </Box>

              <Divider />

              <Box>
                <FormControlLabel
                  control={
                    <Switch
                      checked={notifications.securityAlerts}
                      onChange={handleNotificationChange("securityAlerts")}
                      sx={{
                        "& .MuiSwitch-switchBase.Mui-checked": {
                          color: colors.blue500,
                        },
                        "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
                          backgroundColor: colors.blue500,
                        },
                      }}
                    />
                  }
                  label={
                    <Box>
                      <Typography variant="body1" sx={{ fontWeight: 500, color: colors.gray900 }}>
                        Security Alerts
                      </Typography>
                      <Typography variant="body2" sx={{ color: colors.gray600 }}>
                        Important security notifications (always enabled)
                      </Typography>
                    </Box>
                  }
                />
              </Box>
            </Stack>

            <Box sx={{ mt: 4 }}>
              <SaveButton>Save Preferences</SaveButton>
            </Box>
          </CardContent>
        </SettingsCard>
      )}

      {/* Placeholder tabs */}
      {selectedTab === 2 && (
        <SettingsCard>
          <CardContent sx={{ padding: "32px", textAlign: "center", py: 8 }}>
            <BillingIcon />
            <Typography variant="h6" sx={{ color: colors.gray600, mt: 2 }}>
              Billing settings coming soon...
            </Typography>
          </CardContent>
        </SettingsCard>
      )}

      {selectedTab === 3 && (
        <SettingsCard>
          <CardContent sx={{ padding: "32px", textAlign: "center", py: 8 }}>
            <TeamIcon />
            <Typography variant="h6" sx={{ color: colors.gray600, mt: 2 }}>
              Team management coming soon...
            </Typography>
          </CardContent>
        </SettingsCard>
      )}

      {selectedTab === 4 && (
        <SettingsCard>
          <CardContent sx={{ padding: "32px", textAlign: "center", py: 8 }}>
            <PreferencesIcon />
            <Typography variant="h6" sx={{ color: colors.gray600, mt: 2 }}>
              Preferences coming soon...
            </Typography>
          </CardContent>
        </SettingsCard>
      )}
    </SettingsContainer>
  );
}