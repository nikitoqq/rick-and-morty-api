import { Switch } from "@mui/material";
import { SettingMainBox, SettingMainRowBox, SettingTypography } from "./styled";
import { useDispatch, useSelector } from "react-redux";
import { changeTheme } from "../../features/theme/themeSlice";
import { theme } from "../../theme";

export const Setting = () => {
  const themeState = useSelector((state) => state.themes.themes);
  const dispatch = useDispatch();

  const change = (e) =>
    dispatch(
      changeTheme(
        e.target.checked === false
          ? theme.palette.primary
          : theme.palette.secondary
      )
    )

  console.log(themeState);

  return (
    <SettingMainBox>
      <SettingMainRowBox>
        <SettingTypography>Change Theme</SettingTypography>
        <Switch onChange={change} />
      </SettingMainRowBox>
    </SettingMainBox>
  );
};
