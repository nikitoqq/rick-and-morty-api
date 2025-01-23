import { useSelector } from "react-redux";

import { LoadingIcon } from "./styled";

export const Loader = () => {
  const themeState = useSelector(
    (state) => state.persistedReducer.themes.themes
  );

  const styled = {
    colorContrast: themeState.contrastText,
  };

  return (
    <>
      <LoadingIcon sx={{ color: styled.colorContrast }} />{" "}
    </>
  );
};
