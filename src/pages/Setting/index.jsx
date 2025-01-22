import { Switch } from "@mui/material";
import { SettingMainBox, SettingMainRowBox, SettingTypography } from "./styled";
import { useDispatch, useSelector } from "react-redux";
import { changeTheme } from "../../features/theme";
import { theme } from "../../theme";
import { changeSettingInput } from "../../features/settingInput";

export const Setting = () => {
  const themeState = useSelector(
    (state) => state.persistedReducer.themes.themes
  );
  const settingInput = useSelector(
    (state) => state.persistedReducer.settingInput.settingInput
  );
  const dispatch = useDispatch();

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

  return (
    <SettingMainBox>
      <SettingMainRowBox>
        <SettingTypography color={themeState.light}>
          Change Theme
        </SettingTypography>
        <Switch checked={settingInput} onChange={change} />
      </SettingMainRowBox>
    </SettingMainBox>
  );
};
