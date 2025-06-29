import {
  AssessmentOutlined,
  AdsClick,
  PaidOutlined,
  SummarizeOutlined,
  AutoGraph,
  PeopleOutline,
  ElectricBoltOutlined,
  ConstructionOutlined,
  PolylineOutlined,
} from "@mui/icons-material";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const iconNames = [
  "AssessmentOutlined",
  "AdsClick",
  "PaidOutlined",
  "SummarizeOutlined",
  "AutoGraph",
  "PeopleOutline",
  "ElectricBoltOutlined",
  "ConstructionOutlined",
  "PolylineOutlined",
] as const;

export type IconNameT = (typeof iconNames)[number];

export type IconProps = {
  name: IconNameT;
};

export const Icon = (props: IconProps) => {
  switch (props.name) {
    case "AssessmentOutlined": {
      return <AssessmentOutlined />;
    }
    case "AdsClick": {
      return <AdsClick />;
    }
    case "PaidOutlined": {
      return <PaidOutlined />;
    }
    case "SummarizeOutlined": {
      return <SummarizeOutlined />;
    }
    case "AutoGraph": {
      return <AutoGraph />;
    }
    case "PeopleOutline": {
      return <PeopleOutline />;
    }
    case "ElectricBoltOutlined": {
      return <ElectricBoltOutlined />;
    }
    case "ConstructionOutlined": {
      return <ConstructionOutlined />;
    }
    case "PolylineOutlined": {
      return <PolylineOutlined />;
    }
  }
};
