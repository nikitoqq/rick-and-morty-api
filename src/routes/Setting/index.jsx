import { Switch } from "@mui/material";
import { SettingMainBox, SettingMainRowBox, SettingTypography } from "./styled";
import { useState } from "react";

export const Setting = () => {

    const [Theme, setTheme] = useState("Black")

    const switchChange = () => {
        setTheme()
    }

  return (
    <SettingMainBox>
      <SettingMainRowBox>
        <SettingTypography>Change Theme</SettingTypography>
        <Switch onChange={switchChange}/>
      </SettingMainRowBox>
    </SettingMainBox>
  );
};
