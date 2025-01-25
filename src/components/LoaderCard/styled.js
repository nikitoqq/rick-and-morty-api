import { Box, Skeleton, styled } from "@mui/material";

export const CharacterCard = styled(Box)`
  display: flex;
  flex-direction: row;
  text-decoration: none;
  width: 650px;
  min-height: 300px;
  margin: 13.5px;
  border-radius: 0.5rem;
`;

export const CharacterContent = styled(Box)`
  display: flex;
  flex-direction: column;
  padding: 10px 20px;
  flex-grow: 1;
`;

export const CharacterLocation = styled(Skeleton)`
  text-decoration: none;
  font-size: 18px;
  width: 190px;
  height: 24px;
`;

export const CharacterName = styled(Skeleton)`
  font-size: 1.6rem;
  font-weight: 800;
  line-height: 25px;
  margin-bottom: 4px;
  width: 140px;
  height: 24px;
`;

export const CharacterTypography = styled(Skeleton)`
  font-size: 16px;
  font-weight: 500;
  margin-top: 0.2rem;
  width: 120px;
  height: 24px;
`;

export const CharacterTypographyStatus = styled(Skeleton)`
  font-size: 16px;
  font-weight: 500;
  width: 240px;
  height: 24px;
`;

export const ImageWrapper = styled(Box)`
  flex-grow: 1;
  min-width: 300px;
  border-top-left-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
`;

export const Circle = styled(Skeleton)`
  width: 0.5rem;
  height: 0.8rem;
  margin-top: 3px;
  border-radius: 50%;
  margin-left: 0.375rem;
`;

export const StatusBox = styled(Box)`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
