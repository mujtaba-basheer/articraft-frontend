import AssessmentOutlinedIcon from "@mui/icons-material/AssessmentOutlined";

export type IconNameT = "AssessmentOutlined";

export type IconProps = {
  name: IconNameT;
};

export const Icon = (props: IconProps) => {
  switch (props.name) {
    case "AssessmentOutlined": {
      return <AssessmentOutlinedIcon />;
    }
  }
};
