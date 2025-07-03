import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import Chip from "@mui/material/Chip";
import Popover from "@mui/material/Popover";
import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";
import { styled } from "@mui/material/styles";
import { colors } from "../../styles/colors";
import { useState } from "react";

const HeaderContainer = styled(Box)(() => ({
  padding: "20px 32px",
  backgroundColor: colors.baseWhite,
  borderBottom: `1px solid ${colors.gray200}`,
}));

const SearchField = styled(TextField)(() => ({
  "& .MuiOutlinedInput-root": {
    backgroundColor: colors.baseWhite,
    borderRadius: "8px",
    fontSize: "14px",
    height: "40px",
    boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
    "& fieldset": {
      borderColor: colors.gray300,
    },
    "&:hover fieldset": {
      borderColor: colors.gray400,
    },
    "&.Mui-focused fieldset": {
      borderColor: colors.blue500,
      borderWidth: "2px",
      boxShadow: "0 0 0 3px rgba(59, 130, 246, 0.1)",
    },
  },
  "& .MuiInputBase-input": {
    padding: "10px 14px",
    fontSize: "14px",
    color: colors.gray700,
    "&::placeholder": {
      color: colors.gray500,
      opacity: 1,
    },
  },
}));

const DatePickerPopover = styled(Paper)(() => ({
  padding: "16px",
  minWidth: "320px",
  borderRadius: "8px",
  border: `1px solid ${colors.gray200}`,
  boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
}));

const DateInput = styled(TextField)(() => ({
  "& .MuiOutlinedInput-root": {
    backgroundColor: colors.baseWhite,
    borderRadius: "6px",
    fontSize: "14px",
    "& fieldset": {
      borderColor: colors.gray300,
    },
    "&:hover fieldset": {
      borderColor: colors.gray400,
    },
    "&.Mui-focused fieldset": {
      borderColor: colors.blue500,
      borderWidth: "1px",
    },
  },
  "& .MuiInputBase-input": {
    padding: "8px 12px",
    fontSize: "14px",
    color: colors.gray700,
  },
}));

const QuickDateButton = styled(Button)<{ selected?: boolean }>(({ selected }) => ({
  height: "32px",
  borderRadius: "6px",
  fontSize: "12px",
  fontWeight: 500,
  textTransform: "none",
  padding: "6px 12px",
  minWidth: "auto",
  backgroundColor: selected ? colors.blue50 : colors.baseWhite,
  color: selected ? colors.blue600 : colors.gray600,
  border: `1px solid ${selected ? colors.blue200 : colors.gray300}`,
  "&:hover": {
    backgroundColor: selected ? colors.blue100 : colors.gray50,
    border: `1px solid ${selected ? colors.blue300 : colors.gray400}`,
  },
}));
const TimeFilterChip = styled(Chip)<{ selected?: boolean }>(({ selected }) => ({
  height: "40px",
  borderRadius: "8px",
  fontSize: "14px",
  fontWeight: 500,
  border: `1px solid ${colors.gray300}`,
  backgroundColor: selected ? colors.gray100 : colors.baseWhite,
  color: selected ? colors.gray900 : colors.gray600,
  boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
  "&:hover": {
    backgroundColor: selected ? colors.gray200 : colors.gray50,
    boxShadow: "0 2px 4px 0 rgba(0, 0, 0, 0.1)",
  },
  "& .MuiChip-label": {
    paddingLeft: "16px",
    paddingRight: "16px",
    fontWeight: 500,
  },
}));

const ActionButton = styled(Button)<{ buttonType?: 'primary' | 'secondary' }>(({ buttonType }) => ({
  height: "40px",
  borderRadius: "8px",
  fontSize: "14px",
  fontWeight: 600,
  textTransform: "none",
  padding: "10px 20px",
  minWidth: "auto",
  letterSpacing: "0.025em",
  ...(buttonType === 'primary' ? {
    backgroundColor: colors.blue500,
    color: colors.baseWhite,
    border: `1px solid ${colors.blue500}`,
    boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
    "&:hover": {
      backgroundColor: colors.blue600,
      border: `1px solid ${colors.blue600}`,
      boxShadow: "0 2px 4px 0 rgba(0, 0, 0, 0.1)",
    },
  } : {
    backgroundColor: colors.baseWhite,
    color: colors.gray700,
    border: `1px solid ${colors.gray300}`,
    boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
    "&:hover": {
      backgroundColor: colors.gray50,
      border: `1px solid ${colors.gray400}`,
      boxShadow: "0 2px 4px 0 rgba(0, 0, 0, 0.1)",
    },
  }),
}));

