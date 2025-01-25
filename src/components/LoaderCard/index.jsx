import { useSelector } from "react-redux";

import {
  CharacterCard,
  CharacterContent,
  CharacterLocation,
  CharacterName,
  CharacterTypography,
  CharacterTypographyStatus,
  StatusBox,
  Circle,
  ImageWrapper,
} from "./styled";

export const LoaderCard = () => {
  const themeState = useSelector(
    (state) => state.persistedReducer.themes.themes
  );

  const styled = {
    contrast: themeState.contrastText,
    main: themeState.main,
    light: themeState.light,
    dark: themeState.dark,
  };

  return (
    <CharacterCard sx={{ backgroundColor: styled.main }}>
      <ImageWrapper sx={{ backgroundColor: styled.contrast }}></ImageWrapper>
      <CharacterContent>
        <CharacterName
          sx={{ backgroundColor: styled.contrast }}
        ></CharacterName>
        <CharacterTypography></CharacterTypography>
        <StatusBox>
          <Circle sx={{ backgroundColor: styled.contrast }} />
        </StatusBox>
        <CharacterTypography></CharacterTypography>
        <CharacterTypographyStatus
          sx={{ backgroundColor: styled.contrast }}
        ></CharacterTypographyStatus>
        <CharacterTypography></CharacterTypography>
        <CharacterLocation
          sx={{ backgroundColor: styled.contrast }}
        ></CharacterLocation>
        <CharacterTypography></CharacterTypography>
        <CharacterLocation
          sx={{ backgroundColor: styled.contrast }}
        ></CharacterLocation>
      </CharacterContent>
    </CharacterCard>
  );
};
