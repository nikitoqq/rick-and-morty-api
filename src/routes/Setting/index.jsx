import { useDispatch } from "react-redux";

import { Switch } from "@mui/material";
import { SettingMainBox, SettingMainRowBox, SettingTypography } from "./styled";

import { changeTheme } from "../../toolkitRedux/toolkitSlice";

export const Setting = () => {
  const dispatch = useDispatch();

  return (
    <SettingMainBox>
      <SettingMainRowBox>
        <SettingTypography>Change Theme</SettingTypography>
        <Switch
          onChange={(e) => {
            dispatch(
              changeTheme(e.target.checked === false ? "dark" : "light")
            );
          }}
        />
      </SettingMainRowBox>
    </SettingMainBox>
  );
};