// Search icon component
const SearchIcon = () => (
  <Box
    component="svg"
    sx={{ width: 16, height: 16, color: colors.gray400 }}
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
  </Box>
);

// Filter icon component
const FilterIcon = () => (
  <Box
    component="svg"
    sx={{ width: 16, height: 16, color: colors.gray600 }}
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M4.25 5.61C6.27 8.2 10 13 10 13v6c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-6s3.73-4.8 5.75-7.39c.51-.66.04-1.61-.79-1.61H5.04c-.83 0-1.3.95-.79 1.61z"/>
  </Box>
);

// Calendar icon component
const CalendarIcon = () => (
  <Box
    component="svg"
    sx={{ width: 16, height: 16, color: colors.gray600 }}
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/>
  </Box>
);

// Lightning icon for AI Insights
const LightningIcon = () => (
  <Box
    component="svg"
    sx={{ width: 16, height: 16, color: colors.baseWhite }}
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M7 2v11h3v9l7-12h-4l4-8z"/>
  </Box>
);

// Export icon
const ExportIcon = () => (
  <Box
    component="svg"
    sx={{ width: 16, height: 16, color: colors.gray600 }}
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M19 12v7H5v-7H3v7c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-7h-2zm-6 .67l2.59-2.58L17 11.5l-5 5-5-5 1.41-1.41L11 12.67V3h2z"/>
  </Box>
);

const timeFilters = ["24 Hours", "7 Days", "30 Days"] as const;

// Quick date options
const quickDateOptions = [
  { label: "Today", value: "today" },
  { label: "Last 7 days", value: "7days" },
  { label: "Last 30 days", value: "30days" },
  { label: "Last 90 days", value: "90days" },
  { label: "This month", value: "thismonth" },
  { label: "Last month", value: "lastmonth" },
] as const;

// Page configurations based on menu items
const pageConfigs = {
  "/": {
    title: "Dashboard",
    description: "AI-powered insights for your eCommerce performance"
  },
  "/analytics": {
    title: "Analytics",
    description: "Deep dive into your performance metrics and trends"
  },
  "/attribution": {
    title: "Attribution",
    description: "Track customer touchpoints and conversion paths"
  },
  "/revenue": {
    title: "Revenue",
    description: "Monitor revenue streams and financial performance"
  },
  "/reports": {
    title: "Reports",
    description: "Generate and customize detailed performance reports"
  },
  "/performance-hub": {
    title: "Performance Hub",
    description: "Centralized view of all key performance indicators"
  },
  "/customer-journey": {
    title: "Customer Journey",
    description: "Visualize and optimize customer experience paths"
  },
  "/ai-insights": {
    title: "AI Insights",
    description: "Machine learning powered recommendations and predictions"
  },
  "/dashboard-builder": {
    title: "Dashboard Builder",
    description: "Create and customize your personalized dashboards"
  },
  "/integrations": {
    title: "Integrations",
    description: "Connect and manage your third-party integrations"
  },
  "/support": {
    title: "Support",
    description: "Get help and access documentation resources"
  },
  "/settings": {
    title: "Settings",
    description: "Configure your account and application preferences"
  }
} as const;

type PagePath = keyof typeof pageConfigs;

interface DashboardHeaderProps {
  activePage?: PagePath;
}

