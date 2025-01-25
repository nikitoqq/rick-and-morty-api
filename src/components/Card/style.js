import { NavLink } from "react-router";

import { styled, Typography, CardMedia, CardContent, Box } from "@mui/material";

export const CharacterCard = styled(NavLink)`
  display: flex;
  flex-direction: row;
  text-decoration: none;
  width: 650px;
  min-height: 320px;
  margin: 13.5px;
  border-radius: 0.5rem;
  @media (width < 600px) {
    flex-direction: column;
  }
`;

export const CharacterContent = styled(CardContent)`
  display: flex;
  flex-direction: column;
  padding: 10px 20px;
  flex-grow: 1;
`;

export const CharacterLocation = styled(Typography)`
  text-decoration: none;
  font-size: 18px;
`;

export const CharacterName = styled(Typography)`
  font-size: 1.6rem;
  font-weight: 800;
  line-height: 25px;
  margin-bottom: 4px;
`;

export const CharacterTypography = styled(Typography)`
  font-size: 16px;
  font-weight: 500;
  margin-top: 0.2rem;
`;

export const CharacterTypographyStatus = styled(Typography)`
  font-size: 16px;
  font-weight: 500;
`;

export const Image = styled(CardMedia)`
  border-top-left-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
  min-height: 320px;
  background-position: center;
`;

export const ImageWrapper = styled(Box)`
  flex-grow: 1;
  min-width: 320px;
`;

export const Circle = styled(Box)`
  width: 0.5rem;
  height: 0.5rem;
  margin-top: 3px;
  background-color: rgb(85, 204, 68);
  background-color: rgb(214, 61, 46);
  background-color: rgb(158, 158, 158);
  border-radius: 50%;
  margin-left: 0.375rem;
`;

export const StatusBox = styled(Box)`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
