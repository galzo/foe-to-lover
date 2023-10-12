import { Box } from "@mui/material";
import { FC, ReactNode } from "react";
import { AppColors } from "../consts/colors";

export const RootContainer: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        backgroundColor: AppColors.background,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {children}
    </Box>
  );
};