export const DashboardHeader = ({ activePage = "/" }: DashboardHeaderProps) => {
  const [selectedTimeFilter, setSelectedTimeFilter] = useState("24 Hours");
  const [searchValue, setSearchValue] = useState("");
  const [datePickerAnchor, setDatePickerAnchor] = useState<HTMLElement | null>(null);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [selectedQuickDate, setSelectedQuickDate] = useState("Last 7 days");
  
  const currentPageConfig = pageConfigs[activePage] || pageConfigs["/"];

  // Format date to YYYY-MM-DD for input
  const formatDateForInput = (date: Date) => {
    return date.toISOString().split('T')[0];
  };

  // Get date range based on quick option
  const getDateRange = (option: typeof quickDateOptions[number]) => {
    const today = new Date();
    const endDate = new Date(today);
    let startDate = new Date(today);

    switch (option.value) {
      case "today":
        startDate = new Date(today);
        break;
      case "7days":
        startDate.setDate(today.getDate() - 6); // 7 days including today
        break;
      case "30days":
        startDate.setDate(today.getDate() - 29); // 30 days including today
        break;
      case "90days":
        startDate.setDate(today.getDate() - 89); // 90 days including today
        break;
      case "thismonth":
        startDate = new Date(today.getFullYear(), today.getMonth(), 1);
        break;
      case "lastmonth":
        startDate = new Date(today.getFullYear(), today.getMonth() - 1, 1);
        endDate.setMonth(today.getMonth(), 0); // Last day of previous month
        break;
      default:
        startDate.setDate(today.getDate() - 6); // Default to last 7 days
    }

    return {
      start: formatDateForInput(startDate),
      end: formatDateForInput(endDate)
    };
  };

  // Initialize with default date range
  useState(() => {
    const defaultRange = getDateRange({ label: "Last 7 days", value: "7days" });
    setStartDate(defaultRange.start);
    setEndDate(defaultRange.end);
  });

  const handleTimeFilterChange = (filter: string) => {
    setSelectedTimeFilter(filter);
    console.log(`Time filter changed to: ${filter}`);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const handleAdvancedFilters = () => {
    console.log("Opening advanced filters...");
  };

  const handleExportReport = () => {
    console.log("Exporting report...");
  };

  const handleAIInsights = () => {
    console.log("Opening AI Insights...");
  };

  const handleFilters = () => {
    console.log("Opening filters...");
  };

  const handleSelectDates = (event: React.MouseEvent<HTMLElement>) => {
    setDatePickerAnchor(event.currentTarget);
  };

  const handleCloseDatePicker = () => {
    setDatePickerAnchor(null);
  };

  const handleQuickDateSelect = (option: typeof quickDateOptions[number]) => {
    setSelectedQuickDate(option.label);
    const range = getDateRange(option);
    setStartDate(range.start);
    setEndDate(range.end);
    console.log(`Date range selected: ${option.label} (${range.start} to ${range.end})`);
  };

  const handleApplyDateRange = () => {
    console.log(`Custom date range applied: ${startDate} to ${endDate}`);
    handleCloseDatePicker();
  };

  const handleStartDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStartDate(event.target.value);
    setSelectedQuickDate(""); // Clear quick selection when manually changing dates
  };

  const handleEndDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEndDate(event.target.value);
    setSelectedQuickDate(""); // Clear quick selection when manually changing dates
  };

  return (
    <HeaderContainer>
      {/* Title Section */}
      <Stack spacing={3}>
        {/* Title and Top Action Buttons Row */}
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="flex-start"
          spacing={3}
        >
          {/* Left side - Title */}
          <Box sx={{ flex: 1 }}>
            <Typography
              variant="h4"
              sx={{
                fontSize: "32px",
                fontWeight: 700,
                color: colors.gray900,
                lineHeight: 1.2,
                marginBottom: "6px",
                letterSpacing: "-0.025em",
              }}
            >
              {currentPageConfig.title}
            </Typography>
            <Typography
              variant="body2"
              sx={{
                fontSize: "16px",
                color: colors.gray600,
                lineHeight: 1.5,
                maxWidth: "600px",
              }}
            >
              {currentPageConfig.description}
            </Typography>
          </Box>

          {/* Right side - Top Action Buttons */}
          <Stack direction="row" spacing={2} alignItems="flex-start" sx={{ flexShrink: 0 }}>
            {/* Advanced Filters */}
            <ActionButton
              buttonType="secondary"
              onClick={handleAdvancedFilters}
              startIcon={<FilterIcon />}
            >
              Advanced Filters
            </ActionButton>

            {/* Export Report */}
            <ActionButton
              buttonType="secondary"
              onClick={handleExportReport}
              startIcon={<ExportIcon />}
            >
              Export Report
            </ActionButton>

            {/* AI Insights */}
            <ActionButton
              buttonType="primary"
              onClick={handleAIInsights}
              startIcon={<LightningIcon />}
            >
              AI Insights
            </ActionButton>
          </Stack>
        </Stack>

        {/* Search and Filter Controls Section */}
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          spacing={3}
        >
          {/* Left side - Search */}
          <Box sx={{ flex: 1, maxWidth: "480px" }}>
            <SearchField
              placeholder="Search campaigns, insights or metrics"
              value={searchValue}
              onChange={handleSearchChange}
              size="small"
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Box>

          {/* Right side - Filter Controls */}
          <Stack direction="row" spacing={2.5} alignItems="center" sx={{ flexShrink: 0 }}>
            {/* Time Filters */}
            <Stack direction="row" spacing={1.5}>
              {timeFilters.map((filter) => (
                <TimeFilterChip
                  key={filter}
                  label={filter}
                  selected={selectedTimeFilter === filter}
                  onClick={() => handleTimeFilterChange(filter)}
                  clickable
                />
              ))}
            </Stack>

            {/* Date Selector */}
            <ActionButton
              buttonType="secondary"
              onClick={handleSelectDates}
              startIcon={<CalendarIcon />}
            >
              Select dates
            </ActionButton>

            {/* Filters */}
            <ActionButton
              buttonType="secondary"
              onClick={handleFilters}
              startIcon={<FilterIcon />}
            >
              Filters
            </ActionButton>
          </Stack>
        </Stack>

        {/* Date Picker Popover */}
        <Popover
          open={Boolean(datePickerAnchor)}
          anchorEl={datePickerAnchor}
          onClose={handleCloseDatePicker}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          sx={{ marginTop: 1 }}
        >
          <DatePickerPopover>
            <Typography
              variant="h6"
              sx={{
                fontSize: "16px",
                fontWeight: 600,
                color: colors.gray900,
                marginBottom: "12px",
              }}
            >
              Select Date Range
            </Typography>

            {/* Quick Date Options */}
            <Box sx={{ marginBottom: "16px" }}>
              <Typography
                variant="body2"
                sx={{
                  fontSize: "12px",
                  fontWeight: 500,
                  color: colors.gray600,
                  marginBottom: "8px",
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                }}
              >
                Quick Select
              </Typography>
              <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                {quickDateOptions.map((option) => (
                  <QuickDateButton
                    key={option.label}
                    selected={selectedQuickDate === option.label}
                    onClick={() => handleQuickDateSelect(option)}
                  >
                    {option.label}
                  </QuickDateButton>
                ))}
              </Stack>
            </Box>

            <Divider sx={{ marginBottom: "16px" }} />

            {/* Custom Date Range */}
            <Box sx={{ marginBottom: "16px" }}>
              <Typography
                variant="body2"
                sx={{
                  fontSize: "12px",
                  fontWeight: 500,
                  color: colors.gray600,
                  marginBottom: "8px",
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                }}
              >
                Custom Range
              </Typography>
              <Stack spacing={2}>
                <Box>
                  <Typography
                    variant="body2"
                    sx={{
                      fontSize: "12px",
                      color: colors.gray600,
                      marginBottom: "4px",
                    }}
                  >
                    Start Date
                  </Typography>
                  <DateInput
                    type="date"
                    value={startDate}
                    onChange={handleStartDateChange}
                    size="small"
                    fullWidth
                  />
                </Box>
                <Box>
                  <Typography
                    variant="body2"
                    sx={{
                      fontSize: "12px",
                      color: colors.gray600,
                      marginBottom: "4px",
                    }}
                  >
                    End Date
                  </Typography>
                  <DateInput
                    type="date"
                    value={endDate}
                    onChange={handleEndDateChange}
                    size="small"
                    fullWidth
                  />
                </Box>
              </Stack>
            </Box>

            {/* Action Buttons */}
            <Stack direction="row" spacing={2} justifyContent="flex-end">
              <Button
                onClick={handleCloseDatePicker}
                sx={{
                  color: colors.gray600,
                  fontSize: "14px",
                  textTransform: "none",
                  fontWeight: 500,
                }}
              >
                Cancel
              </Button>
              <ActionButton
                buttonType="primary"
                onClick={handleApplyDateRange}
                disabled={!startDate || !endDate}
              >
                Apply
              </ActionButton>
            </Stack>
          </DatePickerPopover>
        </Popover>
      </Stack>
    </HeaderContainer>
  );
};