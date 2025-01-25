import { useDispatch, useSelector } from "react-redux";

import { changeSettingInput } from "../../features/settingInput";
import { changeTheme } from "../../features/theme";

import { OfflinePage } from "../OfflinePage";

import { isOffline } from "../../utils/utils";

import { Switch } from "@mui/material";
import { SettingDescpiptionTypography, SettingMainBox, SettingMainRowBox, SettingTypography } from "./styled";
import { theme } from "../../theme";

export const Setting = () => {
  const dispatch = useDispatch();
  const [themeState, settingInput] = [
    useSelector((state) => state.persistedReducer.themes.themes),
    useSelector((state) => state.persistedReducer.settingInput.settingInput),
  ];

  const styled = {
    light: themeState.light,
    contrast: themeState.contrastText,
  };

  const change = (e) => {
    dispatch(
      changeTheme(
        e.target.checked === false
          ? theme.palette.primary
          : theme.palette.secondary
      )
    );
    dispatch(changeSettingInput());
  };

  return isOffline() ? (
    <OfflinePage />
  ) : (
    <SettingMainBox>
      <SettingMainRowBox>
        <SettingTypography color={styled.light}>
          Theme: 
        </SettingTypography>
        <SettingDescpiptionTypography color={styled.contrast}>
          dark / light
        </SettingDescpiptionTypography>
        <Switch checked={settingInput} onChange={change} />
      </SettingMainRowBox>
    </SettingMainBox>
  );
};
